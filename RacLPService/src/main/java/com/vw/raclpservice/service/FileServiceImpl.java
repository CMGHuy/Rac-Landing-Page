package com.vw.raclpservice.service;

import com.jcraft.jsch.JSchException;
import com.vw.raclpservice.constants.RaCLPConstants;
import com.vw.raclpservice.dto.RaCLPResponseDto;
import com.vw.raclpservice.entity.ExportSiebelCSVObjectNameMap;
import com.vw.raclpservice.entity.ImportToken;
import com.vw.raclpservice.entity.TemplateProperty;
import com.vw.raclpservice.scp.RaCSCPClient;
import com.vw.raclpservice.util.CSVUtil;
import com.vw.raclpservice.util.ExcelUtil;
import com.vw.raclpservice.util.MapUtil;
import com.vw.raclpservice.util.TemplateUtil;
import org.apache.commons.io.ByteOrderMark;
import org.apache.commons.io.IOUtils;
import org.apache.commons.io.input.BOMInputStream;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.tika.detect.AutoDetectReader;
import org.apache.tika.exception.TikaException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class FileServiceImpl implements FileService{
    private static final Logger LOG = LoggerFactory.getLogger(FileServiceImpl.class);

    @Autowired
    private RaCSCPClient scpClient;

    @Value("${local.file.path}")
    private String localFilePath;

    @Value("${local.archive.file.path}")
    private String localArchivePath;

    @Value("${template.file.path.xlsx}")
    private String templateFilePathXls;

    @Value("${template.file.path.csv}")
    private String templateFilePathCsv;

    @Value("${siebel.export.integration.object.name.map}")
    private String exportFileObjectNamesMapping;

    String inboxFile;

    String archiveFile;

    CSVUtil csvUtil = new CSVUtil();

    TemplateUtil templateUtil = new TemplateUtil();

    ExcelUtil excelUtil = new ExcelUtil();

    MapUtil mapUtil = new MapUtil();

    Boolean isCSV=false;



    @Override
    public Boolean uploadFileToLocal(MultipartFile file, ImportToken tokenDetails, RaCLPResponseDto response) {
        try {

            String origFileNameWithPath = file.getOriginalFilename();
            LOG.info("origFileNameWithPath {}", origFileNameWithPath);

            String origFileName = Paths.get(origFileNameWithPath).getFileName().toString().replace(".CSV",".csv");
            LOG.info("origFileName {}", origFileName);

            String fileTimeStamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("uuuuMMddHHmmss.SSS"));

            String inboxFileName = tokenDetails.getImportType().concat(RaCLPConstants.DOT).
                    concat(fileTimeStamp).concat(RaCLPConstants.DOT).
                    concat(tokenDetails.getCompanyId()).concat(RaCLPConstants.DOT).
                    concat(tokenDetails.getProcEntityId()).concat(RaCLPConstants.DOT).
                    concat(origFileName);
            LOG.info("inboxFileName : {}", inboxFileName);

            Path pathToLocalFile = Paths.get(localFilePath);
            Path pathToArchiveFile = Paths.get(localArchivePath);
            //Path pathToTemplateFile = Paths.get(templateFilePath);


            if (!Files.exists(pathToLocalFile)) {
                Files.createDirectories(pathToLocalFile);
                LOG.info(localFilePath + " folder created.");
            }
            if (!Files.exists(pathToArchiveFile)) {
                Files.createDirectories(pathToArchiveFile);
                LOG.info(localArchivePath + " folder created.");
            }
            String inboxFile = localFilePath + inboxFileName;
            String archiveFile = localArchivePath + inboxFileName;
            //String originalFileDirectory = inboxFile + ".att";
            //String originalFile = originalFileDirectory+"/"+origFileName;

            long fileSize = Files.copy(file.getInputStream(), Paths.get(inboxFile), StandardCopyOption.REPLACE_EXISTING);

            if(inboxFile.contains(".csv")){
                changeEncoding(inboxFile);
                csvUtil.convertCsvToXls(localFilePath,inboxFile,detectDelimiter(inboxFile));
                inboxFile = inboxFile.replace(".csv",".xlsx");
                isCSV=true;
            }
            if(isCSV){
                validateFile(true,inboxFile,archiveFile, templateFilePathCsv,tokenDetails,response,origFileName,
                        inboxFileName);
            }else{
                validateFile(false,inboxFile,archiveFile, templateFilePathXls,tokenDetails,response,origFileName,
                        inboxFileName);
            }
            //copy original file if validation is successful
            if(!response.getErrorCode().equalsIgnoreCase("1")){
                //scpClient.uploadFile();
            }

        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        isCSV=false;
        return true;
    }

    @Override
    public Boolean validateFile(Boolean isCSV,String inboxFile, String archiveFile, String templateFilePath, ImportToken tokenDetails,
                                RaCLPResponseDto response,String origFileName,String inboxFileName) {
        RaCLPConstants.DOCTYPE doctype = RaCLPConstants.DOCTYPE.valueOf(tokenDetails.getImportType());
        Map<TemplateProperty,List<Object>> valuesFromExcelFile = getValuesFromExcel(isCSV,inboxFile,archiveFile,templateFilePath,tokenDetails,response);
        if(response.getErrorCode().equals("1")){
            return false;
        }else{
            createCsvFileInArchiveFolder(inboxFile,archiveFile,tokenDetails,response,valuesFromExcelFile,origFileName,
                    inboxFileName);
        }
        LOG.info("doctype : {}",doctype.name());
        return true;
    }

    @Override
    public Map<TemplateProperty, List<Object>> getValuesFromExcel(Boolean isCsv,String inboxFile, String archiveFile,
                                                                  String templateFilePath,ImportToken importToken,
                                                                  RaCLPResponseDto raCLPResponseDto) {
        LOG.info("Reading Excel/CSV file started");
        int size=0;
        //7 for all cases
        //int dataLineStart = 6 ;
        int dataLineStart = 7;
        if(importToken.getImportType().equalsIgnoreCase("RIL") ||
                importToken.getImportType().equalsIgnoreCase("RIC") ||
                        importToken.getImportType().equalsIgnoreCase("RIB")){
            dataLineStart=8;
        }
        int headerRow = 6;
        //int headerRow = 5;
        if(isCsv){
            headerRow =1;
            dataLineStart=2;
        }


        Map<TemplateProperty,List<Object>> mapFromExcelFile = new HashMap<>();
        //Map<TemplateProperty,List<Object>> treeMapFromExcelFile = new TreeMap<>();
        List<Object> cellsFromColumn = new ArrayList<>();
        List<TemplateProperty> templatePropertyList = templateUtil.getTemplate(importToken.getImportType(),templateFilePath);
        File localFile = new File(inboxFile);
        try {
            Workbook workbook = WorkbookFactory.create(localFile);
            Boolean isTemplateCorrect = this.excelUtil.validateExcelTemplate(workbook, templatePropertyList, headerRow, raCLPResponseDto);
            if (isTemplateCorrect) {
                for(TemplateProperty templateProperty:templatePropertyList){
                    if(templateProperty.isMandatory()){
                        size= excelUtil.getCellsFromColumn(workbook,templateProperty,-1,dataLineStart,raCLPResponseDto,true,isCsv).size();
                        if(size!=0){
                            break;
                        }

                    }
                }
                //get details from excel
                if(raCLPResponseDto.getErrorCode().equals("0")){
                    for(TemplateProperty templateProperty:templatePropertyList){
                        if(templateProperty.getColumnHeader().equalsIgnoreCase("NO_MAPPING")){
                            continue;
                        }
                        cellsFromColumn = excelUtil.getCellsFromColumn(workbook,templateProperty,size,dataLineStart,raCLPResponseDto,false,isCsv);
                        /*if(!raCLPResponseDto.getErrorCode().equals("0")){
                            raCLPResponseDto.addErrorMessagesToList();
                        }*/
                        mapFromExcelFile.put(templateProperty,cellsFromColumn);
                        //treeMapFromExcelFile.put(templateProperty,cellsFromColumn);

                    }
                    //createCsvFileInArchiveFolder(inboxFile,archiveFile,importToken,raCLPResponseDto,mapFromExcelFile);
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        //Map<TemplateProperty,List<Object>> sortedMap = mapUtil.getMapSortedByColumnNumber(mapFromExcelFile);
        //System.out.println("test");
        raCLPResponseDto.addErrorMessagesToList();
        /*for(String errorMessage:raCLPResponseDto.getErrorMessages()){
            System.out.println(errorMessage);
        }*/
        LOG.info("Completed reading from Excel file");
        return mapFromExcelFile;
    }

    @Override
    public Boolean createCsvFileInArchiveFolder(String inboxFile, String archiveFile, ImportToken tokenDetails,
                                                RaCLPResponseDto response,
                                                Map<TemplateProperty,List<Object>> detailsFromImportFile,
                                                String origFileName,String inboxFileName) {
        LOG.info("Creating CSV file in archive");
        ExportSiebelCSVObjectNameMap exportSiebelCSVObjectNameMap= new ExportSiebelCSVObjectNameMap();
        String exportCsvSiebelIntName="# ";
        String exportCsvColumnHeaderString="";
        String exportCsvColumnHeaderStringAppender;
        Integer numberOfRowsForExportCSV=0;
        int numberOfColumns=detailsFromImportFile.keySet().size();
        String csvArchiveFile = archiveFile.replace(".xlsx",".csv");
        if(archiveFile.contains(".xlsx")){
            csvArchiveFile= archiveFile.replace(".xlsx",".csv");
        }else if (archiveFile.contains(".xls")){
            csvArchiveFile= archiveFile.replace(".xls",".csv");
        }
        ArrayList<String[]> dataForExportCsv = new ArrayList<String[]>();
        //first line in export csv
        exportSiebelCSVObjectNameMap = templateUtil.getExportCSVSiebelObjectNameMap(tokenDetails.getImportType(),exportFileObjectNamesMapping);
        exportCsvSiebelIntName+=exportSiebelCSVObjectNameMap.getExportCsvSiebelObjectName();

        //find maximum column number

        //second line in export csv
        for(int i=1;i<=detailsFromImportFile.keySet().size();i++){
        //for(TemplateProperty templatePropertyPopulated:detailsFromImportFile.keySet()){
            for(TemplateProperty templateProperty:detailsFromImportFile.keySet()){
                if(templateProperty.getColumnNumber().equalsIgnoreCase("Column"+i)){
                    numberOfColumns--;
                    if(templateProperty.getColumnHeader().equalsIgnoreCase("NO_COLUMN")){
                        if(exportCsvColumnHeaderString.charAt(exportCsvColumnHeaderString.length()-1)==','){
                            exportCsvColumnHeaderString=exportCsvColumnHeaderString.substring(0,exportCsvColumnHeaderString.length()-1);
                        }
                        continue;
                    }
                    exportCsvColumnHeaderString+=templateProperty.getColumnHeader();
                    if(numberOfColumns!=0){
                        exportCsvColumnHeaderString+=",";
                    }
                    break;
                }


            }
        }

        if(tokenDetails.getImportType().equalsIgnoreCase("RSC")){
            exportCsvColumnHeaderStringAppender="# VW Dealer Campaign Detail.Doctype," +
                    "VW Dealer Campaign Detail.Importer Id," +
                    "VW Dealer Campaign Detail.Campaign Id,";
        }else{
            exportCsvColumnHeaderStringAppender="# VW ChassiLoad VIN.Doctype," +
                    "VW ChassiLoad VIN.Company Id," +
                    "VW ChassiLoad VIN.Reimbursement Id,";
        }
        exportCsvColumnHeaderString=exportCsvColumnHeaderStringAppender+exportCsvColumnHeaderString;
        LOG.info(exportCsvColumnHeaderString);
        dataForExportCsv.add(new String[]{exportCsvSiebelIntName});
        dataForExportCsv.add(new String[]{exportCsvColumnHeaderString});
        //check mandatory field size
        for(TemplateProperty templateProperty:detailsFromImportFile.keySet()){
            if(templateProperty.isMandatory()){
                numberOfRowsForExportCSV=detailsFromImportFile.get(templateProperty).size();
            }/*else{

            }*/
        }
        //populate csv with data
        for(int i=0;i<numberOfRowsForExportCSV;i++){
            String rowLineForCsv=tokenDetails.getImportType()+","+tokenDetails.getCompanyId()+","+
                    tokenDetails.getProcEntityId()+",";
            numberOfColumns=detailsFromImportFile.keySet().size();
            for(int k=1;k<=detailsFromImportFile.keySet().size();k++){
                for(TemplateProperty templateProperty:detailsFromImportFile.keySet()){
                    /*if(templateProperty.getColumnHeader().equalsIgnoreCase("NO_COLUMN")) {
                        if(rowLineForCsv.charAt(rowLineForCsv.length()-1)==','){

                        }
                    }*/
                        try{
                            if(templateProperty.getColumnNumber().equalsIgnoreCase("Column"+k)){
                                numberOfColumns--;
                                if(templateProperty.getColumnHeader().equalsIgnoreCase("NO_COLUMN")){
                                    if(rowLineForCsv.charAt(rowLineForCsv.length()-1)==','){
                                        rowLineForCsv=rowLineForCsv.substring(0,rowLineForCsv.length()-1);
                                    }
                                    continue;
                                }
                                if(!templateProperty.isMandatory() &&
                                        null==detailsFromImportFile.get(templateProperty).get(i)){
                                    rowLineForCsv+=",";
                                }else{
                                    rowLineForCsv+=detailsFromImportFile.get(templateProperty).get(i);
                                }
                                if(numberOfColumns!=0){
                                    rowLineForCsv+=",";
                                }
                                break;
                            }
                        }catch(IndexOutOfBoundsException ex){
                            System.out.println(i);
                        }


                }
            }
            dataForExportCsv.add(new String[]{rowLineForCsv});
        }
        csvUtil.writeToCsvFile(csvArchiveFile,dataForExportCsv);

        try {
            scpClient.uploadFile(csvArchiveFile,inboxFile,origFileName,inboxFileName);
        } catch (JSchException e) {
            return false;
        } catch (IOException e) {
            return false;
        }
        return true;
    }


    private char detectDelimiter(String inboxFile) throws IOException {

        Pattern pat = Pattern.compile("(?s).*[\\n\\r].*");
        String line;
        String outputString = null;
        char delimiter = 0;

        try (Scanner in = new Scanner(Paths.get(inboxFile))) {

            while ((line = in.findWithinHorizon(pat, 0)) != null) {
                outputString = line.replaceAll("(?<!\\r)\\n", "");
            }

            InputStream stream = new ByteArrayInputStream(outputString.getBytes());
            //comment// reuse getBOMHandledStream() logic //comment//
            BOMInputStream bOMInputStream = new BOMInputStream(stream);
            ByteOrderMark bom = bOMInputStream.getBOM();
            String charsetName = bom == null ? StandardCharsets.UTF_8.toString() : bom.getCharsetName();
            Reader outPutReaderObject= new InputStreamReader(bOMInputStream, charsetName);

            String targetString = IOUtils.toString(outPutReaderObject);

            Pattern p = Pattern.compile("\\W");
            Matcher m = p.matcher(targetString.replace(" ", "").split("\\r")[0]);
            if (m.find())
            {

                String EncodedDelimiter =new String(m.group(0).getBytes(charsetName), StandardCharsets.UTF_8);
                delimiter = EncodedDelimiter.charAt(0);
            }
            in.close();

            return delimiter;
        }
    }


    private void changeEncoding(String sourcePath) throws IOException {
        String tempFile = sourcePath.concat("Temp.csv");
        //String tempFile = sourcePath;
        try {
            FileInputStream fi = new FileInputStream(sourcePath);
            Charset charset = new AutoDetectReader(fi).getCharset();
            //System.out.println("charset is: "+ charset.toString());
            fi.close();
            if(!charset.toString().contains("8") && charset.toString().contains("16LE")){
                FileInputStream fis = new FileInputStream(sourcePath);
                InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_16LE);
                Reader in = new BufferedReader(isr);
                FileOutputStream fos = new FileOutputStream(tempFile);
                OutputStreamWriter osw = new OutputStreamWriter(fos, StandardCharsets.UTF_8);
                Writer out = new BufferedWriter(osw);
                int ch;
                while ((ch = in.read()) > -1) {
                    out.write(ch);
                }
                out.close();
                in.close();

                Files.delete(Paths.get(sourcePath));
                Files.copy(Paths.get(tempFile), Paths.get(sourcePath),StandardCopyOption.REPLACE_EXISTING);
                Files.delete(Paths.get(tempFile));
            }
        } catch (IOException | TikaException e) {
            e.printStackTrace();
        }

    }
}

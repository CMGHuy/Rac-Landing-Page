package com.vw.raclpservice.util;

import com.opencsv.*;


import org.apache.commons.lang3.math.NumberUtils;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;

import java.io.*;
import java.util.ArrayList;

public class CSVUtil {
    public static final String FILE_EXTN = ".xlsx";

    public static String convertCsvToXls(String xlsFileLocation, String csvFilePath, char FILE_DELIMITER){
        SXSSFSheet sheet = null;
        CSVReader reader = null;
        Workbook workBook = null;
        String generatedXlsFilePath = "";
        FileOutputStream fileOutputStream = null;

        try {

            /**** Get the CSVReader Instance & Specify The Delimiter To Be Used ****/
            String[] nextLine;

            //begin old deprecated code
            //reader = new CSVReader(new FileReader(csvFilePath), FILE_DELIMITER);
            //end old deprecated code
            CSVParser csvParser = new CSVParserBuilder().withSeparator(FILE_DELIMITER).build();
            reader = new CSVReaderBuilder(new FileReader(csvFilePath)).withCSVParser(csvParser).build();


            workBook = new SXSSFWorkbook();
            sheet = (SXSSFSheet) workBook.createSheet("Sheet");

            int rowNum = 0;
            while((nextLine = reader.readNext()) != null) {
                Row currentRow = sheet.createRow(rowNum++);
                for(int i=0; i < nextLine.length; i++) {
                    if(nextLine[i].equals("")){
                        //System.out.println(currentRow);
                        continue;
                    } else if(NumberUtils.isDigits(nextLine[i])) {
                        if(nextLine[i].startsWith("0")){
                            currentRow.createCell(i).setCellValue(nextLine[i]);
                        }else{
                            currentRow.createCell(i).setCellValue(Integer.parseInt(nextLine[i]));
                        }

                    } else if (NumberUtils.isCreatable(nextLine[i])) {
                        currentRow.createCell(i).setCellValue(Double.parseDouble(nextLine[i]));
                    } else {
                        currentRow.createCell(i).setCellValue(nextLine[i]);
                    }
                }
            }

            generatedXlsFilePath = xlsFileLocation + csvFilePath.replace("persistent/inbox/","").replace(".csv","") + FILE_EXTN;
            System.out.println(generatedXlsFilePath);

            fileOutputStream = new FileOutputStream(generatedXlsFilePath.trim());
            workBook.write(fileOutputStream);

        } catch(Exception exObj) {
        } finally {
            try {

                /**** Closing The Excel Workbook Object ****/
                workBook.close();

                /**** Closing The File-Writer Object ****/
                fileOutputStream.close();

                /**** Closing The CSV File-ReaderObject ****/
                reader.close();
            } catch (IOException ioExObj) {
            }
        }

        return generatedXlsFilePath;

    }

    public Boolean writeToCsvFile(String filePath, ArrayList<String[]> inputArrayList){
        File file=new File(filePath);
        try {
            FileWriter outputFile = new FileWriter(file);
            CSVWriter csvWriter=new CSVWriter(outputFile,',',
                    CSVWriter.NO_QUOTE_CHARACTER,
                    CSVWriter.NO_ESCAPE_CHARACTER,
                    CSVWriter.RFC4180_LINE_END);
            csvWriter.writeAll(inputArrayList);
            csvWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
}

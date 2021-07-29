package com.vw.raclpservice.util;

import com.vw.raclpservice.entity.ExportSiebelCSVObjectNameMap;
import com.vw.raclpservice.entity.TemplateProperty;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class TemplateUtil {

    public List<TemplateProperty> getTemplate(String importType, String templateFilePath){
        List<TemplateProperty> templatePropertyList= new ArrayList<>();
        String columnNumber="";
        String valueString="";
        Properties prop= new Properties();
        try {
            if(importType.equalsIgnoreCase("RSC")){
                InputStream input = new FileInputStream(templateFilePath+"/RSCTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RCL")){
                InputStream input = new FileInputStream(templateFilePath+"/RCLTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RIL")){
                InputStream input = new FileInputStream(templateFilePath+"/RILTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RCB")){
                InputStream input = new FileInputStream(templateFilePath+"/RCBTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RIB")){
                InputStream input = new FileInputStream(templateFilePath+"/RIBTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RCC")){
                InputStream input = new FileInputStream(templateFilePath+"/RCCTemplate.properties");
                prop.load(input);
            }else if(importType.equalsIgnoreCase("RIC")){
                InputStream input = new FileInputStream(templateFilePath+"/RICTemplate.properties");
                prop.load(input);
            }


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("number of columns"+prop.size());
        //populate sorted columns, Column order changed in property file would not effect
        for(int i=0;i<prop.size();i++){
            TemplateProperty templateProperty= new TemplateProperty();
            columnNumber="column"+(i+1);
            valueString = prop.getProperty(columnNumber);
            templateProperty.setColumnNumber(columnNumber);
            templateProperty.setColumnName(getRespectiveToken(valueString,1));
            templateProperty.setUploadedFileColumnName(getRespectiveToken(valueString,2));
            templateProperty.setColumnHeader(getRespectiveToken(valueString,3));
            templateProperty.setTypeOfColumn(getRespectiveToken(valueString,4));
            templateProperty.setSizeOfColumn(getRespectiveToken(valueString,5));
            if(getRespectiveToken(valueString,6).equalsIgnoreCase("true")){
                templateProperty.setMandatory(true);
            }if(getRespectiveToken(valueString,6).equalsIgnoreCase("false")){
                templateProperty.setMandatory(false);
            }if(getRespectiveToken(valueString,7).equalsIgnoreCase("true")){
                templateProperty.setMandatoryForImportSide(true);
            }if(getRespectiveToken(valueString,7).equalsIgnoreCase("false")){
                templateProperty.setMandatoryForImportSide(false);
            }if(getRespectiveToken(valueString,8).equalsIgnoreCase("true")){
                templateProperty.setUnique(true);
            }if(getRespectiveToken(valueString,8).equalsIgnoreCase("false")){
                templateProperty.setUnique(false);
            }
            templatePropertyList.add(templateProperty);
        }
        System.out.println("populated property"+templatePropertyList.size());
        return templatePropertyList;
    }

    public String getRespectiveToken(String valueString, Integer tokenNumber){
        String[] tokens= valueString.split(",");
        String returnValueToken = "";
        try{
            switch(tokenNumber){
                case 1: returnValueToken= tokens[0];
                    break;
                case 2: returnValueToken= tokens[1];
                    break;
                case 3: returnValueToken= tokens[2];
                    break;
                case 4: returnValueToken= tokens[3];
                    break;
                case 5: returnValueToken= tokens[4];
                    break;
                case 6: returnValueToken= tokens[5];
                    break;
                case 7: returnValueToken= tokens[6];
                    break;
                case 8: returnValueToken= tokens[7];
                    break;
                default:break;
            }

        }catch (ArrayIndexOutOfBoundsException exception){
            System.out.println("");
        }
        return returnValueToken;
    }

    public ExportSiebelCSVObjectNameMap getExportCSVSiebelObjectNameMap(String importType, String filePath){
        ExportSiebelCSVObjectNameMap exportSiebelCSVObjectNameMap = new ExportSiebelCSVObjectNameMap();
        importType = importType.toUpperCase();
        Properties prop= new Properties();
        InputStream input = null;
        try {
            input = new FileInputStream(filePath+"/SiebelExportIntegrationObjectNames.properties");
            prop.load(input);
            exportSiebelCSVObjectNameMap.setImportType(importType);
            exportSiebelCSVObjectNameMap.setExportCsvSiebelObjectName(prop.getProperty(importType));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return exportSiebelCSVObjectNameMap;
    }
}

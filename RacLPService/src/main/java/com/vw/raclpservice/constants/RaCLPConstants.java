package com.vw.raclpservice.constants;

import java.util.stream.Stream;

public class RaCLPConstants {

    public static final String DOT = ".";
    public static final String BLANK = "";
    public static final String EXPORT_DATE_FORMAT = "yyyyMMdd";
    //public static final String IMPORT_DATE_FORMAT = "MM/dd/yyyy";
    public static final String IMPORT_DATE_FORMAT = "MM/dd/yyyy";
    public static final int MAX_VALID_YR  = 2030;
    public static final int MIN_VALID_YR  = 2000;

    public enum DOCTYPE {
        RSC,RCL,RIL,RCB,RIB,RCC,RIC;
    }

    public enum IMPORTHEADERS {
        RSC_INTEGRATION_OBJECT_NAME("# RSC_INTEGRATION_OBJECT_NAME"),
        RCL_INTEGRATION_OBJECT_NAME("# RCL_INTEGRATION_OBJECT_NAME"),
        RIL_INTEGRATION_OBJECT_NAME("# RIL_INTEGRATION_OBJECT_NAME"),
        RCB_INTEGRATION_OBJECT_NAME("# RCB_INTEGRATION_OBJECT_NAME"),
        RIB_INTEGRATION_OBJECT_NAME("# RIB_INTEGRATION_OBJECT_NAME"),
        RCC_INTEGRATION_OBJECT_NAME("# RCC_INTEGRATION_OBJECT_NAME"),
        RIC_INTEGRATION_OBJECT_NAME("# RIC_INTEGRATION_OBJECT_NAME");
        //IFUFIELDS("# VW Dealer Campaign Detail.Doctype,VW Dealer Campaign Detail.Importer Id,VW Dealer Campaign Detail.Campaign Id,VW Dealer Campaign Detail.IBA Id,VW Dealer Campaign Detail.IBA Number,VW Dealer Campaign Detail.Importer Name,VW Dealer Campaign Detail.Customer Name,VW Dealer Campaign Detail.Parent Region,VW Dealer Campaign Detail.Region,VW Dealer Campaign Detail.AF Brand Audi,VW Dealer Campaign Detail.AF Brand Seat,VW Dealer Campaign Detail.AF Brand Skoda,VW Dealer Campaign Detail.AF Brand LCW,VW Dealer Campaign Detail.AF Brand VW PC,VW Dealer Campaign Detail.Brand Audi,VW Dealer Campaign Detail.Brand Seat,VW Dealer Campaign Detail.Brand Skoda,VW Dealer Campaign Detail.Brand VW LCW,VW Dealer Campaign Detail.Brand VW PC,VW Dealer Campaign Detail.Dlvr Brand Audi,VW Dealer Campaign Detail.Dlvr Brand Seat,VW Dealer Campaign Detail.Dlvr Brand Skoda,VW Dealer Campaign Detail.Dlvr Brand LCW,VW Dealer Campaign Detail.Dlvr Brand VW PC"),
        //comment// changed 20/4/2020, removed IBA id, IBA number and Importer name; relocated "VW Dealer Campaign Detail.Dlvr Brand VW PC" to come before AUDI //comment//
        //IFUFIELDS("# VW Dealer Campaign Detail.Doctype,VW Dealer Campaign Detail.Importer Id,VW Dealer Campaign Detail.Campaign Id,VW Dealer Campaign Detail.Customer Name,VW Dealer Campaign Detail.Parent Region,VW Dealer Campaign Detail.Region,VW Dealer Campaign Detail.AF Brand Audi,VW Dealer Campaign Detail.AF Brand Seat,VW Dealer Campaign Detail.AF Brand Skoda,VW Dealer Campaign Detail.AF Brand LCW,VW Dealer Campaign Detail.AF Brand VW PC,VW Dealer Campaign Detail.Brand Audi,VW Dealer Campaign Detail.Brand Seat,VW Dealer Campaign Detail.Brand Skoda,VW Dealer Campaign Detail.Brand VW LCW,VW Dealer Campaign Detail.Brand VW PC,VW Dealer Campaign Detail.Dlvr Brand VW PC ,VW Dealer Campaign Detail.Dlvr Brand Audi,VW Dealer Campaign Detail.Dlvr Brand Seat,VW Dealer Campaign Detail.Dlvr Brand Skoda,VW Dealer Campaign Detail.Dlvr Brand LCW"),
        //CHLINITIALS("# VWCHLImportCSVIO"),
        //CHLFIELDS("# VW ChassiLoad VIN.Doctype,VW ChassiLoad VIN.Company Id,VW ChassiLoad VIN.Reimbursement Id,VW ChassiLoad VIN.Vin Nr,VW ChassiLoad VIN.Cust Brand,VW ChassiLoad VIN.Cust Region,VW ChassiLoad VIN.Cust Country,VW ChassiLoad VIN.Cust Model,VW ChassiLoad VIN.Cust Reg Dt");

        private String headerValue;

        public String getHeaderValue() {
            return this.headerValue;
        }

        private IMPORTHEADERS(String headerValue) {
            this.headerValue = headerValue;
        }

        public static String[] getHeaderValues() {
            return Stream.of(IMPORTHEADERS.values()).map(IMPORTHEADERS::toString).toArray(String[]::new);
        }

        @Override public String toString() { return headerValue; }

    }




    public enum ERRORS {
        INVALID_FILE_FORMAT("ERROR::Invalid file format, must be csv."),
        UPLOAD_ERROR("ERROR::Error occurred while uploading file!!"),
        INVALID_COLUMN_HEADING("ERROR::Invalid column heading %s, please make sure to use correct column heading."),
        MISSING_COLUMN_HEADING("ERROR::Missing column heading %s, please make sure to use correct column heading."),
        DUPLICATE_COLUMN_HEADING("ERROR::Duplicate column heading %s, please make sure to use correct column heading."),
        MISSING_FIELD_VALUES("ERROR::Missing field values in line %s, please check for missing values / comma separators."),
        EXCESS_FIELD_VALUES("ERROR::Too many values in line %s, please check for excessive values / comma separators."),
        MISSING_MANDATORY_FIELD("ERROR::Missing value for mandatory field in Cell "),
        INVALID_DATA_TYPE("ERROR::Invalid data type for Cell "),
        INVALID_DATA_LENGTH("ERROR::Invalid data length for Cell "),
        INVALID_FILE_TEMPLATE("ERROR::Invalid Template of uploaded file. "),
        VALUE_ALREADY_EXISTS("ERROR::Value found in Cell "),
        INVALID_DATE_FORMAT("ERROR::Invalid date format for field %s in line %s, expected format %s"),
        INVALID_DATE("ERROR::Invalid date for Cell "),
        INVALID_CSV_FILE("ERROR::Error while reading CSV file"),
        INVALID_VALUE("ERROR::Invalid Value found for Cell ");



        private String errorDesc;

        public String getErrorDesc() {
            return this.errorDesc;
        }

        private ERRORS(String errorDesc) {
            this.errorDesc = errorDesc;
        }

        //@Override public String toString() { return errorDesc; }

    }

    public enum DateFormat {
        //dateFormat1("yyyy-MM-dd"),
        dateFormat2("yyyyMMdd"),
        //dateFormat3("MM/dd/yyyy");
        //dateFormat3("dd/MM/yy"),
        dateFormat4("dd/MM/yyyy");
        //dateFormat5("yyyy.MM.dd");

        private static final String[] dateFormatArray = new String[]{
                //dateFormat1.dateFormat,
                dateFormat2.dateFormat,
                dateFormat4.dateFormat
                //dateFormat3.dateFormat,
                //dateFormat4.dateFormat,
                //dateFormat5.dateFormat
        };

        private final String dateFormat;

        DateFormat(String headerValue) {
            this.dateFormat = headerValue;
        }

        public static String[] getHeaderValuesTrue() {
            return dateFormatArray;
        }
        @Override public String toString() { return dateFormat; }

    }



}

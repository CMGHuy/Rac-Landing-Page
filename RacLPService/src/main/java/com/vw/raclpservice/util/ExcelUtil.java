package com.vw.raclpservice.util;

import com.vw.raclpservice.constants.RaCLPConstants;
import com.vw.raclpservice.dto.RaCLPResponseDto;
import com.vw.raclpservice.entity.TemplateProperty;
import org.apache.commons.lang3.time.DateUtils;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.poi.hssf.usermodel.HSSFDataFormatter;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellReference;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatterBuilder;
import java.util.*;
import java.util.logging.Logger;

public class ExcelUtil {




    HSSFDataFormatter hdf = new HSSFDataFormatter();
    SimpleDateFormat format = new SimpleDateFormat(RaCLPConstants.IMPORT_DATE_FORMAT);
    SimpleDateFormat csvExportformat = new SimpleDateFormat(RaCLPConstants.EXPORT_DATE_FORMAT);
    Date date = null;
    String[] dateFormat = RaCLPConstants.DateFormat.getHeaderValuesTrue();
    DataFormatter dataFormatter = new DataFormatter((Locale.UK));



    public Boolean validateExcelTemplate(Workbook workbook,List<TemplateProperty> templatePropertyList,
                                         int headerRow, RaCLPResponseDto raCLPResponseDto){
        Boolean isMatched=true;
        Sheet sheet = workbook.getSheetAt(0);
        workbook.setMissingCellPolicy(Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
        workbook.setForceFormulaRecalculation(true);
        Row rowOfColumnHeaders = sheet.getRow(headerRow-1);
        for(TemplateProperty templateProperty:templatePropertyList){
            /*if(raCLPResponseDto.getErrorCode().equalsIgnoreCase("1")){
                continue;
            }*/
            if(templateProperty.getColumnName().equalsIgnoreCase("NO_COLUMN")){
                continue;
            }else{
                CellReference ref = new CellReference(templateProperty.getColumnName());
                if(String.valueOf(rowOfColumnHeaders.getCell(ref.getCol()).getRichStringCellValue()).contains("SEP")){
                    isMatched=false;
                    raCLPResponseDto.setErrorCode("1");
                    raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_CSV_FILE.getErrorDesc());
                    break;
                }
                if(!String.valueOf(rowOfColumnHeaders.getCell(ref.getCol()).getRichStringCellValue()).
                        contains(templateProperty.getUploadedFileColumnName())){
                    isMatched=false;
                    raCLPResponseDto.setErrorCode("1");
                    raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_FILE_TEMPLATE.getErrorDesc()+
                            "Expecting "+templateProperty.getUploadedFileColumnName()+" at column "+
                            templateProperty.getColumnName()+ ", found "+
                            rowOfColumnHeaders.getCell(ref.getCol()).getRichStringCellValue());
                    break;
                }
            }

        }
        return isMatched;

    }

    public List<Object> getCellsFromColumn(Workbook workbook, TemplateProperty templateProperty,
                                           int sizeOfAnchorArray, int dataLineStart,
                                           RaCLPResponseDto raCLPResponseDto, Boolean isSizeCheck, Boolean isCsv){
        List<Object> cellsInColumn= new ArrayList<>();
        String reducedString="";
        if (templateProperty.getColumnName().equals("")) {
            for (int i = 0; i < sizeOfAnchorArray; i++) {
                cellsInColumn.add("");
            }
            return cellsInColumn;
        }

        if(templateProperty.getColumnName().equalsIgnoreCase("NO_COLUMN")){
            for (int i=0; i < sizeOfAnchorArray; i++) {
                cellsInColumn.add("");
            }
            return cellsInColumn;
        }
        Sheet sheet = workbook.getSheetAt(0);
        workbook.setMissingCellPolicy(Row.MissingCellPolicy.CREATE_NULL_AS_BLANK);
        workbook.setForceFormulaRecalculation(true);
        CellReference ref = new CellReference(templateProperty.getColumnName());
        Boolean rowsExtendedSize=false;
        //int maxIterations=
        for(Row row : sheet) {
            if(!isSizeCheck){
                if(row.getRowNum()>=(dataLineStart-1)+sizeOfAnchorArray){
                    rowsExtendedSize=true;
                }
            }

            //if(numberOfIterations>=0){
            if(!rowsExtendedSize){
                if(row.getRowNum() >= dataLineStart-1) {
                    //if(row.getRowNum() >= dataLineStart - 1) {
                    Cell cell = row.getCell(ref.getCol());
                    try{
                        if(templateProperty.getTypeOfColumn().equalsIgnoreCase("ANY")){
                            Object valueToBeAdded =new Object();
                            try{
                                valueToBeAdded=String.valueOf(cell.getRichStringCellValue());
                            }catch (Exception ex){
                                valueToBeAdded=cell.getNumericCellValue();
                            }
                            cellsInColumn.add(valueToBeAdded);
                        }else{
                            switch (cell.getCellType()) {
                                case ERROR:
                                    raCLPResponseDto.setErrorCode("1");
                                /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()
                                        +cell.getAddress());*/
                                    raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                                            RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()
                                                    +cell.getAddress());
                                /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),
                                        RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()
                                                +cell.getAddress());*/
                                    cellsInColumn.add("ERROR");
                                    break;
                                case STRING:

                                /*if(templateProperty.getTypeOfColumn().equalsIgnoreCase("Date")){
                                   System.out.println("invalid");
                                }*/
                                    if(templateProperty.isMandatory() && (((cell.getRichStringCellValue().length()==0))
                                            ||(String.valueOf(cell.getRichStringCellValue()).equals("")))){
                                        raCLPResponseDto.setErrorCode("1");
                                    /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                            getErrorDesc()+templateProperty.getColumnName()+cell.getAddress());*/
                                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                +templateProperty.getUploadedFileColumnName());
                                    /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                            getErrorDesc()+cell.getAddress()+" for Field- "
                                            +templateProperty.getUploadedFileColumnName());*/
                                    }else{
                                        if(validateCell(isSizeCheck,cell,templateProperty,raCLPResponseDto,isCsv)){
                                            reducedString =String.valueOf(cell.getRichStringCellValue());
                                            if(!isSizeCheck){
                                                if(templateProperty.getSizeOfColumn().contains("CO")){
                                                    Integer length=Integer.parseInt(templateProperty.getSizeOfColumn().
                                                            split("-")[0]);
                                                    if(reducedString.length()>length){
                                                        reducedString= cutOffString(String.valueOf(cell.getRichStringCellValue()),length);
                                                    }
                                                }
                                                if(templateProperty.isUnique()){
                                                    if(!isRepeating(cellsInColumn,cell,raCLPResponseDto,reducedString)){
                                                        cellsInColumn.add(StringEscapeUtils.escapeCsv(reducedString));
                                                    }
                                                }else{
                                                    cellsInColumn.add(StringEscapeUtils.escapeCsv(reducedString));
                                                }
                                            }else{
                                                cellsInColumn.add(StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue())));
                                            }
                                        }
                                    }

                                    break;
                                case NUMERIC:
                                    if (templateProperty.getTypeOfColumn().equalsIgnoreCase("Date") &&  DateUtil.isValidExcelDate(cell.getNumericCellValue())) {
                                        if(templateProperty.isMandatory() && ((null==cell.getDateCellValue()))){
                                            raCLPResponseDto.setErrorCode("1");
                                            raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+cell.getAddress()+" for Field- "
                                                    +templateProperty.getUploadedFileColumnName());
                                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                +templateProperty.getUploadedFileColumnName());*/
                                        }else{
                                            if(validateCell(isSizeCheck,cell,templateProperty,raCLPResponseDto,isCsv)){
                                                //date = DateUtils.parseDate(dataFormatter.formatCellValue(cell), dateFormat);
                                                //String outputDateFormatted = format.format(dataFormatter.formatCellValue(cell));
                                                String outputDateFormatted;
                                                if (isValidateCsvExportDate(hdf.formatCellValue(cell))){
                                                    outputDateFormatted = format.format(date);
                                                }else {
                                                    outputDateFormatted = format.format(cell.getDateCellValue());
                                                    //System.out.println("Full date is: " + outputDateFormatted);
                                                /*System.out.println(String.format("month: %d, day: %d, year: %d",
                                                        cell.getLocalDateTimeCellValue().getMonth().getValue(),
                                                        cell.getLocalDateTimeCellValue().getDayOfMonth(),
                                                        cell.getLocalDateTimeCellValue().getYear()));

                                                 */
                                                }
                                                cellsInColumn.add(outputDateFormatted);
                                            }
                                        }
                                    }else {
                                        if(templateProperty.isMandatory() && (String.valueOf(cell.getNumericCellValue()).
                                                equalsIgnoreCase("0"))){
                                            raCLPResponseDto.setErrorCode("1");
                                        /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+templateProperty.getColumnName()+cell.getAddress());*/
                                            raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+cell.getAddress()+" for Field- "
                                                    +templateProperty.getUploadedFileColumnName());
                                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                +templateProperty.getUploadedFileColumnName());*/
                                        }else{
                                            if(validateCell(isSizeCheck,cell,templateProperty,raCLPResponseDto,isCsv)){
                                                cellsInColumn.add((int)cell.getNumericCellValue());
                                            }
                                        }

                                    }
                                    break;
                                case BOOLEAN:
                                    cellsInColumn.add(cell.getBooleanCellValue());
                                    break;
                                case FORMULA:
                                    switch (cell.getCachedFormulaResultType()) {
                                        case NUMERIC:
                                            if(templateProperty.isMandatory() && (0==cell.getNumericCellValue())){
                                                raCLPResponseDto.setErrorCode("1");
                                            /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+templateProperty.getColumnName()+cell.getAddress());*/
                                                raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                                                        RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                                +templateProperty.getUploadedFileColumnName());
                                            /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+cell.getAddress()+" for Field- "
                                                    +templateProperty.getUploadedFileColumnName());*/
                                            }else{
                                                if(validateCell(isSizeCheck,cell,templateProperty,raCLPResponseDto,isCsv)){
                                                    cellsInColumn.add((int)cell.getNumericCellValue());
                                                }

                                            }
                                            break;
                                        case STRING:
                                            if(templateProperty.isMandatory() && (((cell.getRichStringCellValue().length()==0))
                                                    ||(String.valueOf(cell.getRichStringCellValue()).equals("")))){
                                                raCLPResponseDto.setErrorCode("1");
                                            /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+cell.getAddress());*/
                                                raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                                                        RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                                +templateProperty.getUploadedFileColumnName());
                                            /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                    getErrorDesc()+cell.getAddress()+" for Field- "
                                                    +templateProperty.getUploadedFileColumnName());*/
                                            }else{
                                                if(validateCell(isSizeCheck,cell,templateProperty,raCLPResponseDto,isCsv)){
                                                    reducedString =String.valueOf(cell.getRichStringCellValue());
                                                    if(templateProperty.getSizeOfColumn().contains("CO")){
                                                        Integer length=Integer.parseInt(templateProperty.getSizeOfColumn().
                                                                split("-")[0]);
                                                        if(reducedString.length()>length){
                                                            reducedString= cutOffString(String.valueOf(cell.getRichStringCellValue()),length);
                                                        }
                                                    }
                                                    cellsInColumn.add(StringEscapeUtils.escapeCsv(reducedString));
                                                }
                                            }
                                            break;
                                        case ERROR:
                                            cellsInColumn.add("ERROR FORMULA");
                                            break;
                                    }
                                    break;
                                case BLANK:
                                    if(!isSizeCheck){
                                        if(templateProperty.isMandatory()){
                                            raCLPResponseDto.setErrorCode("1");
                                            raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                                                    RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                            getErrorDesc()+cell.getAddress()+" for Field- "
                                                            +templateProperty.getUploadedFileColumnName());
                                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+cell.getAddress()+" for Field- "
                                                +templateProperty.getUploadedFileColumnName());*/
                                        /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.MISSING_MANDATORY_FIELD.
                                                getErrorDesc()+cell.getAddress());*/
                                        }else{
                                            cellsInColumn.add("");
                                        }
                                    }
                                    break;
                                default:
                                    raCLPResponseDto.setErrorCode("1");
                                    raCLPResponseDto.addErrorMessage("ERROR:: Unexpected type of Value found in Uploaded File");
                            }
                        }

                    }catch(IllegalStateException e){
                        raCLPResponseDto.setErrorCode("1");
                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),"ERROR::Unexpected type of value found in "+
                                cell.getAddress()+" for Field- "
                                +templateProperty.getUploadedFileColumnName());
                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),"ERROR::Unexpected type of value found in "+
                                cell.getAddress()+" for Field- "
                                +templateProperty.getUploadedFileColumnName());*/
                        /*raCLPResponseDto.addErrorMessage("ERROR:: Unexpected type of value found in "+
                                cell.getAddress());*/
                    }catch(NumberFormatException e){
                        raCLPResponseDto.setErrorCode("1");
                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                                "ERROR::Unexpected type of value found in "+
                                cell.getAddress()+" for Field- "
                                +templateProperty.getUploadedFileColumnName());
                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),"ERROR::Unexpected type of value found in "+
                                cell.getAddress()+" for Field- "
                                +templateProperty.getUploadedFileColumnName());*/
                        /*raCLPResponseDto.addErrorMessage("ERROR:: Unexpected type of value found in "+
                                cell.getAddress());*/
                    }
                    /*
                    catch (ParseException e) {
                        raCLPResponseDto.setErrorCode("1");
                        //raCLPResponseDto.addErrorMessage(String.format("Invalid date format for cell %s. Please use following date formats: %s",cell.getAddress(), Arrays.toString(dateFormat)));
                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex());
                        raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),"ERROR::Invalid date format for "+
                                cell.getAddress()+" for Field- "
                                +templateProperty.getUploadedFileColumnName());

                    }
                    */


                }
            }


            /*}else{
                System.out.println(numberOfIterations);
            }*/
            //sizeOfAnchorArray--;
            //raCLPResponseDto.addErrorMessagesToList();
        }
       return cellsInColumn;
    }

    public boolean validateCell(Boolean sizeCheck, Cell cell, TemplateProperty templateProperty,
                                RaCLPResponseDto raCLPResponseDto, Boolean isCsv){
        //Number Type Check
        if(sizeCheck){
            return true;
        }
        if(templateProperty.getTypeOfColumn().equalsIgnoreCase("Integer")){
            //double numericCellValue = cell.getNumericCellValue();
            double numericCellValue=0.0;
            if(isCsv){
                try{
                    numericCellValue=cell.getNumericCellValue();
                }catch(Exception exception){
                    numericCellValue= Double.parseDouble(String.valueOf(cell.getRichStringCellValue()));
                }
            }else{
                numericCellValue=cell.getNumericCellValue();
            }

            if (Math.floor(numericCellValue) != numericCellValue){
                raCLPResponseDto.setErrorCode("1");
                /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()+
                        cell.getAddress() + ", Please correct and upload again.");*/
                raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),
                        RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()+
                        cell.getAddress()+" for Field "
                        +templateProperty.getUploadedFileColumnName()+ ", Please correct and upload again.");
                /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.INVALID_DATA_TYPE.getErrorDesc()+
                        cell.getAddress()+" for Field "
                        +templateProperty.getUploadedFileColumnName()+ ", Please correct and upload again.");*/
                return false;
            }else{
                return true;
            }
            /*else if(Integer.parseInt(templateProperty.getSizeOfColumn())!=0 &&
                    Double.toString(numericCellValue).length() >
                            Integer.parseInt(templateProperty.getSizeOfColumn())){
                raCLPResponseDto.setErrorCode("1");
                raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                        cell.getAddress()+", Max. Length- "+templateProperty.getSizeOfColumn());
                return false;
            }*/
            //else break;
        }else if(templateProperty.getTypeOfColumn().equalsIgnoreCase("String")){
            String cellString="";
            try{
                cellString = StringEscapeUtils.escapeCsv(String.valueOf(cell.getRichStringCellValue()));
            }catch(IllegalStateException ex){
                try{
                    cellString =String.valueOf(cell.getNumericCellValue()).split(".0")[0];
                }catch(ArrayIndexOutOfBoundsException e){
                    cellString =String.valueOf(cell.getNumericCellValue());
                }

            }

            if(templateProperty.getSizeOfColumn().contains("EX")) {
                String[] expectedFieldValues = templateProperty.getSizeOfColumn().split("-");
                if (cellString.length() != Integer.parseInt(expectedFieldValues[0])) {
                    raCLPResponseDto.setErrorCode("1");
                    /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                            cell.getAddress()+" for Field "
                            +templateProperty.getColumnHeader()
                            +", Max. Length- "+templateProperty.getSizeOfColumn());*/
                    /*errorMessageCellMap.setColumnIndex(cell.getColumnIndex());
                    errorMessageCellMap.setErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                            cell.getAddress()+" for Field "
                            +templateProperty.getUploadedFileColumnName()
                            +", Max. Length- "+templateProperty.getSizeOfColumn());*/

                    raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(), cell.getColumnIndex(),
                            RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc() +
                            cell.getAddress() + " for Field "
                            + templateProperty.getUploadedFileColumnName()
                            + ", Length must be " + expectedFieldValues[0]+" characters");
                    /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(), RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc() +
                            cell.getAddress() + " for Field "
                            + templateProperty.getUploadedFileColumnName()
                            + ", Length must be " + expectedFieldValues[0]+" characters");*/
                    //raCLPResponseDto.addErrorMessageInMap(rowNumber,errorMessageCellMap);
                    return false;
                }
            }else if(templateProperty.getSizeOfColumn().contains("CO")){
                return true;
            }
            else{
                try{
                    if (Integer.parseInt(templateProperty.getSizeOfColumn())!=0 &&
                            cellString.length() > Integer.parseInt(templateProperty.getSizeOfColumn())) {
                        raCLPResponseDto.setErrorCode("1");
                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(), cell.getColumnIndex(),
                                RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                                        cell.getAddress()+" for Field "
                                        +templateProperty.getUploadedFileColumnName()
                                        +", Max. Length- "+templateProperty.getSizeOfColumn());
                        /*raCLPResponseDto.addErrorMessage(RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                                cell.getAddress()+", Max. Length- "+templateProperty.getSizeOfColumn());*/
                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.INVALID_DATA_LENGTH.getErrorDesc()+
                                cell.getAddress()+" for Field "
                                +templateProperty.getUploadedFileColumnName()
                                +", Max. Length- "+templateProperty.getSizeOfColumn());*/
                        return false;
                    }
                }catch(NumberFormatException e){
                    Boolean found=false;
                    String[] expectedFieldValues = templateProperty.getSizeOfColumn().split("/");
                    for(int i=0;i<expectedFieldValues.length;i++){
                        if(cellString.equalsIgnoreCase(expectedFieldValues[i])){
                            found=true;
                        }
                    }
                    if(!found){
                        raCLPResponseDto.setErrorCode("1");
                        raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(), cell.getColumnIndex(),
                                RaCLPConstants.ERRORS.INVALID_VALUE.getErrorDesc()+
                                cell.getAddress()+" for Field "
                                +templateProperty.getUploadedFileColumnName()
                                +", Accepted values are - "+templateProperty.getSizeOfColumn());
                        /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.INVALID_VALUE.getErrorDesc()+
                                cell.getAddress()+" for Field "
                                +templateProperty.getUploadedFileColumnName()
                                +", Accepted values are - "+templateProperty.getSizeOfColumn());*/
                        return false;
                    }
                }
            }


        }else if(templateProperty.getTypeOfColumn().equalsIgnoreCase("Date")){




                if(isValidateCsvExportDate(hdf.formatCellValue(cell))) {return true;}

                else if(isValidDate(cell.getLocalDateTimeCellValue().getDayOfMonth(),
                        cell.getLocalDateTimeCellValue().getMonthValue(),
                        cell.getLocalDateTimeCellValue().getYear())){
                    return true;
                } else{
                    raCLPResponseDto.setErrorCode("1");
                    raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(), cell.getColumnIndex(),
                            RaCLPConstants.ERRORS.INVALID_DATE.getErrorDesc() +
                            cell.getAddress()+" for Field- "
                            +templateProperty.getUploadedFileColumnName());
                    /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(), RaCLPConstants.ERRORS.INVALID_DATE.getErrorDesc() +
                            cell.getAddress()+" for Field- "
                            +templateProperty.getUploadedFileColumnName());*/


                    return false;
                }

        }else{
            return true;
        }
        return true;
    }

    public Boolean isRepeating(List<Object> cellsInColumn,Cell cell,RaCLPResponseDto raCLPResponseDto,String valueInCell){
        //ErrorMessageCellMap errorMessageCellMap = new ErrorMessageCellMap();
        for(Object cellValue:cellsInColumn){
            if(String.valueOf(cellValue).equalsIgnoreCase(valueInCell)){
            //if(String.valueOf(cellValue).equalsIgnoreCase(String.valueOf(cell.getRichStringCellValue()))){
                raCLPResponseDto.setErrorCode("1");
                /*errorMessageCellMap.setColumnIndex(columnIndex);
                errorMessageCellMap.setErrorMessage(RaCLPConstants.ERRORS.
                        VALUE_ALREADY_EXISTS.getErrorDesc()+cell.getAddress()+" already exists. Value should be unique.");*/
                raCLPResponseDto.addRowColumnErrorMapping(cell.getRowIndex(),cell.getColumnIndex(),RaCLPConstants.ERRORS.
                        VALUE_ALREADY_EXISTS.getErrorDesc()+cell.getAddress()+" already exists. Value should be unique.");
                /*raCLPResponseDto.addColumnErrorMapping(cell.getColumnIndex(),RaCLPConstants.ERRORS.
                        VALUE_ALREADY_EXISTS.getErrorDesc()+cell.getAddress()+" already exists. Value should be unique.");*/

                //raCLPResponseDto.addErrorMessageInMap(rowNumber,errorMessageCellMap);
                return true;
            }
        }
        return false;
    }

    public String cutOffString(String originalString,Integer cutOffLength){
        String returnString=originalString.substring(0,cutOffLength);
        return returnString;
    }

    public boolean isValidateCsvExportDate(String strDate)
    {
        csvExportformat.setLenient(false);
            try
            { date = csvExportformat.parse(strDate); }
            catch (ParseException e)
            {
                return false;
            }
            return true;
    }

    public boolean isLeap(int year)
    {
        return (((year % 4 == 0) &&
                (year % 100 != 0)) ||
                (year % 400 == 0));
    }

    public boolean isValidDate(int d, int m, int y)
    {
        if (y > RaCLPConstants.MAX_VALID_YR || y < RaCLPConstants.MIN_VALID_YR)
            return false;
        if (m < 1 || m > 12)
            return false;
        if (d < 1 || d > 31)
            return false;

        // Handle February month
        // with leap year

        if (m == 2)
        {
            if (isLeap(y)) return (d <= 29);
            else return (d <= 28);
        }
        if (m == 4 || m == 6 || m == 9 || m == 11) return (d <= 30);

        return true;
    }
}

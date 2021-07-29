package com.vw.raclpservice.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ConversionUtil {
    public Date convertStringToDate(String dateInString){
        Date convertedDate = new Date();
        try {
            convertedDate = new SimpleDateFormat("MM/dd/yyyy").parse(dateInString);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return convertedDate;
    }

    public Integer convertStringToInteger(String stringValue){
        return (Integer.parseInt(stringValue));
    }
}

package com.vw.raclpservice.dto;

import com.vw.raclpservice.scp.RaCSCPClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

public class RaCLPResponseDto {
	private static final Logger LOG = LoggerFactory.getLogger(RaCLPResponseDto.class);

	private String errorCode = "0";
	private List<String> errorMessages = new ArrayList<String>();
	private Map<Integer, List<Integer>> rowColumnErrorMap = new TreeMap<>();
	private TreeMap<Integer, List<String>> columnErrorMessageMap = new TreeMap<>();
	private TreeMap<Integer, TreeMap<Integer,String>> rowColumnErrorMessageMap = new TreeMap<>();
	
	public String getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	public List<String> getErrorMessages() {
		return errorMessages;
	}
	public void setErrorMessages(List<String> errorMessages) {
		this.errorMessages = errorMessages;
	}
	public void addErrorMessage(String errorMessage) {
		this.errorMessages.add(errorMessage);
	}


	public void addRowColumnErrorMapping(Integer rowNumber,Integer columnNumber,String errorMessage){
		//List<String> errorColumnList = new ArrayList<>();
		if(null==rowColumnErrorMessageMap.get(rowNumber)){
			//errorColumnList.add(columnNumber);
			rowColumnErrorMessageMap.put(rowNumber,new TreeMap<Integer,String>());
			rowColumnErrorMessageMap.get(rowNumber).put(columnNumber,errorMessage);
		}else{
			rowColumnErrorMessageMap.get(rowNumber).put(columnNumber,errorMessage);
		}
	}

	/*public void addRowColumnErrorMapping(Integer rowNumber,Integer columnNumber){
		List<Integer> errorColumnList = new ArrayList<>();
		if(null==rowColumnErrorMap.get(rowNumber)){
			errorColumnList.add(columnNumber);
			rowColumnErrorMap.put(rowNumber,errorColumnList);
		}else{
			rowColumnErrorMap.get(rowNumber).add(columnNumber);
		}
	}*/

	public void addColumnErrorMapping(Integer columnNumber, String errorMessage){
		List<String> errorMessageListForColumn = new ArrayList<>();
		if(null==columnErrorMessageMap.get(columnNumber)){
			errorMessageListForColumn.add(errorMessage);
			columnErrorMessageMap.put(columnNumber,errorMessageListForColumn);
		}else{
			columnErrorMessageMap.get(columnNumber).add(errorMessage);
		}
		//addErrorMessagesToList();
		//addRowColumnErrorMapping(7,columnErrorMessageMap);
	}

	/*public void addRowColumnErrorMapping(Integer rowNumber,TreeMap<Integer,
			List<String>> columnErrorMapping){
		//Set<Integer> columnNumbers = columnErrorMapping.keySet();
		List<String> listToAdd = new ArrayList<>();
		for(Integer column:columnErrorMapping.keySet()){
			listToAdd.addAll(columnErrorMapping.get(column));
		}
		if(null==rowColumnErrorMapping.get(rowNumber)){

		}


	}*/

	/*public void addErrorMessagesToList(){
		for(Integer rowNumber:rowColumnErrorMap.keySet()){
			List<Integer> listOfColumns = rowColumnErrorMap.get(rowNumber);
			Collections.sort(listOfColumns);
			for(Integer columnNumber:listOfColumns){
				List<String> errorMessagesFromMap =columnErrorMessageMap.get(columnNumber);
				*//*if(null==errorMessagesFromMap || errorMessagesFromMap.isEmpty()){
					System.out.println("");
				}*//*
				for(String message:errorMessagesFromMap){
					*//*if(!errorMessages.contains(message)){
						errorMessages.add(message);
						break;
					}*//*
					errorMessages.add(message);
				}

			}
		}
		columnErrorMessageMap.clear();
		rowColumnErrorMap.clear();
	}*/

	public void addErrorMessagesToList(){
		LOG.info("Adding error messages to List");
		for(Integer rowNumber:rowColumnErrorMessageMap.keySet()){
			//List<Integer> listOfColumns = rowColumnErrorMap.get(rowNumber);
			//Collections.sort(listOfColumns);
			for(Integer columnNumber:rowColumnErrorMessageMap.get(rowNumber).keySet()){
				//System.out.println(rowColumnErrorMessageMap.get(rowNumber).get(columnNumber));
				errorMessages.add(rowColumnErrorMessageMap.get(rowNumber).get(columnNumber));
			}
		}
	}

	
}

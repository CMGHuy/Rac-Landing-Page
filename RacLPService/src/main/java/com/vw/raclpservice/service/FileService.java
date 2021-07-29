package com.vw.raclpservice.service;

import com.vw.raclpservice.dto.RaCLPResponseDto;
import com.vw.raclpservice.entity.ImportToken;
import com.vw.raclpservice.entity.TemplateProperty;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public interface FileService {
    Boolean uploadFileToLocal(MultipartFile file, ImportToken tokenDetails, RaCLPResponseDto response);
    Boolean validateFile(Boolean isCsv,String inboxFile, String archiveFile, String templateFilePath,ImportToken tokenDetails,
                         RaCLPResponseDto response,String origFileName, String inboxFileName);
    Map<TemplateProperty, List<Object>> getValuesFromExcel(Boolean isCsv,String inboxFile,
                                                           String archiveFile,String templateFilePath, ImportToken importToken, RaCLPResponseDto raCLPResponseDto);
    Boolean createCsvFileInArchiveFolder(String inboxFile,String archiveFile,ImportToken tokenDetails,
                                         RaCLPResponseDto response,Map<TemplateProperty,
            List<Object>> detailsFromImportFile,String origFileName,String inboxFileName);
}

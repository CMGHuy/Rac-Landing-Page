package com.vw.raclpservice.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.vw.raclpservice.entity.TemplateProperty;
import com.vw.raclpservice.service.FileService;
import com.vw.raclpservice.service.TokenService;
import com.vw.raclpservice.util.TemplateUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.vw.raclpservice.dto.RaCLPResponseDto;
import com.vw.raclpservice.entity.ImportToken;
import com.vw.raclpservice.exception.EntityNotFoundException;
import com.vw.raclpservice.exception.TokenUnauthorizeException;
import com.vw.raclpservice.exception.TokenValidationException;


@Controller
@CrossOrigin
@RequestMapping("v1/lp")
public class RaCLPController {

	private static final Logger LOG = LoggerFactory.getLogger(RaCLPController.class);

	@Autowired
	private TokenService tokenService;

	@Autowired
	FileService fileService;
	
	/*@Autowired
	private FileUploadService fileUploadService;*/

	@GetMapping("/ping")
	@ResponseBody
	public String ping() {
		List<TemplateProperty> templatePropertyList = new ArrayList<>();
		TemplateUtil templateUtil = new TemplateUtil();
		//templateUtil.getTemplate("RSC");
		return "Hello RaC Landing Page Webservice!!!";
	}

	@RequestMapping("/auth")
	public String authorizeToken(@RequestParam(value="token") String token, Model model) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException  {
		LOG.trace("entry authorizeToken...");
		ImportToken tokenDetails = tokenService.authorizeToken(token);
		model.addAttribute("company", tokenDetails.getCompanyName());
		model.addAttribute("token", tokenDetails.getToken());
		model.addAttribute("importType",tokenDetails.getImportType());
		return "landing-page";
	}

	@PostMapping("/upload")
	@ResponseBody
	public RaCLPResponseDto handleFileUpload(@RequestParam("csvfile") MultipartFile file, @RequestParam("token") String token) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException {
		String message;
		Long fileSize = 0l;
		LOG.info("/upload service invoked");
		RaCLPResponseDto response = new RaCLPResponseDto();
		ImportToken tokenDetails = tokenService.authorizeToken(token);
		try {
//			try {
//				fileSize = Files.copy(file.getInputStream(), Paths.get("persistent/" + file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
//
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
			if(fileService.uploadFileToLocal(file,tokenDetails,response)){
				LOG.info("uploaded to local");
			}
			//response = fileUploadService.uploadFile(file, tokenDetails, response);
			if(response.getErrorCode().equals("0")){
				TimeUnit.MILLISECONDS.sleep(300);
				LOG.info("{} successfully uploaded.", file.getOriginalFilename());
			}

			//Map<String,List<Object>> excelFileMap = fileService.getValuesFromExcel()
		} catch (Exception e) {
			LOG.error("ERROR occurred while uploading file :: ",e);
			response.setErrorCode("1");
			response.addErrorMessage("ERROR occurred while uploading file.");
		}

		return response;
	}

}

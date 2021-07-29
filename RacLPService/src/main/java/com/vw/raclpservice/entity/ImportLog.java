//package com.vw.raclpservice.entity;
//
//
//import java.util.Date;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Table;
//
//
//@Entity
//@Table(name = "IMPORT_LOG", schema = "SIEBEL_LP")
//public class ImportLog implements java.io.Serializable {
//
//	private static final long serialVersionUID = -4564958803446736489L;
//
//	private Date reqTs;
//	private String reqIp;
//	private String tokenCheck;
//	private String contentCheck;
//	private String filename;
//
//	public ImportLog() {
//	}
//
//	public ImportLog(Date reqTs, String reqIp, String tokenCheck, String contentCheck, String filename) {
//		this.reqTs = reqTs;
//		this.reqIp = reqIp;
//		this.tokenCheck = tokenCheck;
//		this.contentCheck = contentCheck;
//		this.filename = filename;
//	}
//
//	@Column(name = "REQ_TS", length = 11)
//	public Date getReqTs() {
//		return this.reqTs;
//	}
//
//	public void setReqTs(Date reqTs) {
//		this.reqTs = reqTs;
//	}
//
//	@Column(name = "REQ_IP", length = 40)
//	public String getReqIp() {
//		return this.reqIp;
//	}
//
//	public void setReqIp(String reqIp) {
//		this.reqIp = reqIp;
//	}
//
//	@Column(name = "TOKEN_CHECK", length = 5)
//	public String getTokenCheck() {
//		return this.tokenCheck;
//	}
//
//	public void setTokenCheck(String tokenCheck) {
//		this.tokenCheck = tokenCheck;
//	}
//
//	@Column(name = "CONTENT_CHECK", length = 5)
//	public String getContentCheck() {
//		return this.contentCheck;
//	}
//
//	public void setContentCheck(String contentCheck) {
//		this.contentCheck = contentCheck;
//	}
//
//	@Column(name = "FILENAME", length = 500)
//	public String getFilename() {
//		return this.filename;
//	}
//
//	public void setFilename(String filename) {
//		this.filename = filename;
//	}
//
//}

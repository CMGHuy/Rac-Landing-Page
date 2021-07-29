package com.vw.raclpservice.scp;

import com.jcraft.jsch.*;

import java.io.IOException;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.thymeleaf.util.StringUtils;

public class SSHManager {

	private static final Logger LOG = LoggerFactory.getLogger(SSHManager.class);

	private JSch jschSSHChannel;
	private String userName;
	private String host;
	private int port;
	private int timeOut;
	private Session sesConnection;

	public SSHManager(String userName, String host, int port, String keyFilePath, String keyPassword, int timeOut)
			throws JSchException {

		this.userName = userName;
		this.host = host;
		this.port = port;
		this.timeOut = timeOut;

		jschSSHChannel = new JSch();

		// try {

		/*
		 * if (keyFilePath != null) { if (keyPassword != null) {
		 * jschSSHChannel.addIdentity(keyFilePath, keyPassword); } else {
		 * jschSSHChannel.addIdentity(keyFilePath); } }
		 */

		if (!StringUtils.isEmptyOrWhitespace(keyFilePath)) {
			if (!StringUtils.isEmptyOrWhitespace(keyPassword)) {
				LOG.debug("RSA authenticating with passphrase...");
				jschSSHChannel.addIdentity(keyFilePath, keyPassword);
			} else {
				LOG.debug("RSA authenticating without passphrase...");
				jschSSHChannel.addIdentity(keyFilePath);
			}
		}
		/*
		 * } catch (JSchException e) { e.printStackTrace(); }
		 */
	}

	public Session connect() throws JSchException {
		sesConnection = jschSSHChannel.getSession(userName, host, port);
		sesConnection.setConfig("StrictHostKeyChecking", "no");
		sesConnection.connect(timeOut);
		return sesConnection;
	}

	public String sendCommand(String command) throws JSchException, IOException {
		StringBuilder outputBuffer = new StringBuilder();

		Channel channel = sesConnection.openChannel("exec");
		((ChannelExec) channel).setCommand(command);
		InputStream commandOutput = channel.getInputStream();
		channel.connect();
		int readByte = commandOutput.read();

		while (readByte != 0xffffffff) {
			outputBuffer.append((char) readByte);
			readByte = commandOutput.read();
		}

		channel.disconnect();

		return outputBuffer.toString();
	}

	public void close() {
		sesConnection.disconnect();
	}

}
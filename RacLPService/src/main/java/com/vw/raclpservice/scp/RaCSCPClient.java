package com.vw.raclpservice.scp;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

import java.io.*;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RaCSCPClient {
	
	private static final Logger LOG = LoggerFactory.getLogger(RaCSCPClient.class);
	
	@Value("${rsa.file.path}")
	private String rsaFilePath;
	
	@Value("${rsa.file.passphrase}")
	private String rsaPassphrase;
	
	@Value("${file.timeout}")
	private int timeout;
	
	@Value("${remote.host}")
	private String remoteHost;
	
	@Value("${remote.username}")
	private String remoteUser;
	
	@Value("${remote.file.path}")
	private String remoteExportToSiebelFilePath;

	@Value("${remote.temp.file.path}")
	private String remoteExportOrigFilePath;
	

	@PostConstruct
    public void init() {
        LOG.debug("rsaFilePath {}, rsaPassphrase {}, timeout {}, remoteHost {}, remoteUser {}, " +
                        "remoteExportToSiebelFilePath {},remoteExportOrigFilePath {}",
                rsaFilePath,rsaPassphrase,timeout,remoteHost,remoteUser,remoteExportToSiebelFilePath,remoteExportOrigFilePath);
    }
	
	public RaCSCPClient() {
		
	}
	
    /*public static void main(String[] args) {
        try {
            //String remoteB = "/home/opc/landingpage/";
        	String remoteB = "/siebel/docker/volumes/PV/ENT1/SFS/landing/";
            String local = "G:/My Drive/tempfiles/";
            String file = "CHL.20191212101010.VW.ENT.file.csv";

            String userName = "opc";
            String host = "10.64.120.147";
            //String keyFilePath = "G:/My Drive/ssh/id_rsa";
            String keyFilePath = "G:/My Drive/ssh/fleet_id_rsa";
            //String keyPassword = "english1";
            String keyPassword = null;
            int timeOut = 30000;

            SSHManager instance = new SSHManager(userName, host, 22, keyFilePath, keyPassword, timeOut);
            Session jschSession = instance.connect();

            //String command = "rm /tmp/scp/remote-a/abc.txt";
            //instance.sendCommand(command);
            copyLocalToRemote(jschSession, local + file, remoteB);

            instance.close();
            System.out.println("Done !");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/

	public void uploadFile(String fileToUploadCsv, String fileToUploadOrig, String origFileName,
                           String inboxFileName) throws JSchException, IOException {
        LOG.info("Uploading file to remote");
	    SSHManager instance = null;
        String originalFileWithoutPath = fileToUploadCsv.replace("persistent/archive/","") + ".att";
        String remoteOriginalFilePath = "\"" +remoteExportOrigFilePath + originalFileWithoutPath +"\"";
        String remoteOriginalFile =  "\"" +remoteExportOrigFilePath + originalFileWithoutPath + "/" + origFileName +"\"";
        String mkdirCommand = "sudo mkdir "+remoteOriginalFilePath + " && ";
        //String mkdirCommand = "sudo mkdir "+remoteOriginalFilePath + " && " + "sudo chown -R siebel:siebel " + remoteOriginalFilePath + " && ";
        String changeOwnerShipCommand = "sudo chown -R siebel:siebel ";
		try {
			
			instance = new SSHManager(remoteUser, remoteHost, 22, rsaFilePath, rsaPassphrase, timeout);
            Session jschSession = instance.connect();

            copyLocalToRemote(jschSession, fileToUploadCsv, remoteExportToSiebelFilePath, "");
            copyLocalToRemote(jschSession, fileToUploadOrig, remoteOriginalFile,mkdirCommand);
            runCommand(jschSession,remoteExportOrigFilePath, changeOwnerShipCommand);
		} finally {
			instance.close();
		}
        LOG.info("File Uploading Completed");
	}

    public Boolean runCommand(Session session,String remoteDirectoryPath,String command){
        String fullCommand = command + remoteDirectoryPath;
        Channel channel = null;
        try {
            channel = session.openChannel("exec");
            ((ChannelExec) channel).setCommand(fullCommand);
            channel.connect();
        } catch (JSchException e) {
            e.printStackTrace();
            return false;
        }
        channel.disconnect();
        return true;
    }


    public Boolean createFolderForOriginalFile(Session session,String remoteDirectoryPath){
        String command = "sudo mkdir "+remoteDirectoryPath+ " && " + "sudo chown -R siebel:siebel "+remoteDirectoryPath;
        Channel channel = null;
        try {
            channel = session.openChannel("exec");
            ((ChannelExec) channel).setCommand(command);
            channel.connect();
        } catch (JSchException e) {
            e.printStackTrace();
            return false;
        }
        channel.disconnect();
        return true;
    }

    private void copyLocalToRemote(Session session, String from, String to, String firstCommandInChain) throws JSchException, IOException {
        boolean ptimestamp = true;

        // exec 'scp -t rfile' remotely
        String command =  firstCommandInChain + " sudo scp " + (ptimestamp ? "-p" : "") + " -t " + to;
        Channel channel = session.openChannel("exec");
        ((ChannelExec) channel).setCommand(command);

        // get I/O streams for remote scp
        OutputStream out = channel.getOutputStream();
        InputStream in = channel.getInputStream();

        channel.connect();

        if (checkAck(in) != 0) {
            System.exit(0);
        }

        File _lfile = new File(from);

        if (ptimestamp) {
            command = "T" + (_lfile.lastModified() / 1000) + " 0";
            // The access time should be sent here,
            // but it is not accessible with JavaAPI ;-<
            command += (" " + (_lfile.lastModified() / 1000) + " 0\n");
            out.write(command.getBytes());
            out.flush();
            if (checkAck(in) != 0) {
                System.exit(0);
            }
        }

        // send "C0644 filesize filename", where filename should not include '/'
        long filesize = _lfile.length();
        command = "C0644 " + filesize + " ";
        if (from.lastIndexOf('/') > 0) {
            command += from.substring(from.lastIndexOf('/') + 1);
        } else {
            command += from;
        }

        command += "\n";
        out.write(command.getBytes());
        out.flush();

        if (checkAck(in) != 0) {
            System.exit(0);
        }

        // send a content of lfile
        FileInputStream fis = new FileInputStream(from);
        byte[] buf = new byte[1024];
        while (true) {
            int len = fis.read(buf, 0, buf.length);
            if (len <= 0) break;
            out.write(buf, 0, len); //out.flush();
        }

        // send '\0'
        buf[0] = 0;
        out.write(buf, 0, 1);
        out.flush();

        if (checkAck(in) != 0) {
            System.exit(0);
        }
        out.close();

        try {
            if (fis != null) fis.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        channel.disconnect();
    }

    public static int checkAck(InputStream in) throws IOException {
        int b = in.read();
        // b may be 0 for success,
        //          1 for error,
        //          2 for fatal error,
        //         -1
        if (b == 0) return b;
        if (b == -1) return b;

        if (b == 1 || b == 2) {
            StringBuffer sb = new StringBuffer();
            int c;
            do {
                c = in.read();
                sb.append((char) c);
            }
            while (c != '\n');
            if (b == 1) { // error
                LOG.error("ERROR in checkAck 1, " + sb.toString());
            }
            if (b == 2) { // fatal error
            	LOG.error("ERROR in checkAck 2 " + sb.toString());
            }
        }
        return b;
    }
}
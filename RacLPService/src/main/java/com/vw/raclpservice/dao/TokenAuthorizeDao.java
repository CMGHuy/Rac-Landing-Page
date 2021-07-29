package com.vw.raclpservice.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.vw.raclpservice.entity.ImportToken;
import com.vw.raclpservice.exception.EntityNotFoundException;
import com.vw.raclpservice.repo.ImportTokenRepository;

@Repository
public class TokenAuthorizeDao {
	
	private static final Logger LOG = LoggerFactory.getLogger(TokenAuthorizeDao.class);
	
	@Autowired
	private ImportTokenRepository importTokenRepository;
	
	public ImportToken getTokenDetails(String token) throws EntityNotFoundException {
		return importTokenRepository.findById(token).orElseThrow(() -> new EntityNotFoundException("Token not available. Could not authorize token : " + token));				
	}
}


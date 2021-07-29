package com.vw.raclpservice.service;

import com.vw.raclpservice.entity.ImportToken;
import com.vw.raclpservice.exception.EntityNotFoundException;
import com.vw.raclpservice.exception.TokenUnauthorizeException;
import com.vw.raclpservice.exception.TokenValidationException;
import org.springframework.stereotype.Service;

@Service
public interface TokenService {
    ImportToken authorizeToken(String token) throws EntityNotFoundException, TokenUnauthorizeException, TokenValidationException;
}

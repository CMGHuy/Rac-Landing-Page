package com.vw.raclpservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Unauthorize Token.")
public class TokenUnauthorizeException extends Exception
{

	private static final long serialVersionUID = -3269804806204833886L;

	public TokenUnauthorizeException(String message)
    {
        super(message);
    }

}

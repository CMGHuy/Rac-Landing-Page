package com.vw.raclpservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Invalid Token details.")
public class TokenValidationException extends Exception
{

	private static final long serialVersionUID = -4501893063660188009L;

	public TokenValidationException(String message)
    {
        super(message);
    }

}

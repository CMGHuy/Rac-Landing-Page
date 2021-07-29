package com.vw.raclpservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Invalid file.")
public class FileValidationException extends Exception
{

	private static final long serialVersionUID = -2781556057732280037L;

	public FileValidationException(String message)
    {
        super(message);
    }

}

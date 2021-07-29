package com.vw.raclpservice.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RaCLPErrorController implements ErrorController {

    private static final Logger LOG = LoggerFactory.getLogger(RaCLPErrorController.class);

    @GetMapping(value = "/error")
    public String handleError(HttpServletRequest request, HttpServletResponse response) {

        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        LOG.error("Error Status : {}", status.toString());

        if (status != null) {

            Integer statusCode = Integer.valueOf(status.toString());

            if(statusCode == HttpStatus.NOT_FOUND.value() || statusCode == HttpStatus.BAD_REQUEST.value()) {
                response.setStatus(HttpStatus.NOT_IMPLEMENTED.value());
                return "error-501";
            }
            else if(statusCode == HttpStatus.FORBIDDEN.value()) {
                return "error-403";
            }
            else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                return "error";
            }
        }

        return "error";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }

}

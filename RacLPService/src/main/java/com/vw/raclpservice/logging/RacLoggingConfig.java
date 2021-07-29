package com.vw.raclpservice.logging;

import org.slf4j.MDC;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import java.io.IOException;

@Component
public class RacLoggingConfig implements Filter {
	
	@Override
    public void destroy() {

    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException
    {
        MDC.put("token", servletRequest.getParameter("token"));
        filterChain.doFilter(servletRequest, servletResponse);
    }

}

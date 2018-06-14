package com.huluobo.core.converter;

import com.huluobo.core.request.RequestData;
import org.springframework.core.MethodParameter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor;

import java.util.List;

public class RequestDataTypeMethodProcessor extends RequestResponseBodyMethodProcessor {

    public RequestDataTypeMethodProcessor(List<HttpMessageConverter<?>> converters){
        super(converters);
    }

    public boolean supportsParameter(MethodParameter parameter){
        return parameter.getParameterType().equals(RequestData.class);
    }

    public boolean supportsReturnType(MethodParameter methodParameter){
        return false;
    }
}

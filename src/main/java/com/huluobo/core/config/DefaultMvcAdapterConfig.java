package com.huluobo.core.config;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import com.huluobo.core.converter.RequestDataMessageConverter;
import com.huluobo.core.converter.RequestDataTypeMethodProcessor;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

import java.util.ArrayList;
import java.util.List;

public class DefaultMvcAdapterConfig {
    public DefaultMvcAdapterConfig() {
    }
    
    public static RequestMappingHandlerAdapter requestMappingHandlerAdapter(RequestMappingHandlerAdapter requestMappingHandlerAdapter, FastJsonHttpMessageConverter fastJsonHttpMessageConverter, RequestDataMessageConverter requestDataMessageConverter){
        List<HttpMessageConverter<?>> converters = new ArrayList<>();
        converters.add(requestDataMessageConverter);
        List<HandlerMethodArgumentResolver> argumentResolvers = new ArrayList<>();
        argumentResolvers.add(new RequestDataTypeMethodProcessor(converters));
        requestMappingHandlerAdapter.setCustomArgumentResolvers(argumentResolvers);
        List<HttpMessageConverter<?>> fastjson = new ArrayList<>();
        fastjson.add(fastJsonHttpMessageConverter);
        requestMappingHandlerAdapter.setMessageConverters(fastjson);
        return requestMappingHandlerAdapter;
    }
}

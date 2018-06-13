package com.huluobo.core.config;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import com.huluobo.core.converter.RequestDataMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;

@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {

    public RequestMappingHandlerAdapter requestMappingHandlerAdapter(FastJsonHttpMessageConverter fastJsonHttpMessageConverter,RequestDataMessageConverter requestDataMessageConverter){
        return
    }

    @Bean
    public RequestDataMessageConverter requestDataMessageConverter(){
        return new RequestDataMessageConverter();
    }
}

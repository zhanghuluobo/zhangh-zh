package com.huluobo.core.config;

import com.huluobo.core.converter.RequestDataMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {

    @Bean
    public RequestDataMessageConverter requestDataMessageConverter(){
        return new RequestDataMessageConverter();
    }
}

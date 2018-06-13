package com.huluobo.core.converter;


import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor;

import java.util.List;

/**
 * 请求参数转换类
 * @author zhanghui
 * @since 2018/6/13 19:15
 * 版权所有 ZH
 **/

public class RequestDataMessageConverter extends RequestResponseBodyMethodProcessor {

    public RequestDataMessageConverter(List<HttpMessageConverter<?>> converters, ContentNegotiationManager manager, List<Object> requestResponseBodyAdvice) {
        super(converters, manager, requestResponseBodyAdvice);
    }
}

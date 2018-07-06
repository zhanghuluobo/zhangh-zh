package com.huluobo.core.converter;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import com.huluobo.core.request.RequestData;
import org.springframework.core.MethodParameter;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor;

import java.util.List;

/**
 * 自定义RequestData参数转换器
 * @author zhanghui
 * @since 2018/6/15 17:52
 * 版权所有 ZH
 **/


public class RequestDataArgumentResolver extends RequestResponseBodyMethodProcessor {


    public RequestDataArgumentResolver(List<HttpMessageConverter<?>> converters) {
        super(converters);
    }


    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.getParameterType().equals(RequestData.class);
    }


    public boolean supportsReturnType(MethodParameter returnType) {
        return false;
    }

}

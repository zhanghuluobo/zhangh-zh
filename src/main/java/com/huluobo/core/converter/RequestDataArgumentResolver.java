package com.huluobo.core.converter;

import com.huluobo.core.request.RequestData;
import org.springframework.core.MethodParameter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.bind.annotation.RequestBody;
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
        boolean equals = parameter.getParameterType().equals(RequestData.class);
        return equals;
    }


}

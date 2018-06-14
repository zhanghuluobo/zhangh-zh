package com.huluobo.core.converter;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;

import java.io.IOException;

public class TestConverter extends FastJsonHttpMessageConverter {

    @Override
    protected Object readInternal(Class<?> clazz, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        //fastJson的版本影响是否可以获取
        System.out.println("--------------请求进入到消息转化器-------------------");
        return super.readInternal(clazz, inputMessage);
    }

    @Override
    protected void writeInternal(Object obj, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        System.out.println("--------------响应进入到消息转化器-------------------");
        super.writeInternal(obj, outputMessage);
    }
}

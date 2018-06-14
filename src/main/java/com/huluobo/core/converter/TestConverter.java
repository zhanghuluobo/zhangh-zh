package com.huluobo.core.converter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.request.RequestData;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Map;

/**
 * 自定义RequestData消息转换器
 *
 * Author zhangh
 * Date 2018/6/14 22:35
 *
 */


public class TestConverter extends AbstractHttpMessageConverter<Object> {

    //设置contentType
    public TestConverter() {
        super(new MediaType("application","json", Charset.forName("UTF-8")));
    }

    @Override
    protected boolean supports(Class<?> clazz) {
        return clazz.isAssignableFrom(clazz);
    }

    @Override
    protected Object readInternal(Class<?> clazz, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
        String temp = StreamUtils.copyToString(httpInputMessage.getBody(), Charset.forName("UTF-8"));
        Map<String,Object> map = (Map<String,Object>)JSON.parse(temp);
        RequestData requestData = new RequestData();
        requestData.setData(new JSONObject(map));
        return requestData;
    }

    @Override
    protected void writeInternal(Object o, HttpOutputMessage httpOutputMessage) throws IOException, HttpMessageNotWritableException {

    }



}

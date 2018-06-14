package com.huluobo.core.converter;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.request.RequestData;
import com.huluobo.core.utils.HttpKitUtil;
import com.xiaoleilu.hutool.io.IoUtil;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractGenericHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;

import java.util.*;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.lang.reflect.Type;

/**
 * 请求参数转换类
 * @author zhanghui
 * @since 2018/6/13 19:15
 * 版权所有 ZH
 **/

public class RequestDataMessageConverter extends AbstractGenericHttpMessageConverter<Object> {

    public RequestDataMessageConverter() {
    }

    public boolean canRead(Type type, Class<?> clazz, MediaType mediaType){
        return type instanceof Class ? ((Class)type).isAssignableFrom(RequestData.class):false;
    }

    public boolean canWrite(Type type,Class<?> clazz,MediaType mediaType){
        return type instanceof Class ? ((Class)type).isAssignableFrom(RequestData.class):false;
    }

    public List<MediaType> getSupportedMediaTypes(){
        return Collections.singletonList(MediaType.ALL);
    }

    protected boolean supports(Class<?> clazz){
        return clazz.isAssignableFrom(Map.class);
    }

    @Override
    protected void writeInternal(Object o, Type type, HttpOutputMessage httpOutputMessage) throws IOException, HttpMessageNotWritableException {
    }

    @Override
    protected Object readInternal(Class clazz, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
        return this.readMap(httpInputMessage);
    }

    @Override
    public Object read(Type type, Class aClass, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
        return this.readMap(httpInputMessage);
    }

    private Object readMap(HttpInputMessage httpInputMessage) throws IOException {
        String requestBody = IoUtil.read(httpInputMessage.getBody(), "UTF-8");
        HttpServletRequest request = HttpKitUtil.getRequest();
        return this.getRequesttData(requestBody,request);
    }

    private Object getRequesttData(String requestBody, HttpServletRequest request) {
        RequestData requestData = new RequestData();
        requestData.setIp(request.getRemoteHost());
        requestData.setUrl(request.getServletPath());
        requestData.setData(this.clearWhiteSpace(requestBody));
        return requestData;
    }

    private JSONObject clearWhiteSpace(String requestBody) {
        JSONObject jsonObject = JSON.parseObject(requestBody);
        if (jsonObject != null){
            Set<Entry<String, Object>> entries = jsonObject.entrySet();
            Iterator<Entry<String, Object>> iterator = entries.iterator();
            while (iterator.hasNext()){
                Entry<String, Object> next = iterator.next();
                Object value = next.getValue();
                if(value!=null&&value instanceof String){
                    String trim = ((String) value).trim();
                    jsonObject.put(next.getKey(),value);
                }
            }
            return jsonObject;
        }else {
            return null;
        }

    }


}

package com.huluobo.core.converter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import com.huluobo.core.utils.RequestResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.AbstractGenericHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.util.StreamUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.charset.Charset;
import java.util.*;

/**
 * 自定义RequestData消息转换器
 *
 * Author zhangh
 * Date 2018/6/14 22:35
 *
 */


public class RequestDataMessageConverter extends AbstractGenericHttpMessageConverter<Object> {

    Logger logger = LoggerFactory.getLogger(RequestDataMessageConverter.class);

    public RequestDataMessageConverter() {
//        super(new MediaType("application","json", Charset.forName("UTF-8")));
    }

    public boolean canRead(Type type, Class<?> clazz, MediaType mediaType){
        return type instanceof Class ? ((Class)type).isAssignableFrom(RequestData.class):false;
    }

    public boolean canWrite(Type type,Class<?> clazz,MediaType mediaType){
        return type instanceof Class ? ((Class)type).isAssignableFrom(ResultData.class):false;
    }

    //设置ContentType 接受所有类型的请求头
    public List<MediaType> getSupportedMediaTypes(){
        return Collections.singletonList(MediaType.ALL);
    }


    @Override
    protected void writeInternal(Object o, Type type, HttpOutputMessage httpOutputMessage) throws IOException, HttpMessageNotWritableException {

    }

    @Override
    protected Object readInternal(Class<?> clazz, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
        String requestBody = StreamUtils.copyToString(httpInputMessage.getBody(),Charset.forName("UTF-8"));
        logger.debug("RequestBody:"+requestBody);
        HttpServletRequest request = RequestResponseUtil.getRequest();
        return this.encapsulationRequestData(requestBody,request);
    }

    @Override
    public Object read(Type type, Class<?> clazz, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
        return this.readInternal(clazz,httpInputMessage);
    }

    private Object encapsulationRequestData(String requestBody, HttpServletRequest request) {
        RequestData requestData = new RequestData();
        requestData.setIp(request.getRemoteHost());
        requestData.setUrl(request.getServletPath());
        requestData.setData(this.convertRequestBody(requestBody));
        return requestData;
    }

    private JSONObject convertRequestBody(String requestBody) {
        JSONObject jsonObject = JSON.parseObject(requestBody);
        if(jsonObject != null){
            Set<Map.Entry<String, Object>> entries = jsonObject.entrySet();
            Iterator<Map.Entry<String, Object>> iterator = entries.iterator();
            while (iterator.hasNext()){
                Map.Entry<String, Object> next = iterator.next();
                Object value = next.getValue();
                if(value != null && value instanceof String){
                    String trim = ((String) value).trim();
                    jsonObject.put(next.getKey(),trim);
                }
            }
        }
        return jsonObject;
    }
}

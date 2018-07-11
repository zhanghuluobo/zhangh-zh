package com.huluobo.core.converter;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.http.MediaType;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Fastjson消息转换器
 * @author zhanghui
 * @since 2018/6/21 9:47
 * 版权所有 ZH
 **/

public class FastJsonMessageConverter extends FastJsonHttpMessageConverter {

    public FastJsonMessageConverter() {
    }

    @Override
    //设置ContentType 接受所有类型的请求头
    public List<MediaType> getSupportedMediaTypes(){
        List<MediaType> mediaTypeList = new ArrayList<>();
        mediaTypeList.add(MediaType.ALL);
        return Collections.singletonList(MediaType.ALL);
    }
}

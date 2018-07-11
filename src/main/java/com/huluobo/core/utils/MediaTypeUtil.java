package com.huluobo.core.utils;

import org.springframework.http.MediaType;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * 获取Content-Type类型
 * @author zhanghui
 * @since 2018/7/11 17:52
 * 版权所有 ZH
 **/

public class MediaTypeUtil {

    public static List<MediaType> getAllMediaTypeList(){
        List<MediaType> mediaTypeList = new ArrayList<>();
        mediaTypeList.add(MediaType.ALL);
        mediaTypeList.add(MediaType.APPLICATION_JSON);
        return mediaTypeList;
    }
}

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

    /**
     * 获取所有MediaType类型
     *
     * @author zhanghui
     * @since 2018/7/12 11:26
     * 版权所有 ZH
     * @param
     * @return
     **/
    public static List<MediaType> getAllMediaTypeList(){
        List<MediaType> mediaTypeList = new ArrayList<>();
        mediaTypeList.add(MediaType.ALL);
        mediaTypeList.add(MediaType.APPLICATION_ATOM_XML);
        mediaTypeList.add(MediaType.APPLICATION_FORM_URLENCODED);
        mediaTypeList.add(MediaType.APPLICATION_JSON);
        mediaTypeList.add(MediaType.APPLICATION_JSON_UTF8);
        mediaTypeList.add(MediaType.APPLICATION_OCTET_STREAM);
        mediaTypeList.add(MediaType.APPLICATION_PDF);
        mediaTypeList.add(MediaType.APPLICATION_RSS_XML);
        mediaTypeList.add(MediaType.APPLICATION_XHTML_XML);
        mediaTypeList.add(MediaType.APPLICATION_XML);
        mediaTypeList.add(MediaType.IMAGE_GIF);
        mediaTypeList.add(MediaType.IMAGE_JPEG);
        mediaTypeList.add(MediaType.IMAGE_PNG);
        mediaTypeList.add(MediaType.MULTIPART_FORM_DATA);
        mediaTypeList.add(MediaType.TEXT_EVENT_STREAM);
        mediaTypeList.add(MediaType.TEXT_HTML);
        mediaTypeList.add(MediaType.TEXT_MARKDOWN);
        mediaTypeList.add(MediaType.TEXT_PLAIN);
        mediaTypeList.add(MediaType.TEXT_XML);
        return mediaTypeList;
    }
}

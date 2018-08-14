package com.huluobo.core.utils;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 获取请求
 *
 * Author zhangh
 * Date 2018/6/13 21:40
 *
 */


public class HttpContextUtil {

    public HttpContextUtil() {
    }

    public static HttpServletRequest getRequest(){
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return null;
        } else {
            return requestAttributes.getRequest();
        }
    }

    public static HttpServletResponse getResponse(){
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return null;
        } else {
            return requestAttributes.getResponse();
        }
    }
}

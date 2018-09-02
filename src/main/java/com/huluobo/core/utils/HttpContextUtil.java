package com.huluobo.core.utils;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

    /**
     * 获取当前请求的request对象
     * <p>
     * Author zhangh
     * Date 2018/8/14 20:40
     */
    public static HttpServletRequest getRequest(){
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return null;
        } else {
            return requestAttributes.getRequest();
        }
    }

    /**
     * 获取当前请求的response对象
     * <p>
     * Author zhangh
     * Date 2018/8/14 20:41
     */
    public static HttpServletResponse getResponse(){
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (requestAttributes == null) {
            return null;
        } else {
            return requestAttributes.getResponse();
        }
    }

    /**
     * 获取当前
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/8/29 17:44
     * 版权所有 ZH
     **/
    public static HttpSession getSession() {
        return getRequest().getSession();
    }
}

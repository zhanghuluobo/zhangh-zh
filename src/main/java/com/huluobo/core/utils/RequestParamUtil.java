package com.huluobo.core.utils;

import cn.hutool.core.util.StrUtil;
import com.huluobo.core.context.RequestDataHolder;
import com.huluobo.core.request.RequestData;

import javax.servlet.http.HttpServletRequest;

/**
 * 获取request中的参数
 * <p>
 * Author zhangh
 * Date 2018/9/2 20:57
 */
public class RequestParamUtil {

    /**
     * 获取String类型参数
     * <p>
     * Author zhangh
     * Date 2018/9/3 22:03
     */
    public static String getStringParameter(HttpServletRequest request, String key) {
        String parameter = request.getParameter(key);

        //从临时存储器中获取
        if (StrUtil.isEmpty(parameter)) {
            RequestData requestData = RequestDataHolder.getRequestData();
            if (requestData == null) {
                return null;
            } else {
                return requestData.getString(key);
            }
        } else {
            return parameter;
        }
    }

    /**
     * 获取Integer类型参数
     * <p>
     * Author zhangh
     * Date 2018/9/3 22:32
     */
    public static Integer getIntegerParamter(HttpServletRequest request, String key) {
        String parameter = request.getParameter(key);

        //从临时存储器中获取
        if (StrUtil.isEmpty(parameter)) {
            RequestData requestData = RequestDataHolder.getRequestData();
            if (requestData == null) {
                return null;
            } else {
                return requestData.getInteger(key);
            }
        } else {
            return Integer.valueOf(parameter);
        }
    }
}

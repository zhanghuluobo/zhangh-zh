package com.huluobo.core.utils;

import com.huluobo.core.context.RequestDataHolder;
import com.huluobo.core.request.RequestData;
import com.xiaoleilu.hutool.util.StrUtil;

import javax.servlet.http.HttpServletRequest;

/**
 * 获取request中的参数
 * <p>
 * Author zhangh
 * Date 2018/9/2 20:57
 */
public class RequestParamUtil {

    public static String getStringParameter(HttpServletRequest request, String key) {
        String parameter = request.getParameter(key);

        //从临时存储器中获取
        if (StrUtil.isEmpty(parameter)) {
            RequestData requestData = RequestDataHolder.getRequestData();
            if (requestData == null) {
                return null;
            } else {
                //TODO
                return null;
            }
        } else {
            return parameter;
        }
    }
}

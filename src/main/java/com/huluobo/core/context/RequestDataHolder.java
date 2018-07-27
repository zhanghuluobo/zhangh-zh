package com.huluobo.core.context;

import com.huluobo.core.request.RequestData;

/**
 * 请求参数临时存储器
 *
 * @param
 * @author zhanghui
 * @return
 * @since 2018/7/27 14:48
 * 版权所有 ZH
 **/
public class RequestDataHolder {

    private static ThreadLocal<RequestData> threadLocal = new ThreadLocal<>();

    public static void setRequestData(RequestData requestData) {
        threadLocal.set(requestData);
    }

    public static RequestData getRequestData() {
        return threadLocal.get();
    }

    public static void removeRequestData() {
        threadLocal.remove();
    }
}

package com.huluobo.core.aop;

import com.huluobo.core.context.RequestDataHolder;
import com.huluobo.core.request.RequestData;

import org.aspectj.lang.ProceedingJoinPoint;

public class RequestDataAop {

    public Object requestDataTemporary(ProceedingJoinPoint point) throws Throwable {
        Object[] params = point.getArgs();
        if (params != null && params.length > 0) {
            if (params[0] instanceof RequestData) {
                RequestDataHolder.setRequestData((RequestData) params[0]);
            }
        }
        boolean sign = true;
        try {
            return point.proceed();
        } catch (Exception e) {
            sign = false;
            throw e;
        } finally {
            if (sign) {
                RequestDataHolder.removeRequestData();
            }
        }
    }
}

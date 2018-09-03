package com.huluobo.core.factory;

import cn.hutool.core.util.NumberUtil;
import cn.hutool.core.util.StrUtil;
import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.core.utils.HttpContextUtil;
import com.huluobo.core.utils.RequestParamUtil;

import javax.servlet.http.HttpServletRequest;

/**
 * 分页器
 *
 * @author zhanghui
 * @since 2018/8/29 17:25
 * 版权所有 ZH
 **/
public class PageFactory {

    /**
     * 当前页接收参数
     */
    private static final String PAGE_NO = "pageNo";

    /**
     * 每页显示条数接收参数
     */
    private static final String PAGE_SIZE = "pageSize";

    /**
     * 当前页
     */
    private static final int pageNo = 1;

    /**
     * 每页显示条数
     */
    private static final int pageSize = 10;

    /**
     * 默认分页
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/8/29 17:39
     **/
    public static <T> Page<T> defaultPagination() {
        //获取请求参数
        HttpServletRequest request = HttpContextUtil.getRequest();

        if (request == null) {
            return new Page<T>(pageNo, pageSize);
        } else {
            Integer pageNoI = RequestParamUtil.getIntegerParamter(request, PAGE_NO);
            Integer pageSizeI = RequestParamUtil.getIntegerParamter(request, PAGE_SIZE);
            if (pageNoI == null || pageSizeI == null) {
                return new Page<T>(pageNo, pageSize);
            } else {
                return new Page<T>(pageNoI, pageSizeI);
            }
        }
    }
}

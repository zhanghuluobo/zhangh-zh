package com.huluobo.core.plugin.pagination;

/**
 * 分页辅助器
 *
 * @param
 * @author zhanghui
 * @return
 * @since 2018/8/29 16:54
 * 版权所有 ZH
 **/
public class PageHelper {

    /**
     * 计算当前分页偏移量
     *
     * @param pageNo   当前页
     * @param pageSize 每页显示数目
     * @return
     * @author zhanghui
     * @since 2018/8/29 17:03
     * 版权所有 ZH
     **/
    public static int offsetCurrent(int pageNo, int pageSize) {
        if (pageNo > 0) {
            return (pageNo - 1) * pageSize;
        } else {
            return 0;
        }
    }


}

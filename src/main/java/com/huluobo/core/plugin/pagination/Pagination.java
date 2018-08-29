package com.huluobo.core.plugin.pagination;

import com.github.pagehelper.PageRowBounds;

import java.beans.Transient;
import java.io.Serializable;

/**
 * 简单分页模型
 *
 * @author zhanghui
 * @since 2018/8/24 9:47
 * 版权所有 ZH
 **/
public class Pagination extends PageRowBounds implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 当前页
     */
    private int pageNo = 1;

    /**
     * 每页显示数目
     */
    private int pageSize = 10;

    /**
     * 总页数
     */
    private long pages = 0;


    /**
     * 构造参数
     *
     * @param pageNo   当前页
     * @param pageSize 每页显示数目
     */
    public Pagination(int pageNo, int pageSize) {
        super(PageHelper.offsetCurrent(pageNo, pageSize), pageSize);
        this.pageNo = pageNo;
        this.pageSize = pageSize;
    }

    public int getPageNo() {
        return pageNo;
    }

    public Pagination setPageNo(int pageNo) {
        this.pageNo = pageNo;
        return this;
    }

    public int getPageSize() {
        return pageSize;
    }

    public Pagination setPageSize(int pageSize) {
        this.pageSize = pageSize;
        return this;
    }

    /**
     * 总页数
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/8/29 17:07
     * 版权所有 ZH
     **/
    public long getPages() {
        if (this.pageSize == 0) {
            return 0L;
        } else {
            long pages = this.getTotal() / this.pageSize;
            if (this.getTotal() % this.pageSize != 0) {
                pages++;
            }
            return pages;
        }
    }

    @Override
    @Transient
    public int getOffset() {
        return super.getOffset();
    }

    @Override
    @Transient
    public int getLimit() {
        return super.getLimit();
    }

}

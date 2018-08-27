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
     *
     */
    private int current = 1;

    /**
     * 每页显示数目
     */
    private int size = 10;

    /**
     * 查询总条数
     */
    private boolean count = true;

    /**
     * 构造参数
     *
     * @param current 第几行显示
     * @param size    每页显示几条
     */
    public Pagination(int current, int size) {
        super(current, size);
        this.current = current;
        this.size = size;
    }


    public int getCurrent() {
        return current;
    }

    public Pagination setCurrent(int current) {
        this.current = current;
        return this;
    }

    public int getSize() {
        return size;
    }

    public Pagination setSize(int size) {
        this.size = size;
        return this;
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

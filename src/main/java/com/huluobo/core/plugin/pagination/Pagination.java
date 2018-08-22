package com.huluobo.core.plugin.pagination;

import org.apache.ibatis.session.RowBounds;

import java.beans.Transient;
import java.io.Serializable;

/**
 * 分页模型
 *
 * @author zhanghui
 * @since 2018/8/16 9:34
 * 版权所有 ZH
 **/
public class Pagination extends RowBounds implements Serializable {

    private static final long serialVersionUID = 153982488913298421L;

    /**
     * 总数
     */
    private long total;

    /**
     * 每页显示数目（默认为10）
     */
    private int size = 10;

    /**
     * 当前页（默认为1）
     */
    private int current = 1;

    /**
     * 查询总记录数（默认为true）
     */
    private boolean searchCount = true;

    /**
     * 分页构造函数
     */
    public Pagination() {
        super();
    }

    public Pagination(int current, int size) {
        this(current, size, true);
    }

    public Pagination(int current, int size, boolean searchCount) {
        super(current, size);
        this.size = size;
        this.searchCount = searchCount;
    }

    public boolean hasPrevious() {
        return this.current > 1;
    }

    public boolean hasNext() {
        return this.current < this.getPages();
    }

    public long getTotal() {
        return total;
    }

    public Pagination setTotal(long total) {
        this.total = total;
        return this;
    }

    public int getSize() {
        return size;
    }

    public Pagination setSize() {
        this.size = size;
        return this;
    }

    /**
     * 总页数
     *
     * @author zhanghui
     * @since 2018/8/22 17:28
     * 版权所有 ZH
     **/
    public long getPages() {
        if (this.size == 0) {
            return 0L;
        }
        long pages = this.total / this.size;
        if (this.total % this.size != 0) {
            pages++;
        }
        return pages;
    }

    public int getCurrent() {
        return current;
    }

    public Pagination setCurrent() {
        this.current = current;
        return this;
    }

    @Transient
    public boolean isSearchCount() {
        return searchCount;
    }

    public Pagination setSearchCount(boolean searchCount) {
        this.searchCount = searchCount;
        return this;
    }

}

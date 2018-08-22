package com.huluobo.core.plugin.pagination;

import com.github.pagehelper.PageInfo;
import org.apache.ibatis.session.RowBounds;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;

/**
 * 分页辅助类
 *
 * @author zhanghui
 * @since 2018/8/22 17:38
 * 版权所有 ZH
 **/
public class Page<T> extends RowBounds implements Serializable {

    private static final long serialVersionUID = -6220745244745285779L;

    /**
     * 当前页的数量
     */
    private int size;

    /**
     * 总页数
     */
    private int pages;

    private long total;

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    /**
     * 查询数据列表
     */
    private List<T> records = Collections.emptyList();

    /**
     * 构造参数
     */
    public Page(int pageNum, int pageSize) {
        super(pageNum, pageSize);
    }

    public List<T> getRecords() {
        return records;
    }

    public Page<T> setRecords(List<T> records) {
        this.records = records;
        PageInfo pageInfo = new PageInfo(records);
        this.size = pageInfo.getSize();
        this.pages = pageInfo.getPages();
        this.total = pageInfo.getTotal();
        return this;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }
}

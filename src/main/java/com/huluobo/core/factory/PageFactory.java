package com.huluobo.core.factory;

import org.apache.ibatis.session.RowBounds;

/**
 * 分页器
 * <p>
 * Author zhangh
 * Date 2018/8/13 21:52
 */
public class PageFactory extends RowBounds {

    //每页显示条数
    private Integer pageSize = 10;

    //当前页
    private Integer pageNum = 1;

    //总条数
    private Integer total = 0;

    //主体
    private Object record = null;

    public PageFactory() {

    }

    public PageFactory(int pageNum, int pageSize) {
        super(pageNum, pageSize);
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Object getRecord() {
        return record;
    }

    public void setRecord(Object record) {
        this.record = record;
    }
}

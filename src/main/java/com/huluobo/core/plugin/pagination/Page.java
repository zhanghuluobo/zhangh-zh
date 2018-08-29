package com.huluobo.core.plugin.pagination;

import java.util.Collections;
import java.util.List;

/**
 * 实现分页辅助类
 *
 * @author zhanghui
 * @since 2018/8/24 9:56
 * 版权所有 ZH
 **/
public class Page<T> extends Pagination {

    /**
     * 查询数据列表
     */
    private List<T> records = Collections.emptyList();


    public Page(int offset, int limit) {
        super(offset, limit);
    }

    public List<T> getRecords() {
        return records;
    }

    public Page<T> setRecords(List<T> records) {
        this.records = records;
        return this;
    }
}

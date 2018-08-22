package com.huluobo.core.plugin;

import com.huluobo.core.plugin.pagination.Pagination;


import java.util.Collections;
import java.util.List;

/**
 * 分页辅助类
 *
 * @author zhanghui
 * @since 2018/8/22 17:38
 * 版权所有 ZH
 **/
public class Page<T> extends Pagination {

    /**
     * 查询数据列表
     */
    private List<T> records = Collections.emptyList();

    public Page() {

    }

    public Page(int current, int size) {
        super(current, size);
    }

    public List<T> getRecords() {
        return records;
    }

    public Page<T> setRecords(List<T> records) {
        this.records = records;
        return this;
    }

}

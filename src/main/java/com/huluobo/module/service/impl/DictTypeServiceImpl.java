package com.huluobo.module.service.impl;


import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.core.plugin.pagination.PageTest;
import com.huluobo.module.entity.DictType;
import com.huluobo.module.mapper.DictTypeMapper;
import com.huluobo.module.service.IDictTypeService;
import org.apache.ibatis.executor.resultset.DefaultResultSetHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service(value = "dictTypeService")
public class DictTypeServiceImpl implements IDictTypeService {

    @Autowired
    private DictTypeMapper dictTypeMapper;

    /**
     * 字典类型-列表
     *
     * @param dictTypeCode
     * @return
     */
    @Override
    public Page<Map<String, Object>> queryDictType(String dictTypeCode) {

        PageTest<Map<String, Object>> pageTest = new PageTest<>(1, 10);
        List<Map<String, Object>> maps = this.dictTypeMapper.queryDictType(pageTest, dictTypeCode);
        pageTest.setRecords(maps);
        return null;
    }

    /**
     * 字典类型-增加
     *
     *
     * @param dictType
     * @return
     */
    @Override
    public Integer insertDictType(DictType dictType) {
        String id = UUID.randomUUID().toString();
        dictType.setDictTypeId(id);
        return this.dictTypeMapper.insertDictType(dictType);
    }
}

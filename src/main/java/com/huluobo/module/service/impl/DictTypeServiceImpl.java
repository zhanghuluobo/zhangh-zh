package com.huluobo.module.service.impl;


import com.huluobo.core.factory.PageFactory;
import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.module.entity.DictType;
import com.huluobo.module.mapper.DictTypeMapper;
import com.huluobo.module.service.IDictTypeService;
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
//        Page<Map<String, Object>> page = new Page<>(1, 10);
        Page<Map<String, Object>> page = PageFactory.defaultPagination();
        List<Map<String, Object>> list = this.dictTypeMapper.queryDictType(page, dictTypeCode);
        return page.setRecords(list);
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

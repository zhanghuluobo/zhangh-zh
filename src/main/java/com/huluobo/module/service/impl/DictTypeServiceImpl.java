package com.huluobo.module.service.impl;

import com.huluobo.module.mapper.DictTypeMapper;
import com.huluobo.module.service.IDictTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service(value = "dictTypeService")
public class DictTypeServiceImpl implements IDictTypeService {

    @Autowired
    private DictTypeMapper dictTypeMapper;

    /**
     * 字典类型-列表
     * @param dictTypeCode
     * @return
     */
    @Override
    public List<Map<String, Object>> queryDictType(String dictTypeCode) {
        return this.dictTypeMapper.queryDictType(dictTypeCode);
    }
}

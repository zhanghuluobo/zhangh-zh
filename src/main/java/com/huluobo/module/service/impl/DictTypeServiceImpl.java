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
     * 字典类型-列表（分页）
     *
     * @param dictTypeCode
     * @param dictTypeName
     * @return
     */
    @Override
    public Page<Map<String, Object>> queryDictTypePage(String dictTypeCode, String dictTypeName) {
        Page<Map<String, Object>> page = PageFactory.defaultPagination();
        List<Map<String, Object>> list = this.dictTypeMapper.queryDictType(page, dictTypeCode, dictTypeName);
        return page.setRecords(list);
    }

    /**
     * 字典类型-增加
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

    /**
     * 字典类型-列表（不分页）
     *
     * @param dictTypeCode
     * @param dictTypeName
     * @return
     */
    @Override
    public List<Map<String, Object>> queryDictType(String dictTypeCode, String dictTypeName) {
        return this.dictTypeMapper.queryDictType(dictTypeCode, dictTypeName);
    }

    /**
     * 字典类型-详情
     *
     * @param dictTypeId
     * @return
     */
    @Override
    public Map<String, Object> detailDictType(String dictTypeId) {
        return this.dictTypeMapper.detailDictType(dictTypeId);
    }

    /**
     * 字典类型-编辑
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/9/17 14:22
     **/
    @Override
    public Integer updateDictTyep(DictType dictType) {
        return this.dictTypeMapper.updateDictTyep(dictType);
    }
}

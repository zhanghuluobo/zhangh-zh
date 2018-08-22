package com.huluobo.module.mapper;

import com.github.pagehelper.PageRowBounds;
import com.huluobo.core.factory.PageFactory;
import com.huluobo.core.plugin.Page;
import com.huluobo.module.entity.DictType;

import java.util.List;
import java.util.Map;

public interface DictTypeMapper {

//    List<Map<String, Object>> queryDictType(String dictTypeCode, PageFactory pageFactory);

    Integer insertDictType(DictType dictType);

    List<Map<String, Object>> queryDictType(String dictTypeCode, Page<Map<String, Object>> page);
}
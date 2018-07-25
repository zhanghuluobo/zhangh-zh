package com.huluobo.module.mapper;

import com.huluobo.module.entity.DictType;

import java.util.List;
import java.util.Map;

public interface DictTypeMapper {

    List<Map<String, Object>> queryDictType(String dictTypeCode);

    Integer insertDictType(DictType dictType);
}
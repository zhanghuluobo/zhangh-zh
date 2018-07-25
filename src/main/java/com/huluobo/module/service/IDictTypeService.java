package com.huluobo.module.service;

import com.huluobo.module.entity.DictType;

import java.util.List;
import java.util.Map;

public interface IDictTypeService {

    List<Map<String, Object>> queryDictType(String dictTypeCode);

    Integer insertDictType(DictType dictType);
}

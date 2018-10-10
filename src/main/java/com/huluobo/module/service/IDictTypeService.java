package com.huluobo.module.service;


import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.module.entity.DictType;

import java.util.List;
import java.util.Map;

public interface IDictTypeService {

    Page<Map<String, Object>> queryDictTypePage(String dictTypeCode, String dictTypeName);

    Integer insertDictType(DictType dictType);

    List<Map<String, Object>> queryDictType(String dictTypeCode, String dictTypeName);

    Map<String, Object> detailDictType(String dictTypeId);

    Integer updateDictTyep(DictType dictType);
}

package com.huluobo.module.service;


import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.module.entity.DictType;

import java.util.Map;

public interface IDictTypeService {

    Page<Map<String, Object>> queryDictType(String dictTypeCode);

    Integer insertDictType(DictType dictType);
}

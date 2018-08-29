package com.huluobo.module.mapper;


import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.module.entity.DictType;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface DictTypeMapper {


    Integer insertDictType(DictType dictType);

    List<Map<String, Object>> queryDictType(Page<Map<String, Object>> page, @Param("dictTypeCode") String dictTypeCode);

    List<Map<String, Object>> queryDictType(@Param("dictTypeCode") String dictTypeCode);
}
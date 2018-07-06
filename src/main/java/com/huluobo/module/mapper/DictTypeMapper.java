package com.huluobo.module.mapper;

import com.huluobo.module.entity.DictType;

public interface DictTypeMapper {
    int deleteByPrimaryKey(String dictTypeId);

    int insert(DictType record);

    int insertSelective(DictType record);

    DictType selectByPrimaryKey(String dictTypeId);

    int updateByPrimaryKeySelective(DictType record);

    int updateByPrimaryKey(DictType record);
}
package com.huluobo.module.controller;


import com.huluobo.core.constants.ResultConstant;
import com.huluobo.core.plugin.pagination.Page;
import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResponseData;
import com.huluobo.module.entity.DictType;
import com.huluobo.module.service.IDictTypeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 字典类型控制器
 * <p>
 * Author zhangh
 * Date 2018/6/27 21:53
 */
@RestController
@RequestMapping(name = "字典类型", path = "/system/dictType/")
public class DictTypeController {

    @Resource(name = "dictTypeService")
    private IDictTypeService dictTypeService;

    /**
     * 字典类型-增加
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/7/25 15:03
     * 版权所有 ZH
     **/
    @RequestMapping(name = "字典类型-增加", path = "insertDictType")
    public ResponseData insertDictType(RequestData requestData) {
        DictType dictType = requestData.parase(DictType.class);
        Integer i = this.dictTypeService.insertDictType(dictType);
        if (i >= 0) {
            return ResponseData.success(ResultConstant.INSERT_SUCCESS);
        } else {
            return ResponseData.error(ResultConstant.INSERT_FAIL);
        }
    }

    /**
     * 字典类型-列表（分页）
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/7/22 16:36
     * 版权所有 ZH
     **/
    @RequestMapping(name = "字典类型-列表（分页）", path = "queryDictTypePage")
    public ResponseData queryDictTypePage(RequestData requestData) {
        String dictTypeCode = requestData.getString("dictTypeCode");
        String dictTypeName = requestData.getString("dictTypeName");
        Page<Map<String, Object>> page = this.dictTypeService.queryDictTypePage(dictTypeCode, dictTypeName);
        return ResponseData.success(page);
    }

    /**
     * 字典类型-列表（不分页）
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/9/17 13:21
     **/
    @RequestMapping(name = "字典类型-列表（不分页）", path = "queryDictType")
    public ResponseData queryDictType(RequestData requestData) {
        String dictTypeCode = requestData.getString("dictTypeCode");
        String dictTypeName = requestData.getString("dictTypeName");
        List<Map<String, Object>> list = this.dictTypeService.queryDictType(dictTypeCode, dictTypeName);
        return ResponseData.success(list);
    }

    /**
     * 字典类型-详情
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/9/17 14:08
     **/
    @RequestMapping(name = "字典类型-详情", path = "detailDictType")
    public ResponseData detailDictType(RequestData requestData) {
        String dictTypeId = requestData.getString("dictTypeId");
        Map<String, Object> map = this.dictTypeService.detailDictType(dictTypeId);
        return ResponseData.success(map);
    }

    /**
     * 字典类型-编辑
     *
     * @param
     * @return
     * @author zhanghui
     * @since 2018/9/17 14:20
     **/
    @RequestMapping(name = "字典类型-编辑", path = "updateDictTyep")
    public ResponseData updateDictTyep(RequestData requestData) {
        DictType dictType = requestData.parase(DictType.class);
        Integer i = this.dictTypeService.updateDictTyep(dictType);
        if (i >= 0) {
            return ResponseData.success(ResultConstant.UPDATE_SUCCESS);
        } else {
            return ResponseData.error(ResultConstant.UPDATA_FAIL);
        }
    }
}
package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import com.huluobo.module.service.IDictTypeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
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

    @RequestMapping(name = "字典类型-增加",path = "insertDictType")
    public ResultData insertDictType(RequestData requestData){

        return ResultData.success("新增成功");
    }

    /**
     *字典类型-列表
     *
     * @author zhanghui
     * @since 2018/7/22 16:36
     * 版权所有 ZH
     * @param
     * @return
     **/
    @RequestMapping(name = "字典类型-列表",path = "queryDictType")
    public ResultData queryDictType(RequestData requestData){
        String dictTypeCode = requestData.getString("dictTypeCode");
        List<Map<String,Object>> list = this.dictTypeService.queryDictType(dictTypeCode);
        return ResultData.success(list);
    }

}

package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * 字典类型控制器
 * <p>
 * Author zhangh
 * Date 2018/6/27 21:53
 */
@RestController
@RequestMapping(name = "字典类型", path = "/system/dictType/")
public class DictTypeController {

    @RequestMapping(name = "字典类型-增加",path = "insertDictType")
    public ResultData insertDictType(RequestData requestData){

        return ResultData.success("新增成功");
    }

}

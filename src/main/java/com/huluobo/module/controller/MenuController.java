package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 菜单控制器
 * @author zhanghui
 * @since 2018/7/11 17:12
 * 版权所有 ZH
 **/
@RestController
@RequestMapping(name = "菜单",path = "/system/menu/")
public class MenuController {

    @RequestMapping(name = "查询菜单列表",path = "queryMenu")
    public ResultData queryMenu(RequestData requestData){
        List<Map<String, Object>> list = new ArrayList<>();
        //-------------------------模拟数据-------------------------
        Map<String, Object> map1 = new HashMap<>();
        map1.put("id",1);
        map1.put("text","系统管理");
        map1.put("state","closed");
        map1.put("iconCls","icon-blank");
        List<Map<String, Object>> list1 = new ArrayList<>();
        Map<String, Object> map11 = new HashMap<>();
        map11.put("text","字典管理");
        list1.add(map11);
        map1.put("children",list1);
        list.add(map1);
        //-------------------------模拟数据-------------------------
        return ResultData.success(list);
    }
}

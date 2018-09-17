package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResponseData;
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
    public ResponseData queryMenu(RequestData requestData) {
        List<Map<String, Object>> list = new ArrayList<>();
        //-------------------------模拟数据-------------------------
        Map<String, Object> map1 = new HashMap<>();
        map1.put("id",1);
        map1.put("text","系统管理");
        map1.put("state","closed");
        map1.put("iconCls","icon-blank");
        map1.put("url","");
        List<Map<String, Object>> list1 = new ArrayList<>();
        Map<String, Object> map11 = new HashMap<>();
        map11.put("id",11);
        map11.put("text","字典管理1");
        map11.put("url", "views/syst/dictType.html");
        map11.put("iconCls","icon-blank");
        Map<String, Object> map12 = new HashMap<>();
        map12.put("id",12);
        map12.put("text", "测试");
        map12.put("url", "views/syst/test.html");
        map12.put("iconCls","icon-blank");
        list1.add(map11);
        list1.add(map12);
        map1.put("children",list1);
        list.add(map1);
        //-------------------------模拟数据-------------------------
        return ResponseData.success(list);
    }
}

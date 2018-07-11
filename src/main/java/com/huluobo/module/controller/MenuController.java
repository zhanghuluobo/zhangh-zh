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
        map1.put("text","Folder1");
        map1.put("iconCls","icon-save");
        List<Map<String, Object>> list1 = new ArrayList<>();
        Map<String, Object> map11 = new HashMap<>();
        Map<String, Object> map12 = new HashMap<>();
        map11.put("text","java");
        map12.put("text","c");
        list1.add(map11);
        list1.add(map12);
        map1.put("children",list1);
        //-------------------------模拟数据-------------------------
        Map<String, Object> map2 = new HashMap<>();
        map1.put("id",2);
        map1.put("text","Folder2");
        map1.put("iconCls","icon-save");
        List<Map<String, Object>> list2 = new ArrayList<>();
        Map<String, Object> map21 = new HashMap<>();
        Map<String, Object> map22 = new HashMap<>();
        map21.put("text","java");
        map22.put("text","c");
        list2.add(map21);
        list2.add(map22);
        map2.put("children",list2);

        list.add(map1);
        list.add(map2);
        return ResultData.success(list);
    }
}

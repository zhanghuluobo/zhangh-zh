package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import com.huluobo.module.entity.UserInfo;
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
@RequestMapping(name = "字典类型控制器", path = "/system/dictType/")
public class DictTypeController {

    @RequestMapping(name = "获取字典管理列表", path = "queryDictType")
    public ResultData queryDictType(RequestData requestData) {
        ArrayList<UserInfo> userInfos = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            UserInfo userInfo = new UserInfo();
            userInfo.setAccount("000" + i);
            userInfo.setPassword("123456");
            userInfos.add(userInfo);
        }
        return ResultData.success(userInfos);
    }
}

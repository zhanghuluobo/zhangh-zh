package com.huluobo.module.controller;

import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping(name = "用户管理",path = "/system/userInfo/")
public class UserInfoController {


    @RequestMapping(path = "myTest",method = RequestMethod.POST)
    public ResultData myTest(@RequestBody RequestData requestData){
        Map<String,Object> map = requestData.getData();
        Object account = map.get("account");
        return new ResultData();
    }

}

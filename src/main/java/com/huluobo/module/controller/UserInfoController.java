package com.huluobo.module.controller;

import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.request.RequestData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(name = "用户管理",path = "/system/userInfo/")
public class UserInfoController {

    @ResponseBody
    @RequestMapping(path = "myTest",method = RequestMethod.POST)
    public String myTest(@RequestBody String requestData){

        return requestData;
    }

}

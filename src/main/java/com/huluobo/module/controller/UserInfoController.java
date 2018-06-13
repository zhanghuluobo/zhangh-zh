package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.module.entity.UserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(name = "用户管理",path = "/system/userInfo/")
public class UserInfoController {

    @RequestMapping(path = "myTest")
    public String myTest(@RequestBody RequestData requestData){
        JsonObject data = requestData.getData();
        return data.toString();
    }

}

package com.huluobo.module.controller;

import com.huluobo.core.request.RequestData;
import com.huluobo.core.result.ResultData;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping(name = "用户管理",path = "/system/userInfo/")
public class UserInfoController {


    @ResponseBody
    @RequestMapping(path = "myTest")
    public ResultData myTest(RequestData requestData){
        Map<String,Object> map = requestData.getData();
        Object account = map.get("account");
        return ResultData.success();
    }

}

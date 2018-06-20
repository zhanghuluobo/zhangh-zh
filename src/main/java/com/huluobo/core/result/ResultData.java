package com.huluobo.core.result;

import java.io.Serializable;

/**
 * 返回结果
 *
 * @author zhanghui
 * @since 2018/6/13 19:14
 * 版权所有 ZH
 **/

public class ResultData implements Serializable {

    private static final Integer SUCCESS_CODE = 1000;
    private static final Integer ERROR_CODE = -1000;
    private static final String SUCCESS_MSG = "操作成功";
    private static final String ERROR_MSG = "操作失败";

    private Integer code;
    private String msg;
    private Object data;

    public ResultData(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    //-----------------------------------------------成功----------------------------------------------
    public static ResultData success(Object data){
        return result(SUCCESS_CODE,SUCCESS_MSG,data);
    }

    public static ResultData success(){
        return success("");
    }

    //-----------------------------------------------失败-----------------------------------------------
    public static ResultData error(Object data){
        return result(ERROR_CODE, ERROR_MSG, data);
    }

    public static ResultData error(){
        return error("");
    }

    public static ResultData result(Integer code, String msg, Object data) {
        return new ResultData(code, msg, data);
    }
}

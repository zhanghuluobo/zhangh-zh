package com.huluobo.core.request;

import com.alibaba.fastjson.JSONObject;

import javax.json.JsonObject;
import java.io.Serializable;

/**
 * 请求参数
 * @author zhanghui
 * @since 2018/6/13 18:55
 * 版权所有 ZH
 **/
public class RequestData implements Serializable {

    private static final long serialVersionUID = 7041434687641213076L;
    private String ip;
    private String url;
    private JSONObject data;

    public RequestData() {
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public JSONObject getData() {
        return data;
    }

    public void setData(JSONObject data) {
        this.data = data;
    }

    //获取字符串类型
    public String getString(String key){
        return this.data.getString(key);
    }

}

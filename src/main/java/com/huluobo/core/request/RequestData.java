package com.huluobo.core.request;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.huluobo.core.utils.JsonUtil;

import javax.json.JsonObject;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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

    //-----------------------------------------------------扩展-----------------------------------------------------
    public <T> T parase(Class<T> clazz){
        return this.data.toJavaObject(clazz);
    }

    public <T> T parase(String key ,Class<T> clazz){
        return this.data.getObject(key,clazz);
    }

    /**
     * 获取对应的值
     * <p>
     * Author zhangh
     * Date 2018/9/2 21:15
     */
    public Object get(String key) {
        return this.data.get(key);
    }

    /**
     * 获取对应的String类型
     * <p>
     * Author zhangh
     * Date 2018/9/2 21:12
     */
    public String getString(String key) {
        return this.data.getString(key);
    }

    /**
     * 获取对应的Integer类型
     * <p>
     * Author zhangh
     * Date 2018/9/2 21:12
     */
    public Integer getInteger(String key) {
        return this.data.getInteger(key);
    }


    /**
     * 获取对应的Long类型
     * <p>
     * Author zhangh
     * Date 2018/9/2 21:22
     */
    public Long getLong(String key) {
        return this.data.getLong(key);
    }

    /**
     * 获取对应的List类型
     *
     * @author zhanghui
     * @since 2018/9/3 11:05
     **/
    public <T> List<T> getList(String key, Class<T> clazz) {
        JSONArray jsonArray = this.data.getJSONArray(key);
        if (jsonArray != null) {
            return jsonArray.toJavaList(clazz);
        } else {
            return new ArrayList<T>();
        }
    }

    /**
     * 获取对应的Map类型
     * <p>
     * Author zhangh
     * Date 2018/9/4 20:42
     */
    public Map<String, Object> getMap(String key) {
        return JsonUtil.jsonObjectToMap(this.data.getJSONObject(key));
    }

}

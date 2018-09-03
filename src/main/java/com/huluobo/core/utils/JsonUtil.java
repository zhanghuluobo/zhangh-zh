package com.huluobo.core.utils;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * Json转换
 *
 * @author zhanghui
 * @since 2018/9/3 10:54
 **/
public class JsonUtil {

    public static Map<String, Object> jsonObjectToMap(JSONObject jsonObject) {
        Map<String, Object> map = new HashMap<>();
        Set<Map.Entry<String, Object>> entries = jsonObject.getInnerMap().entrySet();
        Iterator<Map.Entry<String, Object>> iterator = entries.iterator();
        Map.Entry<String, Object> next = null;
        while (iterator.hasNext()) {
            next = iterator.next();
            map.put(next.getKey(), next.getValue());
        }
        return map;
    }
}

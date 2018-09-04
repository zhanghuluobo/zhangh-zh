package com.huluobo.core.utils;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * Json转换(感觉没有什么必要)
 *
 * @author zhanghui
 * @since 2018/9/3 10:54
 **/
public class JsonUtil {

    public static Map<String, Object> jsonObjectToMap(JSONObject jsonObject) {
        Map<String, Object> map = new HashMap<>();

        //递归转map
        recursionToMap(map, jsonObject);

        return map;
    }

    /**
     * 递归转map
     *
     * @author zhanghui
     * @since 2018/9/4 15:27
     **/
    private static void recursionToMap(Map<String, Object> map, JSONObject jsonObject) {
        Set<Map.Entry<String, Object>> entries = jsonObject.getInnerMap().entrySet();
        Iterator<Map.Entry<String, Object>> iterator = entries.iterator();
        while (iterator.hasNext()) {
            Map<String, Object> map1 = new HashMap<>();
            Map.Entry<String, Object> next = iterator.next();
            Object value = next.getValue();
            if (value instanceof JSONObject) {
                recursionToMap(map1, (JSONObject) value);
            }
            map.put(next.getKey(), value);
        }
    }
}

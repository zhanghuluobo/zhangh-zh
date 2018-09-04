package com.huluobo.core.utils;

import com.alibaba.fastjson.JSONObject;

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

        Set<Map.Entry<String, Object>> entries = jsonObject.getInnerMap().entrySet();
        Iterator<Map.Entry<String, Object>> iterator = entries.iterator();

        //递归转map
        Map<String, Object> map = recursionToMap(iterator);
//        while (iterator.hasNext()) {
//            Map.Entry<String, Object> next = iterator.next();
//            Object value = next.getValue();
//            if(value instanceof JSONObject){
//                System.out.println(123);
//            }
//            map.put(next.getKey(), value);
//        }
        return map;
    }

    /**
     * 递归转map
     *
     * @author zhanghui
     * @since 2018/9/4 15:27
     **/
    private static Map<String, Object> recursionToMap(Iterator<Map.Entry<String, Object>> iterator) {
        return null;
    }
}

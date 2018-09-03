package utils;

import cn.hutool.json.JSONUtil;
import com.alibaba.fastjson.JSONObject;
import com.huluobo.core.utils.JsonUtil;
import org.junit.Test;

import java.util.Map;

/**
 * JsonUtil测试类
 *
 * @author zhanghui
 * @since 2018/9/3 11:25
 **/
public class JsonUtilTest {

    @Test
    public void jsonObjectToMapTest() {
        JSONObject jsonObject1 = new JSONObject();
        jsonObject1.put("name", "张三");
        jsonObject1.put("sex", "女");
        jsonObject1.put("age", 18);
        JSONObject jsonObject2 = new JSONObject();
        jsonObject2.put("chinese", 100);
        jsonObject2.put("english", 100);
        jsonObject2.put("math", 100);
        JSONObject jsonObject3 = new JSONObject();
        jsonObject3.put("A", 12);
        jsonObject3.put("B", 12);
        jsonObject3.put("C", 12);
        jsonObject2.put("ABC", jsonObject3);
        jsonObject1.put("grade", jsonObject2);

        Map<String, Object> map = JsonUtil.jsonObjectToMap(jsonObject1);
        System.out.println(map.get("name"));
        System.out.println(map.get("grade"));
        Map<String, Object> grade = (Map<String, Object>) map.get("grade");
        System.out.println(grade.get("A"));


    }
}

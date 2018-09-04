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

        //第三层
        JSONObject jsonObject3 = new JSONObject();
        jsonObject3.put("A", 12);
        jsonObject3.put("B", 12);
        jsonObject3.put("C", 12);


        //第二层
        JSONObject jsonObject1 = new JSONObject();
        jsonObject1.put("chinese", 100);
        jsonObject1.put("english", 100);
        jsonObject1.put("math", 100);
        jsonObject1.put("ABC", jsonObject3);

        //第一层
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name", "张三");
        jsonObject.put("sex", "女");
        jsonObject.put("age", 18);
        jsonObject.put("grade", jsonObject1);

        //调用JSONObject转Map方法
        Map<String, Object> map = JsonUtil.jsonObjectToMap(jsonObject);

        //打印第一层
        System.out.println(map.get("name") + "-------------" +
                map.get("sex") + "-------------" + map.get("age"));

        //打印第二层
        Map<String, Object> grade = (Map<String, Object>) map.get("grade");
        System.out.println(grade.get("chinese") + "-------------" +
                grade.get("english") + "-------------" + grade.get("math"));

        //打印第三层
        Map<String, Object> abc = (Map<String, Object>) grade.get("ABC");
        System.out.println(abc.get("A") + "-------------" +
                abc.get("B") + "-------------" + abc.get("C"));


    }
}

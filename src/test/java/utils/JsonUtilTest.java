package utils;

import com.alibaba.fastjson.JSONObject;
import org.junit.Test;

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


    }
}

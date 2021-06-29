package com.example.demo.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.Map;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest

public class LoginInfoMapperTest {

    @Resource
    private LoginInfoMapper loginInfoMapper;

    @Test
    public void findUserEmail() {
        Map<String,String> info=loginInfoMapper.findUserEmail("admin@123.com");
        System.out.println(info);
    }

    @Test
    public void findLoginInfo() {
        Map<String,String> map1=new HashMap<>();
        map1.put("email","admin@123.com");
        map1.put("password","123456");
        Map<String,String> info=loginInfoMapper.findLoginInfo(map1);
        System.out.println(info);
        Map<String,String> map2=new HashMap<>();
        map2.put("email","admin@123.com");
        map2.put("password","111111");
        info=loginInfoMapper.findLoginInfo(map2);
        System.out.println(info);
    }
}
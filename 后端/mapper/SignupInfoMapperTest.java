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

public class SignupInfoMapperTest {

    @Resource
    private SignupInfoMapper signupInfoMapper;

    @Test
    public void findUserEmail() {
        Map<String,String> info=signupInfoMapper.findUserEmail("admin@123.com");
        System.out.println(info);
    }

    @Test
    public void save() {
        Map<String,String> map=new HashMap<>();
        map.put("e-mail","admin@123456.com");
        map.put("pwd","123456");
        int info=signupInfoMapper.save(map);
        System.out.println(info);
    }
}
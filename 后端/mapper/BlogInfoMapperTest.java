package com.example.demo.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest

public class BlogInfoMapperTest {
    @Resource
    private  BlogInfoMapper blogInfoMapper;

    @Test
    public void findBlogByUserID() {
        List<Map<String,Object>> list=blogInfoMapper.findBlogByUserID(1);
        System.out.println(list);
    }

    @Test
    public void addBlog() {
        Map<String,String> map=new HashMap<>();
        map.put("id","5");
        map.put("user","1");
        map.put("title","blog_title");
        map.put("content","blog_content");
        map.put("time","2020-6-30 10:10:10");
        map.put("views","0");
        map.put("comments","0");
        map.put("likes","0");
        map.put("type","1");
        int info=blogInfoMapper.addBlog(map);
        System.out.println(info);
    }

    @Test
    public void changeBlog() {
        Map<String,String> map=new HashMap<>();
        map.put("title","blog title");
        map.put("content","blog content");
        map.put("id","4");
        System.out.println(blogInfoMapper.changeBlog(map));
    }

    @Test
    public void deleteBlog() {
        Map<String,Integer> map=new HashMap<>();
        map.put("id",6);
        System.out.println(blogInfoMapper.deleteBlog(map.get("id")));
    }

    @Test
    public void searchBlogViews() {

    }

    @Test
    public void updateBlogViews() {
    }

    @Test
    public void searchBlogLikes() {
        Map<String,Integer> map=new HashMap<>();
        map.put("blog_id",3);
        System.out.println(blogInfoMapper.searchBlogLikes(map.get("blog_id")));
    }

    @Test
    public void findBlogLiker() {
        Map<String,String> map=new HashMap<>();
        map.put("blog","2");
        map.put("user","1");
        System.out.println(blogInfoMapper.findBlogLiker(map));

    }

    @Test
    public void addLikeInfo(){
        Map<String,String> map=new HashMap<>();
        map.put("blog","2");
        map.put("user","2");
        int info=blogInfoMapper.addLikeInfo(map);
        System.out.println(info);
    }

    @Test
    public void updateBlogLikes() {
        Map<String,Integer> map=new HashMap<>();
        map.put("id",3);
        System.out.println(blogInfoMapper.updateBlogLikes(map.get("id")));
    }

    @Test
    public void regretBlogLikes() {
        Map<String,Integer> map=new HashMap<>();
        map.put("id",3);
        System.out.println(blogInfoMapper.regretBlogLikes(map.get("id")));
    }

    @Test
    public void searchBlogComments() {
    }

    @Test
    public void updateBlogComments() {
    }
}
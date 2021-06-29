package com.example.demo.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest

public class CommentInfoMapperTest {
    @Resource
    private  CommentInfoMapper commentInfoMapper;

    @Test
    public void findCommentByUserID() {
    }

    @Test
    public void findCommentByBlogID() {
    }

    @Test
    public void addComment() {
    }

    @Test
    public void deleteComment() {
    }

    @Test
    public void searchCommentLikes() {
    }

    @Test
    public void updateCommentLikes() {
    }
}
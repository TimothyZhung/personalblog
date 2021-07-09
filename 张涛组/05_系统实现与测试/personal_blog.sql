/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.20 : Database - personal_blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`personal_blog` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `personal_blog`;

/*Table structure for table `blogs` */

DROP TABLE IF EXISTS `blogs`;

CREATE TABLE `blogs` (
                         `blog_id` bigint NOT NULL AUTO_INCREMENT COMMENT '博客id',
                         `user_id` bigint NOT NULL COMMENT '发表用户id',
                         `blog_title` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博客标题',
                         `blog_content` longtext COMMENT '博客内容',
                         `blog_time` datetime NOT NULL COMMENT '博客发表时间',
                         `blog_views` bigint NOT NULL COMMENT '博客浏览量',
                         `blog_comments` bigint NOT NULL COMMENT '博客评论数',
                         `blog_likes` bigint NOT NULL COMMENT '博客点赞数',
                         `blog_type` varchar(20) DEFAULT NULL COMMENT '博客类型',
                         PRIMARY KEY (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `blogs` */

insert  into `blogs`(`blog_id`,`user_id`,`blog_title`,`blog_content`,`blog_time`,`blog_views`,`blog_comments`,`blog_likes`,`blog_type`) values
(1,1,'blog_title','blogcontent','2020-06-30 11:11:11',0,0,0,'1'),
(2,1,'blog.title','blog.content','2020-06-30 12:12:12',0,0,0,NULL),
(3,1,'blog_title','blog_content','2020-06-30 10:10:10',2,0,10,NULL);

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
                            `comment_id` bigint NOT NULL AUTO_INCREMENT COMMENT '评论id',
                            `blog_id` bigint NOT NULL COMMENT '评论博客id',
                            `user_id` bigint NOT NULL COMMENT '发表用户id',
                            `comment_likes` bigint DEFAULT NULL COMMENT '评论点赞数',
                            `comment_time` datetime NOT NULL COMMENT '评论发表时间',
                            `comment_content` longtext NOT NULL COMMENT '评论内容',
                            `comment_parent_id` bigint DEFAULT NULL COMMENT '父评论id',
                            PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `comments` */

insert  into `comments`(`comment_id`,`blog_id`,`user_id`,`comment_likes`,`comment_time`,`comment_content`,`comment_parent_id`) values
(1,2,2,0,'2020-06-30 12:12:12','comment.content',NULL),
(2,2,3,0,'2020-06-30 12:12:12','comment.content',1),
(3,2,4,0,'2020-07-01 12:12:12','comment_content',1);

/*Table structure for table `likes` */

DROP TABLE IF EXISTS `likes`;

CREATE TABLE `likes` (
                         `blog_id` bigint DEFAULT NULL COMMENT '点赞博客id',
                         `user_id` bigint DEFAULT NULL COMMENT '点赞用户id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `likes` */

insert  into `likes`(`blog_id`,`user_id`) values
(2,1);

/*Table structure for table `messages` */

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
                            `message_id` bigint NOT NULL AUTO_INCREMENT COMMENT '留言id',
                            `user_id` bigint NOT NULL COMMENT '留言用户id',
                            `message_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言用户名',
                            `message_email` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言邮箱',
                            `message_content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言内容',
                            `message_time` datetime NOT NULL COMMENT '留言时间',
                            PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `messages` */

insert  into `messages`(`message_id`,`user_id`,`message_name`,`message_email`,`message_content`,`message_time`) values
(1,2,'visitor','visitor@123.com','message_content','2020-07-01 19:42:12'),
(2,3,'visitor','visitor@111.com','message_content','2020-07-01 19:42:00'),
(4,5,'name','visitor@email.com','content','2020-06-30 13:13:13');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
                         `user_id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户id',
                         `user_name` varchar(20) DEFAULT NULL COMMENT '用户名字',
                         `user_email` varchar(30) NOT NULL COMMENT '用户邮箱',
                         `user_password` varchar(30) NOT NULL COMMENT '用户密码',
                         `user_profile` varchar(255) DEFAULT NULL COMMENT '用户头像',
                         PRIMARY KEY (`user_email`),
                         KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`user_id`,`user_name`,`user_email`,`user_password`,`user_profile`) values
(2,'admin','admin@111.com','123456',NULL),
(3,NULL,'admin@123.cn','123456',NULL),
(1,'admin','admin@123.com','123456',NULL),
(4,NULL,'admin@qq.com','123456',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
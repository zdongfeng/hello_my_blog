/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-18 10:48:00
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-06-14 16:06:48
 */
import {createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/dashboard/index.vue';
import AboutBlog from '../views/aboutBlog/index.vue';
import ArticleType from '../views/articleType/index.vue'
import Article from '../views/article/index.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta:{
            title: '首页',
            isRoute: true
        }
    },
    {
        path: '/articleType',
        name: 'ArticleType',
        component: ArticleType,
        meta:{
            title: '分栏',
            isRoute: true
        }
    },
    {
        path: '/aboutBlog',
        name: 'AboutBlog',
        component: AboutBlog,
        meta:{
            title: '关于博客',
            isRoute: true
        }
    },
    {
        path: '/aboutMe',
        name: 'AboutMe',
        component: AboutBlog,
        meta:{
            title: '关于我',
            isRoute: true
        }
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article,
        meta:{
            title: '文章内容'
        }
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router ;

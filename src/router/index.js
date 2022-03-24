/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-18 10:48:00
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-24 14:02:17
 */
import {createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/dashboard/index.vue';
import AboutBlog from '../views/aboutBlog/index.vue';
import ArticleType from '../views/articleType/index.vue'

const routes = [
    {
        path: '/',
        name: Dashboard,
        component: Dashboard,
        meta:{
            title: '首页'
        }
    },
    {
        path: '/articleType',
        name: ArticleType,
        component: ArticleType,
        meta:{
            title: '分栏'
        }
    },
    {
        path: '/aboutBlog',
        name: AboutBlog,
        component: AboutBlog,
        meta:{
            title: '关于博客'
        }
    }
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router ;

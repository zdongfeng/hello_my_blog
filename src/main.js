/*
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-18 10:26:57
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-24 00:34:31
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/base.css'
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
import router from './router/index.js'

createApp(App)
    .use(router)
    .use(Antd)
    .mount('#app')

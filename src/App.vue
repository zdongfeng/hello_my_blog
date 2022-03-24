<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-18 10:26:57
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-24 11:16:15
-->
<template>
  <blogHeader></blogHeader>
  <router-view></router-view>
  <nprogress />
</template>

<script setup>
import Nprogress from './components/Nprogress/index.vue'
import BlogHeader from './components/BlogHeader/index.vue'
</script>   
 <style>
html,
body,
#app {
  width: 100% !important;
  height: 100%;
  cursor: url(//cdn.jsdelivr.net/gh/LIlGG/halo-theme-sakura@1.3.1/source/cursor/normal.cur), auto;
}
body {
  transition: background 1s;
}
</style>

<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-24 00:05:54
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-13 17:25:12
-->
<template>
  <div class="top" :class="bg ? 'fff' : '' ">
    <div class="typeBox">
      <div class="typeTitle" v-for="item in routes" @click="toPage(item)">{{item.meta.title}}</div>
    </div>

    <div class="topRight">
      <div class="headSculpture">
        <img src="../../assets/images/mytx.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import router from '../../router/index'

let bg = ref(false)
let routes = ref([])
routes.value = router.options.routes.filter(v => v.meta.isRoute)

const toPage = (item) => {
  router.push({
    path: item.path
  })
}
onMounted(()=>{
  window.addEventListener('scroll', function (e) { 
      // 页面总高
      var totalH = document.documentElement.scrollHeight
      // 可视高
      var clientH = document.documentElement.clientHeight
      // 计算有效高
      var validH = totalH - clientH
      // 滚动条卷去高度
      var scrollH = document.documentElement.scrollTop
      if(!Number((scrollH / validH * 100).toFixed(2))){
        bg.value = false
      }else {
        bg.value = true
      }
  }, true)
})
</script >

<style lang="less" scoped>
.top {
  font-family: "楷体","楷体_GB2312";
  position: relative;
  width: 100%;
  height: 75px;
  background: none;
  transition: all .6s ease;
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  .typeBox {
    width: 70%;
    min-width: 600px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    .typeTitle {
      padding: 0 20px;
      height: 75px;
      line-height: 75px;
      font-size: 16px;
      color: #555;
      font-weight: bolder;
    }
    .typeTitle:hover {
      color: #fe9600;
      border-bottom: 6px solid #fe9600;
      transition: color 0.2s ease-in-out;
    }
  }
  .topRight {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    .headSculpture {
      width: 100px;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
}
.top:hover {
  background: rgba(255, 255, 255, 0.95);
}
.fff {
  background: rgba(255, 255, 255, 0.95);
}
</style>

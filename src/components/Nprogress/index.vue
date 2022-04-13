<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-23 09:59:29
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-25 10:49:05
-->
<template>
  <div id="nprogress">
    <div class="bar" role="bar" style="transition: all 200ms ease 0s;">
      <div class="peg"></div>
    </div>
    <div class="spinner" role="spinner">
      <div class="spinner-icon"></div>
    </div>
  </div>
  <div @click="goTop" href="#" id="cdTop" class="cd-top" style="top: -900px;"></div>
</template>


<script setup>
import { onMounted } from "vue";

function goTop(){
    window.scroll({
    top: 0,
    behavior: 'smooth'
    });
}
onMounted(()=>{
  window.addEventListener('scroll', function (e) { 
      let bar  = document.querySelector("#nprogress .bar")
      // 页面总高
      var totalH = document.documentElement.scrollHeight

      // 可视高
      var clientH = document.documentElement.clientHeight

      // 计算有效高
      var validH = totalH - clientH

      // 滚动条卷去高度
      var scrollH = document.documentElement.scrollTop

      // 百分比
      var result = `-${100 - Number((scrollH / validH * 100).toFixed(2))}%`

      bar.setAttribute('style', `transform:translate3d( ${result}, 0px, 0px);`)

      let scrollHeight = 900 - (document.documentElement.clientHeight * 0.9) 

      document.querySelector('#cdTop').setAttribute('style', `top: -${scrollHeight}px`)
      
      if(!Number((scrollH / validH * 100).toFixed(2))){
          document.querySelector('#cdTop').setAttribute('style', `top: -900px`)
      }
  }, true)
})

</script>
<style>
.cd-top {
  background: url("../../assets/images/scroll.png") no-repeat center;
  position: fixed;
  right: 25px;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background-size: contain;
  transition: all 0.5s ease-in-out;
  opacity: 1;
}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;
  transform: translate3d(-100%, 0px, 0px);
  position: fixed;
  z-index: 108;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 108;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

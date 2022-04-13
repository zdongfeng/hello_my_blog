<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-25 11:39:03
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-13 17:16:38
-->
<template>
  <div class="banner">
    <img
      class="articleBanner"
      src="https://qn.mrkang.vip/%E5%8D%83%E5%BA%93%E7%BD%91_%E6%A2%A6%E5%B9%BB%E5%94%AF%E7%BE%8E%E5%BD%A9%E8%99%B9%E6%98%9F%E7%90%83%E5%9C%9F%E6%98%9F%E5%AE%87%E5%AE%99_%E5%85%83%E7%B4%A0%E7%BC%96%E5%8F%B712798206_1627634999476.png"
      alt
    />
    <header>
      <div class="headerBox">
        <h1>标题</h1>
        <div class="articleInfo">
          <img class="headPortrait" src="../../assets/images/mytx.jpg" alt />
          <span>大白</span>
          <span>·2022-4-13</span>
          <span>·118访问量</span>
        </div>
      </div>
    </header>
  </div>
  <div class="articleContent">
    <md-editor v-model="value" @onChange='onChange' :previewOnly="true" />
  </div>
</template>

<script setup>
import 'md-editor-v3/lib/style.css';
import {useRoute} from 'vue-router'
import MdEditor from 'md-editor-v3';
import { ref } from 'vue'

const value = ref('# ijiji')

const onChange = (val) => {
    console.log(val)
}

</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  .articleBanner {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    pointer-events: none;
  }
  header {
    position: absolute;
    height: 100px;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .headerBox {
      width: 800px;
      height: 100%;
      h1 {
        height: 60px;
        line-height: 50px;
        font-family: "楷体", "楷体_GB2312";
        font-size: 32px;
        margin-bottom: 0;
        color: #fff;
        text-shadow: 1px 1px 5px rgba(000, 000, 000, 0.6);
      }
      .articleInfo {
        .headPortrait {
          width: 30px;
          height: 30px;
          background-size: 100%;
          border-radius: 50%;
          margin-right: 18px;
        }
        span {
          margin-right: 10px;
          color: #fff;
          font-size: 16px;
          font-family: "楷体", "楷体_GB2312";
          text-shadow: 1px 1px 5px rgba(000, 000, 000, 0.6);
        }
      }
    }
  }
}
.banner:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(111, 111, 111, 0.1);
  z-index: 1;
}
.articleContent {
  width: 100%;
  display: flex;
  justify-content: center;
  .md-previewOnly {
    width: 800px;
  }
}
</style>

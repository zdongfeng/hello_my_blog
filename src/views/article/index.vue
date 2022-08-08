<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-25 11:39:03
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-08-04 16:53:16
-->
<template>
  <div class="article">
    <div class="article-container">
      <header>
        <div class="headerBox">
          <h1>标题</h1>
          <div class="articleInfo">
            <img class="headPortrait" src="../../assets/images/mytx.jpg" alt />
            <span>大白</span>
            <span>· 2022-4-13</span>
            <span>· 118访问量</span>
          </div>
        </div>
      </header>
      <br />
      <div class="articleContent">
        <md-editor v-model="value" @onChange='onChange' :previewOnly="true" />
      </div>
    </div>

  </div>
</template>

<script setup>
import 'md-editor-v3/lib/style.css';
import { useRoute } from 'vue-router'
import MdEditor from 'md-editor-v3';
import { ref } from 'vue'

const value = ref('# ijiji')

const onChange = (val) => {
  console.log(val)
}

</script>

<style lang="less" scoped>
.article {
  padding-top: 100px;
  background-color: rgb(244, 245, 245);
  background-image: url(../../assets/images/blog_bg2.png);
  height: 100%;
  .article-container{
    position: relative;
    margin: 0 auto;
    max-width: 1140px;
    background: rgb(230 247 255 / 78%);
    border-radius: 5px;
  }
}

header {
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
      color: #333;
      font-weight: 600;
      // text-shadow: 1px 1px 5px rgba(000, 000, 000, 0.6);
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
        color: #333;
        font-size: 16px;
        font-family: "楷体", "楷体_GB2312";
        // text-shadow: 1px 1px 5px rgba(000, 000, 000, 0.6);
      }
    }
  }
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

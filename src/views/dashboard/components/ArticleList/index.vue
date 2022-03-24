<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-24 16:28:36
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-03-24 17:38:04
-->
<template>
  <div class="articleList">
    <div class="articTitle">
        文章列表
    </div>
    <template v-for="item in articleList" key="item">
      <articleItem />
    </template>
  </div>
</template>

<script setup> 
import {ref, defineComponent, onMounted} from 'vue'
    import ArticleItem from './ArticleItem.vue'
    let articleList = ref([1,2,3])
</script>

<style lang="less" scoped>
.articleList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .articTitle{
    width: 800px;
    height: 70px;
    font-size: 18px;
    font-family: "楷体","楷体_GB2312";  
    line-height: 40px;
    padding-top: 30px;
    border-bottom: 1px dashed #ddd;
    margin-bottom: 20px;
  }
}
</style>

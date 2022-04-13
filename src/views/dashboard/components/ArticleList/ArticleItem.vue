<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-24 16:33:37
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-13 15:39:31
-->
<template>
    <div class="articleItem" @click="toArticleDetail">
        <!-- <img src="../../../../assets/images/wxChat.jpg" alt=""> -->
        <div class="item">
            <div class="title">
                Vue面试题整理
            </div>
            <div class="desc">
                基于目前阶段对vue常见的一些面试题进行的整理
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const toArticleDetail = () => {
    router.push({
        path: '/article/22'
    })
}

</script>
<style lang="less" scoped>

.articleItem{
    width: 800px;
    height: 240px;
    border-radius: 10px;
    background: transparent;
    box-shadow: 0 1px 20px -6px rgb(0 0 0 / 50%);
    margin-bottom: 20px;
    cursor: pointer;
    .item{
        padding: 24px 48px;
        font-family: 楷体, 楷体_GB2312;
        .title{
            height: 60px;
            line-height: 60px;
            color: #000;
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 12px;
        }
        .desc{
            line-height: 30px;
            color: #000;
            font-size: 16px;
        }
    }
}
</style>

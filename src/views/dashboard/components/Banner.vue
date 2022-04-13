<!--
 * @Descripttion: 
 * @Author: zhaodongfeng
 * @Date: 2022-03-18 15:06:47
 * @LastEditors: zhaodongfeng
 * @LastEditTime: 2022-04-13 15:21:44
-->
<template>
  <div class="header">
    <div class="figure">
      <div class="us">
        <img @click="nextAncientPoetry" class="headPortrait" src="../../../assets/images/mytx.jpg" alt />
        <div class="ancientPoetry">{{ancientPoetry}}</div>
        <div class="contact-me">
          <div class="contact-way">
            <div class="wechat contact-box">
              <img @click="setweChatVisible(true)" src="//cdn.jsdelivr.net/gh/LIlGG/halo-theme-sakura@1.3.1/source/images/sns/wechat.png" alt />
            </div>
            <div class="qq contact-box">
              <img @click="setQQVisible(true)" src="//cdn.jsdelivr.net/gh/LIlGG/halo-theme-sakura@1.3.1/source/images/sns/qq.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ant-img" :style="{ display: 'none' }">
    <a-image
      :width="200"
      :style="{ display: 'none' }"
      :preview="{
                visible:qqVisible,
                onVisibleChange: setQQVisible,
              }"
      :src="qqIcon"
    />
    <a-image
      :width="200"
      :style="{ display: 'none' }"
      :preview="{
                visible:weChatVisible,
                onVisibleChange: setweChatVisible,
              }"
      :src="weChatIcon"
    />
  </div>
</template>

<script >
import {ref, defineComponent, onMounted} from 'vue'
import qqImg from '../../../assets/images/qq.jpg'
import weChatImg from '../../../assets/images/wxChat.jpg'
import ancientPoetryData from '../../../mock/ancientPoetry.json'
export default defineComponent({
  setup(){
    const qqIcon = qqImg
    const weChatIcon = weChatImg
    const qqVisible = ref(false);
    const weChatVisible = ref(false);
    const ancientPoetry = ref('')
    
    const nextAncientPoetry = () => {
      let index = parseInt(Math.random() * ancientPoetryData.data.length)
      ancientPoetry.value = ancientPoetryData.data[index] 
    }

    const setQQVisible = value => {
      qqVisible.value = value;
    };
    const setweChatVisible = value => {
      weChatVisible.value = value;
    };

    onMounted(() => {
      nextAncientPoetry()
    })
      return {
        ancientPoetry,
        qqIcon,
        weChatIcon,
        qqVisible,
        setQQVisible,
        weChatVisible,
        setweChatVisible,
        nextAncientPoetry
      };
    }
})
</script>
<style lang="less" scoped>
.header {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .figure {
    width: 100%;
    height: 100%;
    background: url("https://qn.mrkang.vip/28_1627631977717.jpg");
    background-attachment: fixed;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    .us {
      width: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .headPortrait {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      .ancientPoetry {
        font-family: "楷体","楷体_GB2312";
        font-size: 16px;
        color: black;
        background: rgba(255, 255, 255, 0.3);
        padding: 3px 10px;
        border-radius: 2px;
        margin-top: 10px;
        background-image: linear-gradient(135deg, rgb(0, 0, 0), rgb(255, 2, 2));
        // background-image: linear-gradient(135deg, rgb(255, 0, 0), #0bf67d);
        // background-image: linear-gradient(135deg, #0C7BB3, #F2BAE8);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
      .contact-me {
        width: 40%;
        background: rgba(0, 0, 0, 0.5);
        padding-top: 10px;
        padding-bottom: 5px;
        margin-top: 22px;
        border-radius: 10px;
        .contact-way {
          display: flex;
          text-align: center;
          justify-content: center;
          .contact-box {
            padding-left: 20px;
            padding-right: 20px;
            img {
              height: 35px;
              width: 35px;
              padding: 6px;
              background: 0;
              transition: all .2s;
            }
            img:hover{
              transform: scale(1.2);  
            }
          }
        }
      }
    }
  }
}
</style>

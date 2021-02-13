<!--
 * @Author: your name
 * @Date: 2021-02-13 11:39:50
 * @LastEditTime: 2021-02-13 21:19:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ele_crud/web/src/views/Home/Home.vue
-->
<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 多宫格选择 -->
    <van-grid :column-num="4" class="nine_grid">
      <van-grid-item v-for="(item, index) in grids" :key="index" class="grids">
        <div :class="item.class"></div>
        <div class="">{{ item.text }}</div>
      </van-grid-item>
    </van-grid>
    <!-- news -->
    <div class="news_card">
      <div class="news_title">
        <div class="new_top_left">
          <i class="iconfont">&#xe69e;</i>
          <div>新闻资讯</div>
        </div>
        <div class="new_top_right">
          <i class="iconfont">&#xe66e;</i>
        </div>
      </div>
      <div class="news_list">
        <van-tabs v-model="active">
          <van-tab title="热门"> </van-tab>
          <van-tab title="新闻"> </van-tab>
          <van-tab title="公告"> </van-tab>
          <van-tab title="活动"> </van-tab>
          <van-tab title="赛事"> </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        `https://ossweb-img.qq.com/upload/adw/image/20210213/b7e1a1ad55fa2912a43eaa7bfbeef2df.jpeg`,
        `https://ossweb-img.qq.com/upload/adw/image/20210212/7d6fa51d4870e9a777644c5ef379b088.jpeg`,
        `https://ossweb-img.qq.com/upload/adw/image/20210211/21b748056f350b0928e7d4ffafb6d81d.jpeg`,
      ],
      //  九宫格
      grids: [
        {
          text: "爆料站",
          class: "class1",
        },
        {
          text: "故事站",
          class: "class2",
        },
        {
          text: "周边商城",
          class: "class3",
        },
        {
          text: "体验服",
          class: "class4",
        },
        {
          text: "新人专区",
          class: "class5",
        },
        {
          text: "荣耀传承",
          class: "class6",
        },
        {
          text: "王者营地",
          class: "class7",
        },
        {
          text: "公众号",
          class: "class8",
        },
        {
          text: "版本介绍",
          class: "class9",
        },
        {
          text: "对局环境",
          class: "class10",
        },
        {
          text: "无限王者团",
          class: "class11",
        },
        {
          text: "创意互动营",
          class: "class12",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-tabs__nav--line {
  background-color: #fff !important;
}
::v-deep .van-tab {
  color: #343440 !important;
}
.box {
  background-color: #f2f2f2;
}
.van-swipe {
  height: 11rem;
  margin-top: 0.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.nine_grid {
  margin-top: 0.5rem;
}
.grids {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.class1 {
  background: url("../../common/img/index.png") no-repeat 63.546% 15.517%;
  background-size: 375px 455px;
  width: 2rem;
  height: 2rem;
}
.class2 {
  background: url("../../common/img/index.png") no-repeat 90.483% 15.614%;
  background-size: 375px 455px;
  width: 1.4rem;
  height: 2rem;
}
.class3 {
  background: url("../../common/img/index.png") no-repeat 36.746% 0.924%;
  background-size: 375px 455px;
  width: 2rem;
  height: 2rem;
}
.class4 {
  background: url("../../common/img/index.png") no-repeat 10.408% 15.517%;
  background-size: 375px 455px;
  width: 1.3rem;
  height: 2rem;
}
.class5 {
  background: url("../../common/img/index.png") no-repeat 89.733% 1.266%;
  background-size: 375px 455px;
  width: 1.4rem;
  height: 2rem;
}
.class6 {
  background: url("../../common/img/index.png") no-repeat 36.467% 15.287%;
  background-size: 375px 455px;
  width: 2rem;
  height: 2rem;
}
.class7 {
  background: url("../../common/img/index.png") no-repeat 63.3% 0.927%;
  background-size: 375px 455px;
  width: 2rem;
  height: 2rem;
}

.class8 {
  background: url("../../common/img/index.png") no-repeat 0 98.207%;
  background-size: 375px 455px;
  width: 1.8rem;
  height: 2rem;
}
.class9 {
  background: url("../../common/img/version-icon.png") no-repeat 33.333% 33.333%;
  background-size: 25px 25px;
  width: 2rem;
  height: 2rem;
}
.class10 {
  background: url("../../common/img/djhj.png") no-repeat 0 0;
  background-size: 34px 21px;
  width: 2rem;
  height: 2rem;
}
.class11 {
  background: url("../../common/img/wxwzt.png") no-repeat 0 30%;
  background-size: 32px 15px;
  width: 2rem;
  height: 2rem;
}
.class12 {
  background: url("../../common/img/cyhdy.png") no-repeat 50% 50%;
  background-size: 32px 32px;
  width: 2rem;
  height: 2rem;
}

/* news */
.news_card {
  margin-top: 0.5rem;
  background-color: #fff;
  .news_title {
    width: 92%;
    padding-bottom: 2.5rem;
    margin: 0 auto;
    padding-top: 0.5rem;
    height: 2rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    .new_top_left {
      display: flex;
      i {
        margin-top: 0.1rem;
      }
      div {
        margin-top: 0.25rem;
        margin-left: 0.5rem;
        font-size: 16px;
      }
    }
    .new_top_right {
    }
  }

  .news_list {
  }
}
@font-face {
  font-family: "iconfont"; /* project id 2361307 */
  src: url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.eot");
  src: url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.woff") format("woff"),
    url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2361307_1anxx69m7ar.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
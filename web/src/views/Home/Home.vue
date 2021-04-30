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
      <van-grid-item
        v-for="(item, index) in grids"
        :key="index"
        class="grids"
        :url="item.url"
      >
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
        <!-- <div class="new_top_right">
          <i class="iconfont">&#xe66e;</i>
        </div> -->
      </div>
      <div class="news_list">
        <van-tabs v-model="active">
          <van-tab title="热门"> <HotNews></HotNews> </van-tab>
          <van-tab title="新闻"> </van-tab>
          <van-tab title="公告"> </van-tab>
          <van-tab title="动态"> </van-tab>
          <van-tab title="···"> </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HotNews from "@/views/NewsComponents/HotNews";
export default {
  components: {
    HotNews,
  },
  data() {
    return {
      active:0,
      images: [
        `http://www.meileshikong.com/Upload/XueLiJiaoYu/2021%E5%B9%B403%E6%9C%8819%E6%97%A5%2017%E6%97%B653%E5%88%8610%E7%A7%92/%E6%B5%8B%E7%BB%98%E5%B7%A5%E7%A8%8B.jpg`,
        `http://www.meileshikong.com/Upload/XueLiJiaoYu/2021%E5%B9%B403%E6%9C%8819%E6%97%A5%2017%E6%97%B609%E5%88%8652%E7%A7%92/%E8%88%AA%E7%A9%BA%E6%91%84%E5%BD%B1.jpg`,
        `http://www.meileshikong.com/Upload/XueLiJiaoYu/2021%E5%B9%B403%E6%9C%8805%E6%97%A5%2017%E6%97%B634%E5%88%8625%E7%A7%92/%E6%99%BA%E6%85%A7%E5%86%9C%E4%B8%9A-%E9%A6%96%E9%A1%B5.png`,
        `http://www.meileshikong.com/Upload/XueLiJiaoYu/2021%E5%B9%B403%E6%9C%8819%E6%97%A5%2017%E6%97%B642%E5%88%8643%E7%A7%92/%E8%87%AA%E7%84%B6%E8%B5%84%E6%BA%90.jpg`,
      ],
      //  九宫格
      grids: [
        {
          text: "签到打卡",
          class: "class1",
          url: "/#/signClock",
        },
        {
          text: "日志填报",
          class: "class2",
          url: "",
        },
        {
          text: "积分兑换",
          class: "class3",
          url: "",
        },
        {
          text: "项目周报 ",
          class: "class4",
          url: "",
        },
        {
          text: "公司导航",
          class: "class5",
          url: "",
        },
        {
          text: "任务下发",
          class: "class6",
          url: "",
        },
        {
          text: "版本介绍",
          class: "class9",
          url: "",
        },
        // {
        //   text: "王",
        //   class: "class7",
        // },
        {
          text: "公众号",
          class: "class8",
          url: "",
        },
        // {
        //   text: "环境",
        //   class: "class10",
        // },
        // {
        //   text: "团",
        //   class: "class11",
        // },
        // {
        //   text: "创意互动",
        //   class: "class12",
        // },
      ],
    };
  },
  methods: {},
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
  height: 12rem;
  margin-top: 0;
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
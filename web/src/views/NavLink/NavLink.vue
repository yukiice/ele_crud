<!--
 * @Author: your name
 * @Date: 2021-02-13 11:10:43
 * @LastEditTime: 2021-02-13 14:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ele_crud/web/src/views/NavLink/NavLink.vue
-->
<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="首页">
        <Home></Home>
      </van-tab>
      <van-tab title="我的待办">
        <CompetitionCenter></CompetitionCenter>
      </van-tab>
      <van-tab title="个人中心">
        <StrategyCenter></StrategyCenter>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Home from "../Home/Home";
import CompetitionCenter from "../CompetitionCenter/CompetitionCenter";
import StrategyCenter from "../StrategyCenter/StrategyCenter";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    Home,
    CompetitionCenter,
    StrategyCenter,
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-tabs__nav--line {
  background-color: #db9e3f;
}
::v-deep .van-tab {
  color: #fff;
}
</style>
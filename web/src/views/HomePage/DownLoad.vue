<!--
 * @Author: your name
 * @Date: 2021-02-10 20:31:42
 * @LastEditTime: 2021-02-13 11:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ele_crud/web/src/views/HomePage/DownLoad.vue
-->
<template>
  <div>
      <div
      class="topbar bg-black py-2 text-white px-4 d-flex ai-center jc-between"
    >
    <!-- 左侧 -->
      <div class="d-flex ai-center">
        <a href="#" class="logo"></a>
        <div>
          <div class="text-white px-3 fs-sm">王者荣耀</div>
          <div class="text-dark1 fs-xss px-3">团队成就更多</div>
        </div>
      </div>
      <!-- 右侧button -->
      <a href="#" class="now_click"></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  background: url(../../common/img/index.png) no-repeat 0 72.588%;
  background-size: 375px 455px;
  width: 30px;
  height: 30px;
}
.now_click {
  cursor: pointer;
  background: url(../../common/img/index.png) no-repeat -59px -309px;
  background-size: 375px 455px;
  width: 60px;
  height: 24px;
}
</style>

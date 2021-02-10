<!--
 * @Author: your name
 * @Date: 2021-02-10 16:07:05
 * @LastEditTime: 2021-02-10 17:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ele_crud/web/src/App.vue
-->
<template>
  <v-app>
    <v-main class="pd">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import './style.scss';
.pd{
  padding: 0;
}
</style>

<!--
 * @Author: your name
 * @Date: 2021-02-10 16:07:05
 * @LastEditTime: 2021-02-13 20:38:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ele_crud/web/src/views/Honor.vue
-->
<template>
  <div>
    <down-load></down-load>
    <div>
        <nav-link></nav-link>
    </div>
  </div>
</template>

<script>
import DownLoad from './HomePage/DownLoad.vue';
import NavLink from './NavLink/NavLink.vue';
export default {
  data() {
    return {};
  },
  components: {
    DownLoad,
    NavLink,
  },
};
</script>

<style lang="scss" scoped>

</style>
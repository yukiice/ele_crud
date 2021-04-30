<template>
  <div class="box">
    <Navbar></Navbar>
    <van-steps :active="active">
      <van-step>8:30</van-step>
      <van-step>12:00</van-step>
      <van-step>13:30</van-step>
      <van-step>18:00</van-step>
    </van-steps>
  </div>
</template>

<script>
import Navbar from "./NavComponents/NavCommon.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
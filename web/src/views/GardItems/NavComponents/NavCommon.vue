<template>
  <div>
    <van-nav-bar
      :title="this.$route.meta.title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  data() {
      return{}
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>Ï

<style lang="scss" scoped>
::v-deep .van-nav-bar {
  background-color: #db9e3f;
  .van-nav-bar__title,
  .van-nav-bar__text,
  .van-nav-bar__arrow {
    color: #fff;
  }
}
</style>
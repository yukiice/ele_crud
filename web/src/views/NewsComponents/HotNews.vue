<template>
  <div>
    <van-card
      v-for="(item, index) in cardList"
      currency=""
      :key="index"
      :price="item.time"
      :desc="item.desc"
      :title="item.title"
      thumb="http://www.meileshikong.com/Mainhtml/images/logo-hover.png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
        {
          time: "2020-01-01 12:20",
          desc: "这是一条对热点数据的描述，热点数据是很好玩的",
          title: "热点数据",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .van-card {
  padding: 3px 0;
  margin: 1px 13px;
  border: 0.1px solid #ede8e8;
  background-color: #fff;
  &:not(:first-child) {
    margin-top: 5px;
  }

  .van-image {
    margin: 10px 10px;
    height: 80% !important;
    width: 80% !important;
  }

  .van-card__content {
    margin-left: 3px;

    .van-multi-ellipsis--l2 {
      overflow: visible !important;
    }

    .van-card__title {
      margin-top: 20px;
      font-size: 20px;
    }

    .van-card__desc {
      margin-top: 8px;
      font-size: 17px;
    }

    .van-card__price {
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
      color: #bab8b8;
      &:before,
      &:after {
        content: none;
      }
    }
  }
}
</style>
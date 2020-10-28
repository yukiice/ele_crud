<template>
  <div>
    <el-card class="box-card middle">
      <div slot="header" class="clearfix card_name">
        <span>创建用户</span>
      </div>
      <el-form
        @submit.native.prevent="login"
        ref="form"
        :model="model"
        :rules="modelRules"
        label-width="220px"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="model.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="model.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      //   验证规则
      modelRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    submit() {},
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/home");
      this.$message({
        type: "success",
        message: "登录成功",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.card_name {
  display: flex;
  justify-content: center;
}
.middle {
  width: 40vw;
  height: 30vh;
  margin: 20vh auto;
}
/deep/ .el-input__inner {
  width: 30vh;
}
</style>
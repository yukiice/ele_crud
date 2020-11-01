<template>
  <div>
    <div class="bread_crumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>{{ id ? "编辑" : "新建" }}用户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form
      ref="form"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="账号">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      // 父级下拉菜单选项
      parents: [],
    };
  },
  components: {},
  created() {
    this.id && this.fetch();
  },
  computed: {},
  methods: {
    // 表单提交方法
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/users", this.model);
      }

      this.$router.push("/users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`rest/users/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style scoped>
</style>


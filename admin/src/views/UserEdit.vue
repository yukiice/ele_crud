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
      :model="model"
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="name">
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
      modelRules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
        ],
        passwrod: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
        ],
      },
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
        res = await this.$http.put(`rest/adminusers/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/adminusers", this.model);
      }

      this.$router.push("/adminusers/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`rest/adminusers/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style scoped>
</style>


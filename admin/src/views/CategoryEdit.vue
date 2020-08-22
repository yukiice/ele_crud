<template>
  <div>
    {{id?'编辑':'新建'}}分类
    <el-form
      :model="model"
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
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
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
      },
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
      res = await this.$http.put(`/categories/${this.id}`, this.model);
    }else{
      res = await this.$http.post("/categories", this.model);
    }
    
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
      
    },

    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`/categories/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style scoped>
</style>


<template>
  <div>
    {{id?'编辑':'新建'}}文章
    <el-form
      :model="model"
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="所属分类" >
        <el-select v-model="model.categories" placeholder>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" >
        <el-input v-model="model.title"></el-input>
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
     
      categories:[]
    };
  },
  components: {},
  created() {
    this.id && this.fetch();
    this.fetchCategories();
  },
  computed: {},
  methods: {
    // 表单提交方法
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/articles", this.model);
      }

      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
    },

    //  请求父级下拉框数据
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
  },
};
</script>

<style scoped>
</style>


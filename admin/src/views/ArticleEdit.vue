<template>
  <div>
    <div class="bread_crumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">文章管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>{{ id ? "编辑" : "新建" }}文章</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor
          v-model="model.body"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "",
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
      // 图片上传formdata
      htmlForEditor: "",
      modelRules: {},
      categories: [],
    };
  },
  components: {
    VueEditor,
  },
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

    // 富文本编辑器图片上传
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post(`upload`, formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
  },
};
</script>

<style scoped>
</style>


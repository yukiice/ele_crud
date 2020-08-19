<template>
  <div>
    新建分类
    <el-form :model="form" ref="form"  label-width="80px">
      <el-form-item label="名称">
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
  props: [],
  data() {
    return {
      model:{}
    };
  },
  components: {},
  created() {},
  computed: {},
  methods: {
    // 表单提交方法
    save(){

    },
  },
};
</script>

<style scoped>
</style>


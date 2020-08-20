<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="_id" label="ID" width></el-table-column>
      <el-table-column prop="name" label="分类名称" width></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  data() {
    return {
      tableData: [],
    };
  },
  components: {},
  created() {
    // 获取列表数据
    this.getTableData();
  },
  computed: {},
  methods: {
    // 获取列表数据
    async getTableData() {
      const res = await this.$http.get("/categories");
      this.tableData = res.data;
    },
  },
};
</script>

<style scoped>
</style>


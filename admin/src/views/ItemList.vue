<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="_id" label="ID" width align="center"></el-table-column>
      <el-table-column prop="name" label="物品名称" width align="center"></el-table-column>
       <el-table-column prop="icon" label="图标" align="center">
         <template v-slot="slotProps">
             <img class="icon_img" :src="slotProps.row.icon" alt="">
         </template>
       </el-table-column>
      <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="rowClick(scope.row)">查看</el-button>
          <el-button type="text" @click="editClick(scope.row)">编辑</el-button>
          <el-button type="text" @click="deleteClick(scope.row)">删除</el-button>
        </template>
      </el-table-column>
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
    // 获取数据信息-------------------------
    // 获取列表数据
    async getTableData() {
      const res = await this.$http.get("rest/items");
      this.tableData = res.data;
    },
    
    // 页面详情查看事件-------------------- 
    rowClick(row){
      console.log(row)
    },

    // 编辑事件-----------------------------
    editClick(row){
      console.log(row)
      this.$router.push(`/items/edit/${row._id}`)
    },

    // 删除事件------------------------------
    async deleteClick(row){
      
       this.$confirm(`此操作将永久删除"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消', 
          type: 'warning'
        }).then(async () => {
          const res = await this.$http.delete(`rest/items/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // 更新数据
          this.getTableData()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    },
  },
};
</script>

<style scoped lang="less">

  .icon_img{
  width: 30%;
  height: 30%;
}

</style>


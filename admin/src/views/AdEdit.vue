<template>
  <div>
    <div class="bread_crumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#">广告管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>{{ id ? "编辑" : "新建" }}广告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form
      :model="model"
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-button type="primary" @click="addItems" class="add_btn"
        ><i class="el-icon-plus"></i>添加广告</el-button
      >

      <el-row type="itemsFlex">
        <el-col :md="12" v-for="(item, i) in model.items" :key="i">
          <el-card class="box-card cardBorder">
            <div slot="header" class="clearfix">
              <span>{{ item.name }}</span>
              <el-button
                style="float: right"
                type="danger"
                @click="deleteItems(i)"
                ><i class="el-icon-delete"></i>删除该广告</el-button
              >
            </div>
            <el-form-item label="名称" prop="name">
              <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="(res) => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="小提示">
              <el-input type="textarea" v-model="item.tips"></el-input>
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>

      <el-form-item class="submitEnd">
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
      model: {
        items: [{}],
      },
      modelRules: {
        name: [{ required: true, message: "请输入广告名称", trigger: "blur" }],
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
    // 添加广告
    addItems() {
      this.model.items.push({});
    },
    // 删除广告
    deleteItems(i) {
      this.model.items.splice(i, 1);
    },
    // 上传图片之前
    beforeAvatarUpload() {},
    // 上传图片成功后
    successUpload(files) {
      // 这里icon已经有了但是没有显示  所以使用$set进行显式赋值
      // this.$set(this.model, 'icon', files.url);
      this.model.image = files.url;
    },
    // 表单提交方法
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/ads", this.model);
      }

      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.submitEnd {
  display: flex;
  justify-content: center;
  margin-top: 2vh;
}
.skillsFlex {
  display: flex;
  flex-wrap: wrap;
}
.cardBorder {
  margin: 1vh 1vw;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.add_btn {
  margin: 1vh 1vw;
}
</style>


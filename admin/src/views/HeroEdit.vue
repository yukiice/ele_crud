<template>
  <div>
    {{ id ? "编辑" : "新建" }}英雄
    <el-form
      :model="model"
      ref="form"
      :rules="modelRules"
      @submit.native.prevent="save"
      label-width="80px"
    >
      <el-form-item label="名称">
        <el-input v-model="model.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="称号">
        <el-input v-model="model.title" placeholder="请输入称号"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="model.categories" multiple placeholder="请选择类型">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度">
        <el-rate
          style="margin-top: 0.6rem"
          :max="10"
          show-score
          v-model="model.scores.difficult"
        >
        </el-rate>
      </el-form-item>
      <el-form-item label="技能">
        <el-rate
          style="margin-top: 0.6rem"
          :max="10"
          show-score
          v-model="model.scores.skills"
        >
        </el-rate>
      </el-form-item>
      <el-form-item label="攻击">
        <el-rate
          style="margin-top: 0.6rem"
          :max="10"
          show-score
          v-model="model.scores.attack"
        >
        </el-rate>
      </el-form-item>
      <el-form-item label="生存">
        <el-rate
          style="margin-top: 0.6rem"
          :max="10"
          show-score
          v-model="model.scores.survive"
        >
        </el-rate>
      </el-form-item>
      <el-form-item label="顺风出装">
        <el-select v-model="model.items1" multiple placeholder="请选择类型">
          <el-option
            v-for="item in items"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="逆风出装">
        <el-select v-model="model.items2" multiple placeholder="请选择类型">
          <el-option
            v-for="item in items"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="使用技巧">
        <el-input v-model="model.useageTips" type="textarea"> </el-input>
      </el-form-item>
      <el-form-item label="对抗技巧">
        <el-input v-model="model.battleTips" type="textarea"> </el-input>
      </el-form-item>
      <el-form-item label="团战思路">
        <el-input v-model="model.teamTips" type="textarea"> </el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="successUpload"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {
        icon: "",
        scores: {},
      },
      modelRules: {
        name: [{ required: true, message: "请输入标签名称", trigger: "blur" }],
      },
      // 分类数据
      categories: [],
      // 出装
      items: [],
    };
  },
  components: {},
  created() {
    this.id && this.fetch();
    // this.fetchParents();
    this.getCategoriList();
    this.getEquipment();
  },
  computed: {},
  methods: {
    // 请求分类数据
    async getCategoriList() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    // 请求出装数据
    async getEquipment() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
    },
    // 请求点击编辑后的数据
    async fetch() {
      const res = await this.$http.get(`rest/heros/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    // 表单提交方法
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heros", this.model);
      }

      this.$router.push("/heros/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },

    // 上传图片相关
    // 上传图片之前
    beforeAvatarUpload() {},
    // 上传图片成功后
    successUpload(files) {
      console.log(files);
      // 这里icon已经有了但是没有显示  所以使用$set进行显式赋值
      // this.$set(this.model, 'icon', files.url);
      this.model.icon = files.url;
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
</style>


<template>
  <div>
    <mt-header title="出差">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <i class="el-icon-time"></i>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="men">
      <div class="bu">部门</div>
      <div class="dian"></div>
      <el-select v-model="value" placeholder="请选择" size="medium">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="lei">
      <div class="bu">姓名</div>
      <div class="dian"></div>
      <el-input placeholder="请选择" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-arrow-right"></i>
      </el-input>
    </div>
    <div class="lei">
      <div class="bu">出差地点</div>
      <div class="dian"></div>
      <el-input placeholder="请选择" v-model="input4">
        <i slot="suffix" class="el-input__icon el-icon-arrow-right"></i>
      </el-input>
    </div>
    <!-- 出差事由 -->
    <div class="shi">
      <div class="title">出差事由</div>
      <textarea></textarea>
    </div>
    <!-- 开始时间 结束时间 -->
    <div class="start">
      <div class="star">
        <label>开始时间和结束时间</label>
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </div>
      <div class="tian">
        <label>出差时长</label>
        <input type="text" placeholder="天" />
      </div>
    </div>
    <div class="mess">
      自动校准打卡记录
      <a>了解详情</a>
    </div>

    <!-- 附件 -->
    <div class="jian">
      <div class="title">附件</div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>

    <div class="ren">
      <div>审批人</div>
      <div class="dian"></div>
      <div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="ren">
      <div>抄送人</div>
      <div class="dian"></div>
      <div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess1"
          :before-upload="beforeAvatarUpload2"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="btn">提交</div>
  </div>
</template>
<script>
import vuePickers from "vue-pickers";
export default {
  name: "leave",
  components: {
    vuePickers
  },
  data() {
    return {
      fileList: [],
      imageUrl: "",
      options: [
        {
          value: "选项1",
          label: "技术部"
        },
        {
          value: "选项2",
          label: "研发部"
        },
        {
          value: "选项3",
          label: "人力"
        },
        {
          value: "选项4",
          label: "商务部"
        },
        {
          value: "选项5",
          label: "产品部"
        }
      ],
      value: "",
      value1: "",
      value2: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value3: "",
      input3: "",
      input4: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess1(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload2(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style lang="stylus" scoped>
.men {
  display: flex;
  margin-top: 0.4rem;
  position: relative;

  .bu {
    width: 2rem;
    height: 1rem;
    font-size: 28px;
    text-align: center;
    line-height: 1rem;
  }

  .dian {
    position: absolute;
    left: 1.1rem;
    top: 0.3rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
  }
}

.lei {
  display: flex;
  margin-top: 0.4rem;
  position: relative;

  .bu {
    width: 2rem;
    height: 1rem;
    font-size: 28px;
    text-align: center;
    line-height: 1rem;
  }

  .dian {
    position: absolute;
    left: 1.3rem;
    top: 0.3rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: red;
  }
}

.shi {
  width: 100%;
  height: 3.5rem;
  margin-top: 0.2rem;
  padding-left: 0.3rem;

  .title {
    font-size: 30px;
  }
}

.start {
  width: 100%;
  height: 2rem;

  .star {
    display: flex;
    position: relative;

    label {
      width: 2.5rem;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 24px;
    }
  }
}

.tian {
  display: flex;
  position: relative;

  label {
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 30px;
    margin-left: 0.2rem;
  }

  input {
    width: 6rem;
    font-size: 24px;
    text-align: right;
  }
}

.mess {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;

  a {
    color: skyblue;
  }
}

.you {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
  font-size: 30px;
}

textarea {
  width: 100%;
  height: 3rem;
  font-size: 24px;
}

.jian {
  width: 100%;
  height: 2.5rem;

  .title {
    font-size: 30px;
  }
}

.ren {
  margin-top: 0.2rem;
  font-size: 30px;
  position: relative;

  .dian {
    position: absolute;
    left: 1rem;
    top: 0.05rem;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    background: red;
  }
}

.btn {
  width: 6rem;
  height: 1rem;
  border-radius: 10%;
  line-height: 1rem;
  text-align: center;
  background: skyblue;
  color: #fff;
  margin: 0.1rem auto;
}
</style>
<style>
.mint-header {
  height: 0.8rem;
  font-size: 30px;
}
.el-icon-time {
  font-size: 30px;
  margin-left: 0.2rem;
}
.mintui {
  font-size: 30px;
}
.el-input--medium .el-input__inner {
  width: 6rem;
  height: 1rem;
}
.el-input--medium .el-input__inner {
  font-size: 28px;
}
.el-select-dropdown__item {
  font-size: 24px;
}
.el-range-editor.el-input__inner {
  width: 5rem;
  height: 1rem;
}
.el-date-editor .el-range-separator {
  width: 10%;
  padding: 0.3rem 0.05rem;
  font-size: 24px;
}
.el-date-editor .el-range-input {
  font-size: 24px;
}
.el-date-editor .el-range__icon {
  font-size: 24px;
}
.el-picker-panel__icon-btn {
  font-size: 24px;
}
.el-date-range-picker__content .el-date-range-picker__header div {
  font-size: 24px;
}
.el-date-range-picker table {
  font-size: 24px;
}
.el-button--text {
  font-size: 24px;
}
.el-button.is-disabled.is-plain {
  font-size: 24px;
}
.el-input--small .el-input__inner {
  font-size: 24px;
}
.el-date-editor.el-input {
  width: 100%;
}
.el-input--prefix .el-input__inner {
  height: 1rem;
}
.el-input--prefix .el-input__inner {
  font-size: 24px;
}
.el-input__icon {
  font-size: 24px;
}
.el-icon-date {
  padding: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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
.el-input--suffix .el-input__inner {
  width: 6rem;
  height: 1rem;
  font-size: 28px;
}
.el-button--small {
  width: 200px;
  height: 50px;
}
.el-upload__tip {
  font-size: 24px;
}
.upload-demo {
  margin-top: 20px;
}    
</style>
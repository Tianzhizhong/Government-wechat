<template>
  <div>
    <mt-header title="请假">
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
      <div class="bu">请假类型</div>
      <div class="dian"></div>
      <el-select v-model="value1" placeholder="请选择" size="medium">
        <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
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
        <label>请假时长</label>
        <input type="text" placeholder="天" />
      </div>
    </div>
    <div class="mess">
      自动校准打卡记录
      <a>了解详情</a>
    </div>
    <div class="you">请假事由</div>
    <textarea placeholder="请输入请假事由"></textarea>
    <div class="block">
      <el-date-picker v-model="value3" type="date" placeholder="加班日期"></el-date-picker>
    </div>
     <div class="you">备注</div>
    <textarea placeholder="请输入"></textarea>
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
      data: [
        {
          value: "选项1",
          label: "生病"
        },
        {
          value: "选项2",
          label: "有事"
        },
        {
          value: "选项3",
          label: "出差"
        },
        {
          value: "选项4",
          label: "住院"
        },
        {
          value: "选项5",
          label: "其他"
        }
      ],
      value: "",
      value1: "",
      value2: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value3:''
    };
  },
  methods: {}
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
    text-align: center;
    line-height: 1rem;
    font-size: 24px;
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
  background: pink;

  a {
    color: skyblue;
  }
}

.you {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
}

textarea {
  width: 100%;
  height: 3rem;
  font-size: 24px;
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
.el-date-editor.el-input{
    width: 100%;
}
.el-input--prefix .el-input__inner{
    height:1rem;
}
.el-input--prefix .el-input__inner{
    font-size: 24px;
}
.el-input__icon{
    font-size: 24px;
}
</style>
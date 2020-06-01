<template>
  <div class="clock">
      <div class="clock-top">
        <i class="el-icon-back"></i>
        <span>打卡</span>
        <button @click="demo">跳转</button>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-s-fold">
              <a @click="handleCommand">打卡记录</a>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit">
              <a @click="hanldeHoliday">假勤申请</a>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-tools">打卡设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-question">帮助中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="clock-center">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="上下班打卡" name="first">
            <div class="home">
              <i class="el-icon-office-building"></i>
              <br />
              <span>你已在打卡范围内</span>
            </div>
            <div class="hour">
              <strong>14：12</strong>
              <br />
              <a>下班打卡</a>
            </div>

            <div class="title">请在17：30之后打卡</div>
          </el-tab-pane>
          <el-tab-pane label="外出打卡" name="second">
            <div class="home">
              <i class="el-icon-office-building"></i>
              <br />
              <span>山西省太原市</span>
              <br />
              <a>山西省太原市小店区高新区</a>
            </div>
            <div class="explain">添加备注...</div>
            <div class="hour">
              <strong>14：12</strong>
              <br />
              <a>第一次拍照打卡</a>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
  
</template>
<script>
export default {
  name: "clock",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    demo(){
      this.$router.push({
        name:'clock'
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCommand() {
       this.$router.push('/punchrecord')
    },
    hanldeHoliday(){
      this.$router.push('./holiday')
    }
  }
};
</script>
<style lang="stylus" scoped>
.clock {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .clock-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    background: #87CEEB;

    span {
      margin-right: 0.3rem;
      font-size: 32px;
      color: #fff;
    }
  }

  .clock-center {
    position: relative;
    overflow: auto;
    flex: 1;

    .home {
      margin-left: 35%;
      margin-top: 1.5rem;

      span {
        color: chartreuse;
        font-size: 28px;
        margin-top: 0.2rem;
      }

      a {
        color: chartreuse;
        font-size: 28px;
        margin-left: -0.7rem;
        margin-top: 0.2rem;
      }
    }

    .hour {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      border: 4px solid orange;
      border-radius: 50%;
      margin-left: 30%;
      margin-top: 2rem;

      strong {
        font-size: 40px;
      }
    }

    .title {
      margin-left: 40%;
      margin-top: 2.5rem;
    }
  }

  .explain {
    color: #87CEEB;
    font-size: 32px;
    margin-left: 40%;
    margin-top: 0.7rem;
  }
}
</style>
<style lang="stylus">
.el-icon-back {
  font-size: 48px !important;
}

.el-icon-more {
  font-size: 40px !important;
}

.el-tabs__item {
  padding: 0 1.1rem !important;
  height: 0.8rem !important;
  line-height: 0.8rem !important;
  font-size: 30px;
}

.el-tabs__content {
  height: 1320px;
}

.el-icon-office-building {
  margin-left: 1rem;
  color: chartreuse;
  font-size: 32px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.el-dropdown-menu {
  background: #409eff;
}

.el-popper {
  width: 250px !important;
  height: 300px !important;
}

.el-dropdown-menu__item {
  line-height: 68px;
  font-size: 32px;
  padding: 0 35px;

  a {
    color: #fff;
  }
}
</style>
<template>
  <div>
    <mt-header title="打卡设置">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="ka">
      <div class="title">优先显示外出打卡</div>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="ban">
      <div class="shang">
        <div class="title">上班快捷打卡</div>
        <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="xia">
        <div class="title">下班快捷打卡</div>
        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
    </div>

    <div class="dre">
       <p>
     到达下班地点后，或离开下班地点前，打开企业微信即自动打卡。
       </p>
       <span>了解更多</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "set",
  data() {
    return {
      value: true,
      value1:true,
      value2:true
    };
  }
};
</script>
<style lang="stylus" scoped>
.ka {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .title {
    font-size: 30px;
  }
}

.ban {
  width: 100%;
  height: 2rem;

  .shang {
      width:100%;
      height 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .title {
      font-size:30px;
    }
  }

  .xia {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .title {
      font-size: 30px;
    }
  }
}
.dre{
  width:100%;
  height:2rem;
  P{
    margin-left:0.3rem;
  }
}
</style>
<style>
.mint-header {
  height: 0.8rem;
  font-size: 28px;
}
.back {
  font-size: 28px;
}
.mintui {
  font-size: 28px;
}
</style>
<template>
  <div>
    <mt-header title="2020年5月">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="handleCreate">月报</mt-button>
    </mt-header>
    <el-calendar :range="['2019-04-01', '2019-04-30']"></el-calendar>
    <div class="radio">
      <span>上下班打卡</span>
      <br />
      <p>打卡规则：打卡|工作时长</p>
    </div>
    <div class="block">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Punchrecord",
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "上班",
          timestamp: "范围外打卡(08:29)"
        },
        {
          content: "下班",
          timestamp: "范围外打卡(12:02)"
        },
        {
          content: "上班",
          timestamp: "范围外打卡(12:58)"
        },
        {
          content: "下班",
          timestamp: "17:03"
        }
      ]
    };
  },
  methods:{
    handleCreate(){
      this.$router.push('/month')
    }
  }
};
</script>

<style scoped lang="stylus">
.radio {
  margin-left: 50px;
  span{
    color:#000;
    font-size:30px;
  }
  p{
    font-size:20px;
    margin-top:10px;
  }
}
.block{
   margin-left: 50px;
   margin-top:20px;
}
</style>
<style>
.mint-header {
  height: 80px;
  font-size: 30px;
}
.mintui {
  font-size: 30px;
}
.el-timeline-item{
 font-size:24px;
 padding-bottom:50px;
}
.el-timeline-item__timestamp{
  font-size:18px;
}
</style>

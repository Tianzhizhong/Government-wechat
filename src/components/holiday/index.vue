<template>
  <div>
    <mt-header fixed title="审批"></mt-header>
    <div class="admin">
      <div class="title">行政类型</div>
      <div class="main">
        <div class="hol" @click="handleHol">
          <i class="el-icon-date"></i>
          <p>请假</p>
        </div>
        <div class="chai">
          <i class="el-icon-position"></i>
          <p>出差</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'admin',
    methods:{
        handleHol(){
          this.$router.push('/leave')
        }
    }
};
</script>
<style lang="stylus" scoped>
.admin {
  width: 95%;
  height: 2.5rem;
  margin: 0.8rem auto;

  .title {
    width: 100%;
    height: 0.8rem;
    font-size: 24px;
    border-bottom: 1px solid #000;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
  }

  .main {
    display: flex;
    width: 100%;
    height: 2rem;

    .hol {
      width: 2.5rem;
      height:1.7rem;
      border-right: 1px solid #000;

      p {
        font-size: 30px;
        padding-left: 0.8rem;
        padding-top: 0.2rem;
      }
    }

    .chai {
      width: 2.5rem;
      height: 1.7rem;
      border-right: 1px solid #000;

      p {
        font-size: 30px;
        padding-left: 0.8rem;
        padding-top: 0.2rem;
      }
    }
  }
}
</style>
<style>
.mint-header {
  height: 0.8rem;
  font-size: 30px;
}
.el-icon-date {
  font-size: 60px;
  padding-left: 0.8rem;
  padding-top: 0.5rem;
}
.el-icon-position {
  font-size: 60px;
  padding-left: 0.8rem;
  padding-top: 0.5rem;
}
</style>
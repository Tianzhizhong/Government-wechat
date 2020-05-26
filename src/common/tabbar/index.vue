<template>
  <div id="footer">
    <ul>
      <Router-link v-for="(item,index) in foot" :key="index" tag="li" :to="item.to">
        <i :class="item.iconfont"></i>
        <span>{{item.com}}</span>
      </Router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {
      foot: [
        {
          iconfont: "el-icon-location-outline",
          com: "打卡",
          to: "/clock"
        },
        {
          iconfont: "el-icon-pie-chart",
          com: "统计",
          to: "/equipment"
        },
        {
          iconfont: "el-icon-s-operation",
          com: "规则",
          to: "/rule"
        },
        {
          iconfont: "el-icon-c-scale-to-original",
          com: "设备",
          to: "/statistics"
        }
      ]
    };
  }
};
</script>
<style lang="stylus">
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.04rem;
  border-top: 1px solid #ccc;
  background: #fff;
  z-index: 10;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 1.04rem;
      color: #666;
      font-size: 0.28rem;
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
#footer > ul .router-link-active {
  color:#87CEEB ;
}
</style>
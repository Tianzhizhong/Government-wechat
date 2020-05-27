<template>
  <div class="month">
    <mt-header title="2020年5月">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">1月</mt-tab-item>
      <mt-tab-item id="2">2月</mt-tab-item>
      <mt-tab-item id="3">3月</mt-tab-item>
      <mt-tab-item id="4">4月</mt-tab-item>
      <mt-tab-item id="5">5月</mt-tab-item>
      <mt-tab-item id="6">6月</mt-tab-item>
      <mt-tab-item id="7">7月</mt-tab-item>
      <mt-tab-item id="8">8月</mt-tab-item>
      <mt-tab-item id="9">9月</mt-tab-item>
      <mt-tab-item id="10">10月</mt-tab-item>
      <mt-tab-item id="11">11月</mt-tab-item>
      <mt-tab-item id="12">12月</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <Monthreport />
      </mt-tab-container-item>
      <mt-tab-container-item id="2"></mt-tab-container-item>
      <mt-tab-container-item id="3"></mt-tab-container-item>
      <mt-tab-container-item id="4"></mt-tab-container-item>
      <mt-tab-container-item id="5"></mt-tab-container-item>
      <mt-tab-container-item id="6"></mt-tab-container-item>
      <mt-tab-container-item id="7"></mt-tab-container-item>
      <mt-tab-container-item id="8"></mt-tab-container-item>
      <mt-tab-container-item id="9"></mt-tab-container-item>
      <mt-tab-container-item id="10"></mt-tab-container-item>
      <mt-tab-container-item id="11"></mt-tab-container-item>
      <mt-tab-container-item id="12"></mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import Monthreport from "../../common/monthreport";
export default {
  name: "month",
  components:{
     Monthreport
  },
  data() {
    return {
      activeName: "second",
      selected: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
<style>
.mint-header {
  height: 80px;
  font-size: 28px;
}
.mint-tab-item-label {
  font-size: 28px;
}
</style>
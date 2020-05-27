<template>
  <div id="app">
    <keep-alive>
     <router-view/>
    </keep-alive>
    <Tabbar v-if="this.$route.meta.tabbarFlag"/>
  </div>
</template>
<script>
import Tabbar from "./common/tabbar"
export default {
  name: "app",
  components: {
    Tabbar
  },
  data(){
    return{
     tabbarFlag:''
    }
  }
};
</script>
<style lang="stylus" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

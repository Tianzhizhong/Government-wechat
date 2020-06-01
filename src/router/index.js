import Vue from 'vue'
import clock from './clock'
import rule from './rule'
import equipment from './equipment'
import statistics from './statistics'
import punchrecord from './punchrecord'
import VueRouter from 'vue-router'
import Month from  './month'
import Holiday from './holiday'
import Leave from './leave'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:"/",
      name:'clock',
      redirect:"/clock"
    },
    clock,
    rule,
    equipment,
    statistics,
    punchrecord,
    Month,
    Holiday,
    Leave,
    {
      path:"**",
      redirect:"/clock"
    }
  ]
})

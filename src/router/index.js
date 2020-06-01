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
import Travel from './travel'
import Set from './set'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:"/",
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
    Travel,
    Set,
    {
      path:"**",
      redirect:"/clock"
    }
  ]
})

import Vue from 'vue'
import clock from './clock'
import rule from './rule'
import equipment from './equipment'
import statistics from './statistics'
import VueRouter from 'vue-router'

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
    {
      path:"**",
      redirect:"/clock"
    }
  ]
})

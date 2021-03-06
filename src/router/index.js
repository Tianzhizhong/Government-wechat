import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
Vue.use(VueRouter)

const routes = [
  {

    path: '/',

    redirect: '/login'

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
     path:'/home',
     name:"Home",
     component:Home
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('userToken');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    meta:{
      isAuth:true
    },

  },
  {
    path:'/register',
    component: () => import('../components/register/register.vue'),
  },
 

  {
    path: '/login',
    component: () => import('../components/login/login.vue'),
  },
  {
    path: '/',
    component: () => import('../components/login/login.vue'),
  }
]

const router = new VueRouter({
  routes
})



router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  if(to.path === '/register') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    alert("非法访问！！请先登录或者注册之后再访问")
    return next('/login')
  }
  next()
})

export default router
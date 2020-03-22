import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior: () => ({x: 0, y: 0})
})

const blankList = ['/trade', '/myorder', '/pay']

router.beforeEach((to, from, next) => {
  if (blankList.indexOf(to.path)!==-1) {
    if (!store.getters.userInfo.token) {
      return next('/login')
    }
  }
  next()
})

export default router
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Pagination from '@/components/Pagination'
import './mock'

Vue.component('Pagination', Pagination)
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.scss'
import 'babel-polyfill'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.use(ElementUI);

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  // if (to.path === '/login') {
  // 	sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path !== '/login') {
  // 	next({ path: '/login' })
  // } else {
  // 	next()
  // }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

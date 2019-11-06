import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import CmpHome from './components/sections/home/CmpHome.vue'
import CmpPath from './components/sections/path/CmpPath.vue'


Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: CmpHome },
  { path: '/itinerario-milano-stazione-duomo-castello-sforzesco', component: CmpPath }
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

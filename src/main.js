import Vue from 'vue';
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import CmpHome from './components/sections/home/CmpHome.vue';
import CmpTour from './components/sections/tour/CmpTour.vue';

Vue.use(Vuex)
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: CmpHome },
  { path: '/tour', component: CmpTour }
];

const router = new VueRouter({
  routes 
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

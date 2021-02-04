import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'


Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  el:'#app',
  render: h => h(App),
}).$mount('#app')

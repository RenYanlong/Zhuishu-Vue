// main.js提供了入口文件，提供了一个给全局注入插件的地方，相当于全局引用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import EasySlider from 'vue-easy-slider'

//组件创建之后需要引入和注册才能在其他的地方使用
// import Head from "./components/Head"
// Vue.component('head', Head)

Vue.config.productionTip = false,
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  EasySlider,
  render: h => h(App)
}).$mount('#app')

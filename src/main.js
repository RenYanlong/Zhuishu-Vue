import Vue from "vue";
import App from "./App.vue";
import animate from 'animate.css';
import router from "./router";
import store from "./store";
import axios from "axios";


(Vue.config.productionTip = false), (Vue.prototype.$axios = axios);

new Vue({
  animate,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

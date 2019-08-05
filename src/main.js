import Vue from "vue";
import App from "./App.vue";
import animate from 'animate.css';
import normalize from 'normalize.css';
import router from "./router";
import store from "./store";
import axios from "axios";

import { List } from 'vant';
import { Rate } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
Vue.use(Rate);
Vue.use(List);

(Vue.config.productionTip = false), (Vue.prototype.$axios = axios);

new Vue({
  normalize,
  animate,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

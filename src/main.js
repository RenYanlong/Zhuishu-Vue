import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  Pagination, 
  Breadcrumb,
  BreadcrumbItem,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

(Vue.config.productionTip = false), (Vue.prototype.$axios = axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

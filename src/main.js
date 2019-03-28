import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueLazyload from 'vue-lazyload';
import VueHead from 'vue-head';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";
import {
  Pagination, 
  Breadcrumb,
  BreadcrumbItem,
  Rate
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Rate);
Vue.use(VueHead);
Vue.use(VueLazyload);

(Vue.config.productionTip = false), (Vue.prototype.$axios = axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

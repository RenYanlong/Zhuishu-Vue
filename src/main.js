// main.js提供了入口文件，提供了一个给全局注入插件的地方，相当于全局引用
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import {
  Pagination,
  Dialog,
  Autocomplete,
  Breadcrumb,
  BreadcrumbItem,
  Rate,
  Carousel,
  CarouselItem,
  Loading,
  MessageBox,
  Message,
  Notification
} from "element-ui";

//组件创建之后需要引入和注册才能在其他的地方使用
// import Head from "./components/Head"
// Vue.component('head', Head)
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Rate);
Vue.use(Carousel);
Vue.use(CarouselItem);


Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

(Vue.config.productionTip = false), (Vue.prototype.$axios = axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

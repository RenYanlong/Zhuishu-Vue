<template>
  <div class="myApp">
    <router-view/>
  </div>
</template>
<script>
import Footer from "./components/public/footer";
import Customer from "@/components/public/customer.vue";
import Head from "./components/public/head";
export default {
  name: "myApp",
  components: {
    Head,
    Customer,
    Footer
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
a:link,
a:hover,
a:active,
a:visited {
  color: @fontColor1;
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  background-color: #f5f5f5;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-rate__icon {
  font-size: 12px !important;
  margin-right: 2px !important;
}
</style>


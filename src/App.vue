<template>
  <div class="myApp">
    <router-view />
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
td,
th,
caption {
  font-size: 14px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
a {
  color: #555;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
img {
  border: none;
  vertical-align: middle;
}
ol,
ul,
li {
  list-style: none;
}
input,
textarea,
select,
button {
  font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
table {
  border-collapse: collapse;
}
html {
  overflow-y: scroll;
}

h3 {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.el-rate__icon {
  font-size: 12px !important;
  margin-right: 2px !important;
}
</style>
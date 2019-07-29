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
  color: #2e2e2e;
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
  color: #2e2e2e;
  text-decoration: none;
}
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
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
section {
  padding: 2vmin 3vmin;
  margin: 2vmin 0 4vmin;
}
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vw;
  line-height: 26px;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  i {
    vertical-align: -2px;
  }
}
</style>
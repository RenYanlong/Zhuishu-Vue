<template>
  <div class="myApp">
    <Head></Head>
    <router-view/>
  </div>
</template>
<script>
import Head from './components/public/head'
export default {
    name:'myApp',
    components:{
      Head
    }
}
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration:none;
}
a:link,a:hover,a:active,a:visited{
  color: @fontColor1;
}
body{
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  background-color: @backgroundColor;
  color: #333;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


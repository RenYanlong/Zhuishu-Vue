<template>
  <div class="myApp">
    <Head></Head>
    <router-view/>
  </div>
</template>
<script>
import Head from './components/public/head'
export default {
    name:'app',
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
  color: #f0bdbd;
}
body{
  background-color: @backgroundColor;
  font-family: PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
}
</style>


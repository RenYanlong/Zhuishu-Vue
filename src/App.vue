<template>
  <div class="myApp">
    <Head></Head>
    <router-view/>
  </div>
</template>

<script>
//注册和导入组件
import Head from './components/public/head'
//实例化
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
.myApp{
  background-color: @backgroundColor;
  font-family: PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;
}
</style>


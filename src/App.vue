<template>
  <div id="app">
    <!-- 实例化作用位置 -->
    <publicHead></publicHead>
    <!-- vur router位置 -->
    <router-view/>
  </div>
</template>

<script>
//注册和导入组件
import publicHead from './components/public/publicHead'

//实例化
export default {
    name:'app',
    components:{
      publicHead
    }
}
</script>



<style>

#app{
  background-color: #fbfaf8;
}

a{
  text-decoration: none;
}

</style>

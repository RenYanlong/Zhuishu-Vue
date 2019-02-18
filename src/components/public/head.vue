<template>
    <!-- head公共组件 -->
   <div class="head">
      <div class='customer'>
          <div class="customerCenter">
              <span>+关注</span>
              <span class="interval">|</span>
              <span>联系客服</span>  
              {{$route.path}}         
          </div>
      </div>
      <div class="search">
          <h1>
            <img src="../../assets/logo.png" alt="">
          </h1>
          <div class="input">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
      </div>
      <div class="nav">
        <el-menu :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                text-color='#f0bdbd'
                background-color="#d82626"
                active-text-color='#fff'  
                router="true"  
                @select="handleSelect">
          <el-menu-item index='/'>首页</el-menu-item>
          <el-menu-item index="category-info">分类</el-menu-item>
          <el-menu-item index="booklist">书单</el-menu-item>
          <el-menu-item index="Leaderboard">排行榜</el-menu-item>
          <el-menu-item index="Client">客户端</el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input:'',
      activeIndex: '/',
    }
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="less" scoped>
.customer{
  background-color: @backgroundColor1;
  .customerCenter{
    width: 1200px;
    margin: 0 auto;
    line-height: 40px;
    text-align: right;
    span{
      display: inline-block;
      color: @fontColor1;
      font-size: @fontSize14;
      font-weight: @fontw3;
    }
    .interval{
      padding: 0 16px;
    }
  }
}
.search{
  margin: 0 auto;
  width: 1200px;
  height: 100px;
  h1{
    display: inline-block;
    margin-top: 20px;
    img{
      width: 175px;
      height: 60px;
    }
  }
  .input{
    float: right;
    width: 260px;
    height: 40px;
    margin-top: 30px;
  }
}
.nav{
  background-color: @backgroundColor3;
  .el-menu-demo{
    width: 1200px;
    margin: 0 auto;
    li{
      width: 20%;
      line-height: 60px;
      text-align: center;
    }
  }
}
</style>
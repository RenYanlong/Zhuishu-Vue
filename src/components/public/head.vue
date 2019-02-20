<template>
  <div class="head">
    <div class='customer'>
        <div class="customerCenter">
          <span>+关注</span>
          <span class="interval">|</span>
          <span>联系客服</span>    
        </div>
      </div>
      <div class="search">
          <h1>
            <img src="../../assets/logo.png">
          </h1>
          <div class="input">
            <input type="text" placeholder="请输入内容">
            <div class="search-but"></div>
          </div>
      </div>
      <div class="nav">
        <el-menu :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                text-color='#f0bdbd'
                background-color="#d82626"
                active-text-color='#fff'  
                :router="true">
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
        activeIndex: this.$route.name,
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
    position: relative;
    float: right;
    margin-top: 30px;
    input{
      box-sizing: border-box;
      width: 260px;
      height: 40px;
      padding: 0px 40px 0px 10px;
      border: 2px solid #d82626;
    }
    input:focus{
      outline: none;
    }
    .search-but{
      display: inline-block;
      position: absolute;
      right: 0px;
      width: 40px;
      height: 40px;
      background-color: #d82626;
      background-image: url('./../../assets/search.png');
      background-repeat: no-repeat;
      background-position: center center;
    }
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
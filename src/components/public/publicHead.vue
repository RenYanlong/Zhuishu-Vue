<template>
    <!-- head公共组件 -->
   <div class="publicHead">
      <div class='headertop'>
          <div class="headertopcenter">
              <div class="contact">
                <div>+关注</div>
                <span>|</span>
                <div>联系客服</div>
              </div>
          </div>
      </div>
      <div class="headercenter">
        <div class="headercentercenter">
          <div class="logo">
            <img src="../../assets/logo.png" alt="">
          </div>
          <div class="search">
            <input type="text" placeholder="请输入书名">
            <button></button>
          </div>
        </div>
      </div>
      <div class="headerbutton">
        <ul class="headerbuttoncenter">
          <li>
            <router-link to="./shouye">首页</router-link>         
          </li>
          <li>
            <router-link to="./xingxua">精选</router-link>         
          </li>
          <li>
            <router-link to="./category-info">分类</router-link>         
          </li>
          <li>
            <router-link to="./booklist">书单</router-link>         
          </li>
          <li>
            <router-link to="./paihang">排行榜</router-link>         
          </li>
          <li>
            <router-link to="./kehuduan">客户端</router-link>         
          </li>
           
        </ul>
      </div>
  </div>
</template>

<script>
  // export default {
  //   name: 'hello'
  // }
</script>
<style scoped>
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
.headertop{
  height: 40px;
  background-color: #f2f2f2;
}
.headertopcenter{
    height: 40px;
    width: 1200px;
    margin: 0 auto;
}
.contact{
  float: right;
}
.contact span{
    margin: 0 10px;
}
.contact div{
    display: inline-block;
    line-height: 40px;
    font-size: 14px;
    color: #666;
}

.headercenter{
  height: 100px;
}

.headercentercenter{
  width: 1200px;
  height: 100px;
  margin: 0 auto;
}
.headercentercenter img{
  width: 175px;
  height: 60px;
}
.headercentercenter .logo{
  float: left;
  padding-top: 20px;
}
.search{
  margin-top: 30px;
  float: right;
  border: 2px solid #cab389;

}

.search input{
  width: 260px;
  height: 40px;
  border: none;
  background-color: #f2f2f2;
  padding-left: 10px;
  color:#666;

}

.search input:focus{
  outline: none;
}
.search button{
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #cab389;
  background-image: url("../../assets/search.png");
  background-repeat: no-repeat;
  background-position:center center;
}
.headerbutton{
  background-color: #d82626;
}
.headerbuttoncenter{
  height: 60px;
  width: 1200px;
  margin: 0 auto;
}
.headerbuttoncenter li,.headerbuttoncenter a{
  list-style: none;
  float: left;
  height: 60px;
  width: 200px;
  font-size: 16px;
  line-height: 60px;
  color: #f0bdbd;
  text-align: center;
}
.headerbuttoncenter li:hover{
  color: #eee;
  background-color: #a70a0a;
}
.h{
  color: #eee;
  background-color: #a70a0a;
}
</style>
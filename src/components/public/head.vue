<template>
  <div class="head">
    <!-- customer -->
    <div class="customer">
      <div class="center">
        <div class="follow" @mouseenter="showguanzhu = true" @mouseleave="showguanzhu = false">
          <span>+关注</span>
          <div class="followinterface" v-show="showguanzhu">
            <div class="ground followpos"></div>
            <div class="cover followpos"></div>
            <div>
              <img src="../../assets/images/fuwuhao.png">
              <p>微信</p>
            </div>
            <div>
              <img src="../../assets/images/weibo.png">
              <p>微博</p>
            </div>
          </div>
        </div>
        <span class="interval">|</span>
        <div
          class="contact"
          @mouseenter="showContactInterface = true"
          @mouseleave="showContactInterface = false"
        >
          <span>联系客服</span>
          <div class="contactInterface" v-show="showContactInterface">
            <div class="ground contactpos"></div>
            <div class="cover contactpos"></div>
            <div>
              <img src="../../assets/images/fuwuhao.png">
              <p>微信联系客服</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- search -->
    <div class="search">
      <router-link :to="{path:'/'}">
        <h1></h1>
      </router-link>
      <div class="input">
        <input type="text" placeholder="请输入内容">
        <div class="search-but"></div>
      </div>
    </div>
    <!-- nav -->
    <div class="nav">
      <div class="center">
        <router-link :to="{path:'/'}" :class="[this.$route.path === '/'? 'clicka':'']">首页</router-link>
        <router-link :to="{path:'/category'}" :class="[this.$route.path === '/category'? 'clicka':'']">分类</router-link>
        <router-link :to="{path:'/booklist'}" :class="[this.$route.path === '/booklist'? 'clicka':'']">书单</router-link>
        <router-link :to="{path:'/ranking'}" :class="[this.$route.path === '/ranking'? 'clicka':'']">排行榜</router-link>
        <router-link :to="{path:'/'}">客户端</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showContactInterface: false,
      showguanzhu: false,
      input: "",
      activeIndex: this.$route.name
    };
  }
};
</script>
<style lang="less" scoped>
.customer {
  background-color: @backgroundColor1;
  .center {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    line-height: 40px;
    text-align: right;
    color: @fontColor1;
    font-size: @fontSize14;
    font-weight: 400;
    .follow,
    .contact {
      display: inline-block;
    }
    .interval {
      padding: 0 16px;
    }
    .followpos {
      position: absolute;
      right: 87px;
    }
    .contactpos {
      position: absolute;
      right: 14px;
    }
    .ground {
      top: -15px;
      border-bottom: 15px solid @backgroundColor3;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
    .cover {
      top: -12px;
      border-bottom: 15px solid @backgroundColor4;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
    .followinterface,
    .contactInterface {
      position: absolute;
      display: flex;
      justify-content: space-around;
      right: 0px;
      z-index: 200;
      padding: 20px 10px;
      margin-top: 13px;
      border: 2px solid @backgroundColor3;
      background-color: @backgroundColor4;
      text-align: center;
      img {
        vertical-align: top;
        width: 110px;
        height: 110px;
        margin: 0 10px;
      }
      p {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
.search {
  margin: 0 auto;
  width: 1200px;
  height: 100px;
  h1 {
    width: 175px;
    height: 60px;
    background-image: url("../../assets/logo.png");
    background-size: 175px 60px;
    display: inline-block;
    margin-top: 20px;
  }
  .input {
    position: relative;
    float: right;
    margin-top: 30px;
    input {
      box-sizing: border-box;
      width: 260px;
      height: 40px;
      padding: 0px 40px 0px 10px;
      border: 2px solid #d82626;
    }
    input:focus {
      outline: none;
    }
    .search-but {
      display: inline-block;
      position: absolute;
      right: 0px;
      width: 40px;
      height: 40px;
      background-color: #d82626;
      background-image: url("./../../assets/search.png");
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
.nav {
  background-color: @backgroundColor3;
  .center {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    a {
      width: 20%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: @fontColor6;
      font-weight: 500;
    }
    a:hover {
      background-color: @backgroundColor6;
      color: @fontColor5;
    }
    .clicka{
      background-color: @backgroundColor6;
      color: @fontColor5;
    }
  }
}
</style>
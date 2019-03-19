<template>
  <div class="head">
    <div class="search">
      <router-link :to="{path:'/'}">
        <h1></h1>
      </router-link>
      <div class="input">
        <input type="text" placeholder="请输入内容">
        <div class="search-but"></div>
      </div>
    </div>
    <div class="nav">
      <div class="center">
        <div class="all" @mouseenter="ishow = false" @mouseleave="ishow = true">作品分类
          <div class="homeLeft" :class="{show:ishow}">
            <category :data="maleData" :sex="sexmale"></category>
            <category :data="femaleData" :sex="sexfemale"></category>
          </div>
        </div>
        <router-link :to="{path:'/'}" :class="[this.$route.path === '/'? 'clicka':'']">首页</router-link>
        <router-link
          :to="{path:'/category'}"
          :class="[this.$route.path === '/category'? 'clicka':'']"
        >全部作品</router-link>
        <router-link
          :to="{path:'/booklist'}"
          :class="[this.$route.path === '/booklist'? 'clicka':'']"
        >书单</router-link>
        <router-link
          :to="{path:'/ranking'}"
          :class="[this.$route.path === '/ranking'? 'clicka':'']"
        >排行榜</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import category from "../public/category";
export default {
  data() {
    return {
      ishow:true,
      maleData: "",
      femaleData: "",
      input: "",
      isguding1: false,
      sexmale: {
        Egender: "male",
        CName: "男生"
      },
      sexfemale: {
        Egender: "female",
        CName: "女生"
      }
    };
  },
  components: {
    category
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        this.isguding1 = true;
      } else {
        this.isguding1 = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$axios.get("https://novel.juhe.im/categories").then(response => {
      this.maleData = response.data.male.slice(0, 12);
      this.femaleData = response.data.female.slice(0, 12);
    });
  }
};
</script>
<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  h1 {
    width: 175px;
    height: 60px;
    margin: 15px 0;
    background-image: url("../../assets/logo.png");
    background-size: 175px 60px;
  }
  .input {
    position: relative;
    input {
      box-sizing: border-box;
      width: 260px;
      height: 40px;
      padding: 0px 10px;
      border: 1px solid #dbdbdb;
      outline: none;
    }
    .search-but {
      display: inline-block;
      position: absolute;
      right: 0px;
      width: 40px;
      height: 40px;
      background-color: #ed4259;
      background-image: url("./../../assets/search.png");
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
.nav {
  background-color: #3e3d43;
  .center {
    .all {
      position: relative;
      width: 250px;
      box-sizing: border-box;
      background-color: #313035;
      line-height: 40px;
      padding-left: 15px;
      .homeLeft {
        position: absolute;
        z-index: 99;
        width: 250px;
        left:0;
      }
      .show{
        display: none;
      }
    }
    box-sizing: border-box;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    a:link,
    a:hover,
    a:active,
    a:visited {
      color: #fff;
    }
    a {
      padding: 0 60px;
      line-height: 40px;
      text-align: center;
      font-weight: 500;
    }
    a:hover {
      background-color: #313035;
    }
    .clicka {
      background-color: #ed4259;
    }
  }
}
</style>
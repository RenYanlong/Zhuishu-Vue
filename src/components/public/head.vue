<template>
  <div class="head">
    <div class="search">
      <router-link :to="{path:'/'}">
        <h1></h1>
      </router-link>
      <div class="input">
        <input type="text" placeholder="冥冥之中喜欢你" v-model="input">
        <router-link :to="{path:'/search',query:{keyword:input}}">
          <div class="search-but" @click="input ? '':input = `冥冥之中喜欢你` "></div>
        </router-link>
      </div>
      <div class="bookshelf">我的书架</div>
    </div>
    <div class="nav">
      <div class="center">
        <div class="all" @mouseenter="ishow = false" @mouseleave="ishow = true">
          <span></span>
          作品分类
          <div class="homeLeft" :class="{show:ishow}">
            <div class="sanjiao"></div>
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
      input: "",
      ishow: true,
      maleData: "",
      femaleData: "",
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
    sousuobut(bookname) {
      if (this.input) {
        console.log(this.input);
      } else {
        this.input = bookname;
      }
    },
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
.head {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  border-bottom: 1px solid #dbdbdb;
  h1 {
    width: 175px;
    height: 60px;
    margin: 20px 0;
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
  .bookshelf {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
  }
}
.nav {
  color: #333;
  .center {
    .all {
      position: relative;
      box-sizing: border-box;
      line-height: 64px;
      padding-right: 60px;
      span {
        display: inline-block;
      }
      .homeLeft {
        position: absolute;
        z-index: 99;
        width: 250px;
        left: 0;
        top: 64px;
        .sanjiao {
          position: absolute;
          border-bottom: 10px solid #f5f5f5;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          top: -10px;
          left: 20px;
        }
      }
      .show {
        display: none;
      }
    }
    box-sizing: border-box;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
      padding-right: 60px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      color: #333;
    }
    a:hover {
      color: #ed4259;
    }
    .clicka {
      color: #ed4259;
    }
  }
}
</style>
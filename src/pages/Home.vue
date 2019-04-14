<template>
  <div class="home">
    <!-- head -->
    <van-nav-bar
      title="追书神器"
      right-text="书架"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- swiper -->
    <van-swipe class="swiper" :autoplay="5000" indicator-color="white" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in bannerInfo" :key="index">
        <router-link :to="{path:'/book',query:{id:item.link}}">
          <img :src="item.img">
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索 -->
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词"/>
    </form>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 热门推荐 -->
    <div class="popular">
      <h4>热门推荐</h4>
      <div class="main">
        <Recommend :info="item" v-for="(item,index) in finish" :key="index"></Recommend>
      </div>
    </div>

    <div class="rank">
      <chart :bookData="potential"></chart>
      <chart :bookData="qidian"></chart>
      <chart :bookData="qidianph"></chart>
      <chart :bookData="vip"></chart>
    </div>
  </div>
</template>

<script>
import HotWords from "./../components/home/hotwords";
import chart from "@/components/home/charts.vue";
import Recommend from "../components/home/recommend";
import Nav from "@/components/home/nav.vue";
export default {
  data() {
    return {
      remen: "",
      name: "home",
      maleData: "",
      femaleData: "",
      pressData: "",
      bannerInfo: "",
      hotBooks: "",
      potential: "",
      qidian: "",
      qidianph: "",
      vip: "",
      finish: "",
      nvrs: "",
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
  head: {
    title: {
      inner: "看网文，就用追书神器"
    }
  },
  components: {
    HotWords,
    chart,
    Recommend,
    Nav
  },

  mounted() {
    //请求banner数据
    this.$axios.get("https://www.zhuishushenqi.com/spread").then(spread => {
      this.bannerInfo = spread.data.data;
    });
    this.$axios.get("https://novel.juhe.im/hot-books").then(hot => {
      this.hotBooks = hot.data.newHotWords.slice(0, 6);
    });
    //潜力榜
    this.$axios
      .get("https://novel.juhe.im/rank/54d42e72d9de23382e6877fb")
      .then(pot => {
        this.potential = pot.data.ranking;
      });
    //起点榜
    this.$axios
      .get("https://novel.juhe.im/rank/54d4306c321052167dfb75e4")
      .then(qd => {
        this.qidian = qd.data.ranking;
      });
    //票红榜
    this.$axios
      .get("https://novel.juhe.im/rank/550b836229cd462830ff4d1d")
      .then(ph => {
        this.qidianph = ph.data.ranking;
      });
    //vip
    this.$axios
      .get("https://novel.juhe.im/rank/57eb86f0ef9e5a8f20543d7d")
      .then(vipp => {
        this.vip = vipp.data.ranking;
      });
    //
    this.$axios
      .get("https://novel.juhe.im/rank/5a684515fc84c2b8efaa9875")
      .then(rs => {
        this.nvrs = rs.data.ranking;
      });
    //男生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eea0b731ade4d6c509493")
      .then(ov => {
        this.finish = ov.data.ranking.books.slice(0, 10);
      });
  }
};
</script>

<style lang="less" scoped>
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
}

.popular {
  box-sizing: border-box;
  background-color: #fff;
  padding: 5px;
  h4{
    height: 40px;
    line-height: 40px;
  }
  .main {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
  }
}
.rank {
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 20px;
  div {
    width: 250px;
    padding: 0 10px;
  }
}
</style>
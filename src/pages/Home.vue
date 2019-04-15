<template>
  <div class="home">
    <!-- head -->
    <van-nav-bar
      title="追书神器"
      right-text="书架"
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
      <van-search  placeholder="请输入搜索关键词"/>
    </form>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 热门推荐 -->
    <div class="popular">
      <Recommend :info="finish">
        <h4 slot="head">热门推荐</h4>
      </Recommend>
    </div>
    <div class="charts">
      <h4>排行榜</h4>
      <van-tabs type="card" class="tabs">
        <van-tab title="潜力榜">
          <Recommend :info="potential.books"></Recommend>
        </van-tab>
        <van-tab title="票红榜">
          <Recommend :info="qidianph.books"></Recommend>
        </van-tab>
        <van-tab title="起点榜">
          <Recommend :info="qidian.books"></Recommend>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import HotWords from "./../components/home/hotwords";
import Recommend from "../components/home/recommend";
import Nav from "@/components/home/nav.vue";
export default {
  data() {
    return {
      bannerInfo: "",
      hotBooks: "",
      potential: "",
      qidian: "",
      qidianph: "",
      finish: ""
    };
  },
  components: {
    HotWords,
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
  background-color: #fff;
  padding: 5px;
  h4 {
    margin: 10px 0;
  }
  .main {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
}
.charts {
  background-color: #fff;
  padding: 5px;
  h4 {
    margin: 10px 0;
  }
  .tabs {
    padding-top: 40px;
  }
}
</style>
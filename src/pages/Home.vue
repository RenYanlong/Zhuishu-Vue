<template>
  <div class="home">
    <div class="bannerhot">
      <banner :bannerData="bannerInfo"></banner>
      <HotWords :hotwordsData="hotBooks"></HotWords>
    </div>
    <div class="popular">
      <p class="title">热门推荐</p>
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
import banner from "@/components/home/banner.vue";
import Recommend from "../components/home/recommend";

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
  components: {
    HotWords,
    chart,
    banner,
    Recommend
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
        this.finish = ov.data.ranking.books.slice(0, 12);
      });
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 1000px;
  margin: 0 auto;
  margin-top: 15px;
  .bannerhot {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 20px;
    .banner {
      width: 780px;
    }
  }
}
.rank {
  display: flex;
  justify-content: space-between;
  width: 1000px;
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

.popular {
  width: 1000px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 20px;
  .title {
    font-size: 20px;
    line-height: 33px;
    height: 33px;
    font-weight: 600;
    border-bottom: 1px solid #dbdbdb;
  }
  .main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 5px 0;
  }
}
</style>
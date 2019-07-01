<template>
  <div class="home">
    <!-- head -->
    <Head></Head>
    <!-- 热门推荐 -->
    <div class="popular">
      <h3 slot="head">热门推荐</h3>
      <div class="hotsbooks">
        <ul>
          <li v-for="(item, index) in finish" :key="index">
            <img :src="`http://statics.zhuishushenqi.com${item.cover}`" />
            <h4>{{item.title}}</h4>
            <p>{{item.minorCate}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 本周最热书单 -->
    <div class="hotBooklist">
      <h3>本周最热书单</h3>
      <div class="hotbooklists">
        <ul>
          <li v-for="(item, index) in bookLists" :key="index">
            <img :src="`http://statics.zhuishushenqi.com${item.cover}`" />
            <h4>{{item.title}}</h4>
            <p>{{item.minorCate}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/home/head";
import HotWords from "@/components/home/hotwords";
import Nav from "@/components/home/nav.vue";
export default {
  data() {
    return {
      bannerInfo: "",
      hotBooks: "",
      qidian: "",
      finish: "",
      bookLists: ""
    };
  },
  components: {
    HotWords,
    Nav,
    Head
  },
  mounted() {
    this.$axios.get("https://novel.juhe.im/hot-books").then(hot => {
      this.hotBooks = hot.data.newHotWords.slice(0, 7);
    });
    //热门书单
    this.$axios
      .get(
        "https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=1"
      )
      .then(hotbooklist => {
        this.bookLists = hotbooklist.data.bookLists;
      });
    //男生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eea0b731ade4d6c509493")
      .then(ov => {
        this.finish = ov.data.ranking.books.slice(0, 7);
      });
  }
};
</script>

<style lang="less" scoped>
.swiper {
  margin: 10px 0;
}
.popular,
.qidianlist,
.nav,
.hotBooklist {
  background-color: #fff;
  padding: 1vh 2vw;
}
h3 {
  height: 8vh;
  line-height: 8vh;
}
.popular,
.hotBooklist {
  ul {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      width: 120px;
      list-style: none;
      margin-right: 1vw;
    }
  }
  p {
    font-size: 12px;
  }
  img {
    width: 120px;
    height: 160px;
  }
  h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
<template>
  <div class="home">
    <!-- head -->
    <Head></Head>
    <!-- 热门推荐 -->
    <div class="popular">
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
      this.hotBooks = hot.data.newHotWords.slice(0, 9);
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
        this.finish = ov.data.ranking.books.slice(0, 9);
      });
  }
};
</script>

<style lang="less" scoped>
.popular,
.qidianlist,
.nav,
.hotBooklist {
  background-color: #fff;
  padding: 1vh 2vw;
}
.popular,
.hotBooklist {
  h3{
    margin-bottom: 1vh;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      list-style: none;
      margin-right: 2vmin;
    }
  }
  p {
    font-size: 12px;
  }
  img {
    width: 28vmin;
    height: 40vmin;
  }
  h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
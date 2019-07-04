<template>
<!-- 首页 -->
  <div class="home">
    <!-- head -->
    <Head></Head>
    <!-- 热门图书 -->
    <div class="popular">
      <ul>
        <li v-for="(item, index) in finish" :key="index">
          <img :src="`http://statics.zhuishushenqi.com${item.cover}`" />
          <p class="bookname">{{item.title}}</p>
          <p>{{item.minorCate}}</p>
        </li>
      </ul>
    </div>

    <!-- 导航 -->
    <Nav></Nav>

    <!-- 本周最热书单 -->
    <section class="hotBooklist">
      <h3>本周最热书单</h3>
      <div class="hotbooklists">
        <ul>
          <li v-for="(item, index) in bookLists" :key="index">
            <Booklist :book="item"></Booklist>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Head from "@/components/home/head";
import Nav from "@/components/home/nav.vue";
import Booklist from "@/components/public/booklist.vue";

export default {
  data() {
    return {
      finish: "",
      bookLists: ""
    };
  },
  components: {
    Nav,
    Head,
    Booklist
  },
  mounted() {
    //热门书单
    this.$axios
      .get(
        "https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=1"
      )
      .then(hotbooklist => {
        this.bookLists = hotbooklist.data.bookLists.slice(0, 4);
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
.popular {
  
  padding: 1vmin 3vmin;
  .bookname{
    font-size: 14px;
    font-weight: 600;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      width: 28vmin;
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
}
</style>
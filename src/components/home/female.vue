<template>
  <div class="female">
    <!-- 推荐 -->
    <section class="recommend_2">
      <div class="title">
        <h2>重磅推荐</h2>
        <p>
          更多
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in hot1" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
    <!-- 热门搜索 -->
    <section class="recommend">
      <div class="title">
        <h2>女生热门</h2>
        <p>
          更多
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in hotsearch" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </section>
    <!-- 最爱榜单 -->
    <section class="toplist">
      <div class="title">
        <h2>最爱榜单</h2>
        <p>
          更多
        </p>
      </div>
      <ul>
        <li>
          <Toplist :info="over1">完结榜</Toplist>
        </li>
        <li>
          <Toplist :info="hot1">热搜榜</Toplist>
        </li>
      </ul>
    </section>
    <section class="recommend_2">
      <div class="title">
        <h2>重磅推荐</h2>
        <p>
          更多
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in fantastic" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
    <section class="recommend">
      <div class="title">
        <h2>重磅推荐</h2>
        <p>
          更多
        </p>
      </div>
      <ul>
        <li v-for="(item, index) in over" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Book from "@/components/public/Book.vue";
import Book_1 from "@/components/public/Book_1.vue";
import Toplist from "@/components/public/Toplist.vue";

export default {
  data() {
    return {
      hot1: "",
      fantastic: "",
      over: "",
      hotsearch: "",
      over1: ""
    };
  },
  components: {
    Book,
    Book_1,
    Toplist
  },
  mounted() {
    //热门推荐
    this.$axios
      .get("https://novel.juhe.im/rank/54d43437d47d13ff21cad58b")
      .then(ov => {
        this.hot1 = ov.data.ranking.books.slice(0, 4);
      });
    // 玄幻世界
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=female&type=hot&major=现代言情&minor=&start=0&limit=20"
      )
      .then(ov => {
        this.fantastic = ov.data.books.slice(0, 3);
      });
    // 完本精选
    this.$axios
      .get("https://novel.juhe.im/rank/564eeae6c3345baa6bf06e38")
      .then(ov => {
        this.over = ov.data.ranking.books.slice(0, 3);
      });
    // 热搜榜
    this.$axios
      .get("https://novel.juhe.im/rank/5a684515fc84c2b8efaa9875")
      .then(ov => {
        this.hotsearch = ov.data.ranking.books.slice(0, 6);
      });
    this.$axios
      .get("https://novel.juhe.im/rank/564eb8a9cf77e9b25056162d")
      .then(ov => {
        this.over1 = ov.data.ranking.books;
      });
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
.toplist,
.recommend_2 {
  ul {
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      margin-right: 3vw;
      font-size: 0;
    }
  }
}
</style>



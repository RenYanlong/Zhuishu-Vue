<template>
  <div class="female">
    <!-- 推荐 -->
    <div class="recommend">
      <h2>重磅推荐</h2>
      <ul>
        <li v-for="(item, index) in hot1" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </div>
    <section class="recommend_2">
      <ul>
        <li v-for="(item, index) in hot2" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
    <section class="recommend_2">
      <h2>现代言情</h2>
      <ul>
        <li v-for="(item, index) in fantastic" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
    <section class="recommend_2">
      <h2>完本精选</h2>
      <ul>
        <li v-for="(item, index) in over" :key="index">
          <Book :bookinfo="item"></Book>
        </li>
      </ul>
    </section>
    <div class="recommend">
      <h2>热搜榜</h2>
      <ul>
        <li v-for="(item, index) in hotsearch" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Book from "@/components/public/Book.vue";
import Book_1 from "@/components/public/Book_1.vue";

export default {
  data() {
    return {
      hot1: "",
      hot2: "",
      fantastic: "",
      over: "",
      hotsearch: ""
    };
  },
  components: {
    Book,
    Book_1
  },
  mounted() {
    //热门推荐
    this.$axios
      .get("https://novel.juhe.im/rank/54d43437d47d13ff21cad58b")
      .then(ov => {
        this.hot1 = ov.data.ranking.books.slice(0, 3);
        this.hot2 = ov.data.ranking.books.slice(3, 6);
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
        this.hotsearch = ov.data.ranking.books.slice(0, 3);
      });
  }
};
</script>

<style lang="less" scoped>
.female {
  padding: 2vmin 3vmin;
}
section {
  margin: 2vmin 0 4vmin;
  border-bottom: 1px solid #ededed;
}
h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 2vmin;
}
.recommend {
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
}
</style>



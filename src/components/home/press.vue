<template>
  <div class="press">
    <!-- 推荐 -->
    <section class="recommend_2">
      <div class="title">
        <h2>重磅推荐</h2>
        <p>更多</p>
      </div>
      <ul>
        <li v-for="(item, index) in hot1" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </section>
    <section class="recommend">
      <div class="title">
        <h2>人文社科</h2>
        <p>更多</p>
      </div>
      <ul>
        <li v-for="(item, index) in hot2" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Book from "@/components/public/Book.vue";
import Book_1 from "@/components/public/Book_1.vue";

export default {
  data() {
    return {
      hot1: "",
      hot2: ""
    };
  },
  components: {
    Book,
    Book_1
  },
  mounted() {
    //热门推荐
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=出版小说&minor=&start=0&limit=20"
      )
      .then(ov => {
        this.hot1 = ov.data.books.slice(0, 6);
      });
    //生活时尚
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=人文社科&minor=&start=0&limit=20"
      )
      .then(ov => {
        this.hot2 = ov.data.books.slice(0, 6);
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



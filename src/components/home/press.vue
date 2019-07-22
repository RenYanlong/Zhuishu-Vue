<template>
  <div class="press">
    <!-- 推荐 -->
    <div class="recommend">
      <h2>重磅推荐</h2>
      <ul>
        <li v-for="(item, index) in hot1" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </div>
    <div class="recommend">
      <h2>人文社科</h2>
      <ul>
        <li v-for="(item, index) in hot2" :key="index">
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
    };
  },
  components: {
    Book,
    Book_1
  },
  mounted() {
    //热门推荐
    this.$axios
      .get("https://novel.juhe.im/category-info?gender=press&type=hot&major=出版小说&minor=&start=0&limit=20")
      .then(ov => {
        this.hot1 = ov.data.books.slice(0, 6);
      }); 
      //生活时尚
    this.$axios
      .get("https://novel.juhe.im/category-info?gender=press&type=hot&major=人文社科&minor=&start=0&limit=20")
      .then(ov => {
        this.hot2 = ov.data.books.slice(0, 6);
      }); 
  }
};
</script>

<style lang="less" scoped>
.press {
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
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
</style>



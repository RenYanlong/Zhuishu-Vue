<template>
  <div class="catemain">
    <van-nav-bar :title="this.major" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <div class="main">
      <Book :bookinfo="item" v-for="(item, index) in books" :key="index"></Book>
    </div>
  </div>
</template>

<script>
import Book from "@/components/category/book.vue";
export default {
  components: {
    Book
  },
  data() {
    return {
      gender: this.$route.query.gender,
      major: this.$route.query.major,
      minor: this.$route.query.minor ? this.$route.query.minor : "",
      type: "hot",
      books: "",
      start: 0
    };
  },
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/category-info?gender=${this.gender}&type=${
          this.type
        }&major=${this.major}&minor=${this.minor}&start=0&limit=20`
      )
      .then(books => {
        this.books = books.data.books;
      });
  }
};
</script>

<style lang="less" scoped>
</style>

<template>
  <div class="catemain">
    <Head>分类</Head>
    <div class="main" >
      <Book :bookinfo="item" v-for="(item, index) in books" :key="index"></Book>
    </div>
  </div>
</template>

<script>
import Head from "@/components/public/head";
import Book from "@/components/category/book.vue";
export default {
  components: {
    Book,
    Head
  },
  data() {
    return {
      gender: this.$route.query.gender,
      major: this.$route.query.major,
      books: ""
    };
  },
  methods: {
    onScroll(e){
      console.log(111)
    }
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/category-info?gender=${
          this.gender
        }&type=hot&major=${this.major}&minor=&start=0&limit=20`
      )
      .then(books => {
        this.books = books.data.books;
      });
  }
};
</script>

<style lang="less" scoped>
.catemain {
  display: flex;
  flex-flow: column nowrap;
}
.main {
  margin-top: 6vh;
}
</style>

<template>
  <div class="rankmain">
    <Head>排行榜</Head>
    <div class="main">
      <Book :bookinfo="item" v-for="(item, index) in info.books" :key="index"></Book>
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
      id:this.$route.query.id,
      info:''
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/rank/${this.id}`
      )
      .then(books => {
        this.info = books.data.ranking;
      });
  }
};
</script>

<style lang="less" scoped>
.rankmain {
  display: flex;
  flex-flow: column nowrap;
}
.main {
  background-color: #fff;
  margin-top: 8vh;
  padding:0 2vw;
}
</style>

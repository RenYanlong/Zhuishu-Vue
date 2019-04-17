<template>
  <div class="rankmain">
    <Head>分类</Head>
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
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
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
</style>

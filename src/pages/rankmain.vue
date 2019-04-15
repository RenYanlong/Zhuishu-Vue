<template>
  <div class="rankmain">
    <van-nav-bar :title="info.title" left-text="返回" left-arrow @click-left="onClickLeft" fixed='true'>
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <div class="main">
      <Book :bookinfo="item" v-for="(item, index) in info.books" :key="index"></Book>
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
.main{
  margin-top:46px;
}
</style>

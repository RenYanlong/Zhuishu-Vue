<template>
  <div class="search">
    <p>共搜索到与{{word}}相关{{sousuojieguo.length}}本书籍</p>
    <div v-if="sousuojieguo.length > 0">
      <div v-for="(item,index) in sousuojieguo" :key="index">
        <Book :bookData="item"></Book>
      </div>
    </div>
    <div class="none" v-else>
      <span></span>
      <p>没有找到符合条件的书</p>
    </div>
  </div>
</template>

<script>
import Book from "./../components/rank/book";
export default {
  data() {
    return {
      word: this.$route.query.keyword,
      sousuojieguo: ""
    };
  },
  components: {
    Book
  },
  watch: {
    $route(){
      this.word = this.$route.query.keyword;
      this.$axios
      .get(`https://novel.juhe.im/search?keyword=${this.word}`)
      .then(word => {
        this.sousuojieguo = word.data.books;
      });
    }
  },
  mounted() {
    this.$axios
      .get(`https://novel.juhe.im/search?keyword=${this.word}`)
      .then(word => {
        this.sousuojieguo = word.data.books;
      });
  }
};
</script>

<style lang="less" scoped>
.search {
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
}
.none {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  span {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-image: url("../../src/assets/images/icon--.png");
    background-repeat: no-repeat;
  }
}
</style>

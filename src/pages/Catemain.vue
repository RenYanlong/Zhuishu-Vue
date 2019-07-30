<template>
<!-- 分类详情页面 -->
  <div class="catemain">
    <Head>{{major}}</Head>
    <div class="main">
      <div class="minor">
        <span v-for="(item, index) in this.minorlist" :key="index">{{item}}</span>
      </div>
      <Book :bookinfo="item" v-for="(item, index) in books" :key="index"></Book>
    </div>
  </div>
</template>

<script>
import Head from "@/components/public/head";
import Book from "@/components/public/Book.vue";
export default {
  components: {
    Book,
    Head
  },
  data() {
    return {
      gender: this.$route.query.gender,
      major: this.$route.query.major,
      minor: this.$route.query.minor ? this.$route.query.minor : "",
      minorlist: "",
      allgender: "",
      books: ""
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/category-info?gender=${this.gender}&type=hot&major=${this.major}&minor=&start=0&limit=20`
      )
      .then(books => {
        this.books = books.data.books;
      });
    if (localStorage.subb) {
      this.allgender = JSON.parse(localStorage.getItem("subb")).data[
        this.gender
      ];
      for (let i = 0; i < this.allgender.length; i++) {
        if (this.allgender[i].major == this.major) {
          this.minorlist = this.allgender[i].mins;
        }
      }
    } else {
      // 没有获取到本地数据是请求网络数据分类
    }
  }
};
</script>

<style lang="scss" scoped>
.catemain {
  display: flex;
  flex-flow: column nowrap;
}
.main {
  padding: 8vh 3vmin 0;
  
  .minor{
    display: flex;
    flex-flow: row wrap;
    span{
      width: 25%;
      text-align: left;
      font-size: 14px;
      height: 8vmin;
      line-height: 8vmin;
    }
  }
}
</style>

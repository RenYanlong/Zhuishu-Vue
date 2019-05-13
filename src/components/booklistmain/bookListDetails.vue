<template>
  <div class="bookListDetails" v-if="bookListInfo">
    <Head>书单</Head>
    <BookListTitle :info="bookListInfo"></BookListTitle>
    <div class="main">
      <ul>
        <li v-for="(list,index) in bookListInfo.books" :key="index">
          <router-link :to="{path:'/book',query:{id:list.book._id}}">
            <Book :bookInfo="list"></Book>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/head";
import BookListTitle from "@/components/booklistmain/bookListTitle.vue";
import Book from "@/components/booklistmain/book.vue";
export default {
  data() {
    return {
      currentPage: 1,
      pagesize: 20,
      bookListInfo: "",
      bookId: this.$route.query.id
    };
  },
  components: {
    BookListTitle,
    Book,
    Head
  },
  watch: {
    $route() {
      this.bookId = this.$route.query.id;
    }
  },
  mounted() {
    this.$axios
      .get(`https://novel.juhe.im/booklists/${this.bookId}`)
      .then(response => {
        this.bookListInfo = response.data.bookList;
      });
  }
};
</script>
<style lang='less' scoped>
.bookListDetails {
  display: flex;
  flex-flow: column nowrap;
}
.title {
  margin-top: 8vh;
  padding-left: 6vw;
}
.main {
  background-color: #fff;
  padding-left: 6vw;
}
</style>
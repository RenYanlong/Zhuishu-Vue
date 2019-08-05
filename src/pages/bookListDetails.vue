<template>
  <!-- 书单详情页面 -->
  <div class="bookListDetails" v-if="bookListInfo">
    <Head>书单详情</Head>
    <div class="details">
      <BookListTitle :info="bookListInfo"></BookListTitle>
      <div class="books">
        <ul>
          <li v-for="(list,index) in bookListInfo.books" :key="index">
            <router-link :to="{path:'/book',query:{id:list.book._id}}">
              <Book :bookinfo="list"></Book>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/Head";
import BookListTitle from "@/components/BookListDetails/BookListTitle";
import Book from "@/components/BookListDetails/Book";
export default {
  data() {
    return {
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
<style lang='scss' scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.details{
  padding-top: pxtovw(55);
}
.books{
  margin: 0;
  padding: 0;
  ul{
    margin: 0;
    padding: 0;
    li{
      list-style: none;
    }
  }
}
</style>
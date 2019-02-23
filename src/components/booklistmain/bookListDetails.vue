<template>
  <div class="bookListDetails">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/booklist' }">书单</el-breadcrumb-item>
      <el-breadcrumb-item>{{bookListInfo.bookList.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="main">
      <div class="center">
        <BookListTitle :bookListinfo="bookListInfo"></BookListTitle>
        <div class="books" v-for="list in bookListInfo.bookList.books" :key="list._id">
          <router-link :to="{path:'/book',query:{id:list.book._id}}">
            <Book :bookInfo="list"></Book>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookListTitle from "@/components/booklistmain/bookListTitle.vue";
import Book from "@/components/booklistmain/book.vue";
export default {
  data() {
    return {
      bookListInfo: "",
      bookId: this.$route.query.id
    };
  },
  components: {
    BookListTitle,
    Book
  },
  watch: {
    $route() {
      this.bookId = this.$route.query.id;
    }
  },
  mounted() {
    this.$axios
      .get("https://novel.juhe.im/booklists/" + this.bookId)
      .then(response => {
        this.bookListInfo = response.data;
      });
  }
};
</script>
<style lang='less' scoped>
.breadcrumb {
  width: 1200px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.main {
  width: 1200px;
  margin: 0 auto;
  background-color: @backgroundColor4;
}
.center {
  width: 930px;
  margin: 0 auto;
}
</style>
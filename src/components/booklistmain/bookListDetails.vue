<template>
  <div class="bookListDetails" v-if="bookListInfo">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/booklist' }">书单</el-breadcrumb-item>
      <el-breadcrumb-item>{{bookListInfo.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="main">
      <div class="center" v-if="bookListInfo">
        <BookListTitle :info="bookListInfo"></BookListTitle>
        <div
          class="books"
          v-for="(list,index) in bookListInfo.books.slice(
        (currentPage - 1) * pagesize,
        currentPage * pagesize
      )"
          :key="index"
        >
          <router-link :to="{path:'/book',query:{id:list.book._id}}">
            <Book :bookInfo="list"></Book>
          </router-link>
        </div>
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="20"
          layout="prev, pager, next, jumper"
          :total="bookListInfo.books.length"
          class="pag"
        ></el-pagination>
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
      currentPage: 1,
      pagesize: 20,
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
      .get(`https://novel.juhe.im/booklists/${this.bookId}`)
      .then(response => {
        this.bookListInfo = response.data.bookList;
      });
  }
};
</script>
<style lang='less' scoped>
.breadcrumb {
  width: 1000px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.main {
  width: 1000px;
  margin: 0 auto;
  background-color: @backgroundColor4;
  border-radius: 6px;
}
.center {
  width: 930px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  align-items: center;
  .pag{
    align-self: flex-end;
    padding: 30px 0;
  }
}
</style>
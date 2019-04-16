<template>
  <div class="bookListDetails" v-if="bookListInfo">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>

    <div class="main">
      <div class="center" v-if="bookListInfo">
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
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
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
  height: 60px;
  line-height: 60px;
}
.main {
  background-color: #fff;
  padding: 0 10px;
}
</style>
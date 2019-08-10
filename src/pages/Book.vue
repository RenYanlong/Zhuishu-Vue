<template>
  <!-- 书籍详情 -->
  <div class="book">
    <!-- 置顶头部 -->
    <Head>图书</Head>
    <!-- 页面主体 -->
    <div class="main">
      <!-- 图书详情头部 -->
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <!-- 评价 -->
      <Mark :bookinfo="bookInfo"></Mark>
      <!-- 简介 -->
      <Introduce :bookinfo="bookInfo"></Introduce>
      <!-- 目录 -->
      <Catalogue :bookinfo="bookInfo"></Catalogue>
      <!-- 评论 -->
      <Comment1 :info="comment"></Comment1>
      <!-- 作者的其他作品 -->
      <section class="love">
        <h3>相关书籍</h3>
        <ul>
          <li v-for="(item, index) in loveother" :key="index">
            <Book_1 :bookinfo="item"></Book_1>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/Head";
import BookTitle from "@/components/Book/BookTitle";
import Book_1 from "@/components/public/Book_1";
import Mark from "@/components/Book/mark";
import Introduce from "@/components/Book/introduce";
import Catalogue from "@/components/Book/catalogue";
import Comment1 from "@/components/Book/comment";

export default {
  components: {
    BookTitle,
    Head,
    Book_1,
    Mark,
    Introduce,
    Catalogue,
    Comment1
  },
  data() {
    return {
      bookId: this.$route.query.id,
      bookInfo: "",
      loveother: "",
      comment: ""
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.bookId = this.$route.query.id;
    this.$axios
      .get(`https://novel.juhe.im/book-info/${this.bookId}`)
      .then(info => {
        this.bookInfo = info.data;
      });
    // 书评
    this.$axios
      .get(`https://novel.juhe.im/recommend/${this.bookId}`)
      .then(shorts => {
        this.loveother = shorts.data.books;
      });
    next();
  },
  watch: {
    $route() {
      this.bookId = this.$route.query.id;
      this.$axios
        .get(`https://novel.juhe.im/book-info/${this.bookId}`)
        .then(info => {
          this.bookInfo = info.data;
        });
      // 书评
      this.$axios
        .get(`https://novel.juhe.im/recommend/${this.bookId}`)
        .then(shorts => {
          this.loveother = shorts.data.books;
        });
    }
  },
  mounted() {
    // 书籍详情
    this.$axios
      .get(`https://novel.juhe.im/book-info/${this.bookId}`)
      .then(info => {
        this.bookInfo = info.data;
      });
    // 相关书籍
    this.$axios
      .get(`https://novel.juhe.im/recommend/${this.bookId}`)
      .then(shorts => {
        this.loveother = shorts.data.books;
      });

    //comment
    this.$axios
      .get(`https://novel.juhe.im/book/short-reviews?book=${this.bookId}`)
      .then(info => {
        this.comment = info.data.docs;
      });
  }
};
</script>
<style lang='scss' scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}

.main {
  padding-top: pxtovw(15);

  .tags {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      font-size: pxtovw(12);
      font-weight: 400;
    }
    p {
      font-size: pxtovw(12);
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      span {
        padding: 0 pxtovw(10);
        line-height: pxtovw(20);
        background-color: #9dc8c860;
        border-radius: pxtovw(10);
        margin-left: pxtovw(10);
      }
    }
  }

  .love {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    h3 {
      font-size: pxtovw(16);
      font-weight: 400;
      margin-bottom: pxtovw(10);
    }
    ul {
      display: flex;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      li {
        list-style: none;
        margin-right: pxtovw(10);
      }
    }
  }
}
</style>
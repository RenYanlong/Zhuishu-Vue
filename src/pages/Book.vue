<template>
  <!-- 书籍详情 -->
  <div class="book">
    <!-- 置顶头部 -->
    <Head>图书</Head>
    <!-- 页面主体 -->
    <div class="main">
      <!-- 图书详情头部 -->
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <!-- 简介 -->
      <section class="introduce">
        <h3>简介</h3>
        <p>{{bookInfo.longIntro}}</p>
      </section>
      <!-- 目录 -->
      <section class="catalogue">
        <h3>目录</h3>
        <p>{{bookInfo.lastChapter}}</p>
        <i></i>
      </section>
      <!-- 评论 -->
      <section class="comment">
        <h3>评论</h3>
        <div>
          <Comment v-for="(item, index) in comment.slice(0,2)" :key="index" :info="item"></Comment>
        </div>
        <router-link :to="{path:'/comment',query:{id:bookInfo._id}}">查看全部评论</router-link>
      </section>
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
import Comment from "@/components/public/comment";

export default {
  components: {
    BookTitle,
    Head,
    Book_1,
    Comment
  },
  data() {
    return {
      bookId: this.$route.query.id,
      bookInfo: "",
      loveother: "",
      comment: ""
    };
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
  padding-top: pxtovw(55);
  .catalogue {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    line-height: pxtovw(30);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(16);
      font-weight: 400;
    }
    p {
      flex: 1;
      margin: 0;
      padding: 0;
      font-size: pxtovw(12);
      text-align: center;
      padding: 0 pxtovw(30);
      overflow: hidden;
      color: #9dc8c8;
    }
    i {
      display: inline-block;
      width: pxtovw(15);
      height: pxtovw(15);
      background: url("./../assets/images/iconfontjiantou6.svg") no-repeat
        center center;
    }
  }
  .comment {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(16);
      font-weight: 400;
      margin-bottom: pxtovw(10);
    }
    a {
      display: block;
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: pxtovw(12);
      line-height: pxtovw(40);
      color: #9dc8c8;
    }
  }
  .tags {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(12);
      font-weight: 400;
    }
    p {
      margin: 0;
      padding: 0;
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
  .introduce {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(16);
      font-weight: 400;
      margin-bottom: pxtovw(10);
    }
    p {
      margin: 0;
      padding: 0;
      font-size: pxtovw(13);
      line-height: pxtovw(24);
    }
  }
  .love {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(16);
      font-weight: 400;
      margin-bottom: pxtovw(10);
    }
    ul {
      display: flex;
      margin: 0;
      padding: 0;
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
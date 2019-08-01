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
      <!-- 评论 -->
      <section class="review">
        <h3>评论</h3>
        <ul>
          <li v-for="(item, index) in short" :key="index"></li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/Head";
import BookTitle from "@/components/Book/BookTitle";
export default {
  components: {
    BookTitle,
    Head
  },
  data() {
    return {
      bookId: this.$route.query.id,
      bookInfo: "",
      chapters: "",
      chapterslist: "",
      like: "",
      reviews: ""
    };
  },
  mounted() {
    // 书籍详情
    this.$axios
      .get(`https://novel.juhe.im/book-info/${this.bookId}`)
      .then(info => {
        this.bookInfo = info.data;
      });
    // 书评
    this.$axios
      .get(`https://novel.juhe.im/book/short-reviews?book=${this.bookId}`)
      .then(shorts => {
        this.reviews = shorts.data.docs;
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
  .review {
    padding: 0 pxtovw(15);
    margin-bottom: pxtovw(15);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(16);
      font-weight: 400;
      margin-bottom: pxtovw(10);
    }
  }
}
</style>
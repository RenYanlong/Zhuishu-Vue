<template>
  <div class="comment">
    <Head>评论区</Head>
    <div class="bookinfo">
      <Book :bookinfo="book"></Book>
    </div>
  </div>
</template>

<script>
import Head from "@/components/public/Head";
import Book from "@/components/comment/commentTitle";
import Comment from '@/components/public/comment';
export default {
  data() {
    return {
      id: this.$route.query.id,
      book: "",
      duan: "",
      chang: ""
    };
  },
  components: {
    Head,
    Book,
    Comment
  },
  mounted() {
    this.$axios(`https://novel.juhe.im/book-info/${this.id}`).then(req => {
      this.book = req.data;
    });
    // 短评
    this.$axios(
      `https://novel.juhe.im/book/short-reviews?book=${this.id}`
    ).then(req => {
      this.duan = req.data;
    });
    // 长评
    this.$axios(`https://novel.juhe.im/book/reviews?book=${this.id}`).then(
      req => {
        this.chang = req.data;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.bookinfo {
  padding-top: pxtovw(55);
}
.tab1,.tab2{
  padding: 0 pxtovw(15);
  .paixu{
    line-height: pxtovw(40);
    font-size: pxtovw(10);
    color: #9dc8c8;
    border-bottom: #9dc8c831 1px solid;
    margin-bottom: pxtovw(15);
  }
}
</style>

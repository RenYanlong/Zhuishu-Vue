<template>
  <!-- 书籍详情 -->
  <div class="book">
    <!-- 置顶头部 -->
    <Head></Head>
    <!-- 页面主体 -->
    <div class="main">
      <!-- 图书详情头部 -->
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <!-- 最近更新 -->
      <div class="new" v-if="bookInfo">
        <p class="new1">
          <span>最新</span>
          {{bookInfo.lastChapter}}
        </p>
        <p class="newtime">{{bookInfo.updated.slice(0,10)}}更新</p>
      </div>
      <!-- 目录 -->
      <div class="chapters">
        <div>更多目录</div>
      </div>
      <!-- 简介 -->
      <section class="bookIntroduce">
        <h4>内容简介</h4>
        <p>{{bookInfo.longIntro}}</p>
      </section>
      <!-- 评论 -->
      <section class="review">
        <h4>精彩评论<span>12</span></h4>
        <ul>
          <li v-for="(item, index) in short" :key="index"></li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/head";
import BookTitle from "@/components/book/bookTitle.vue";
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
      short: ""
    };
  },
  mounted() {
    this.$axios
      .get(`https://novel.juhe.im/book-info/${this.bookId}`)
      .then(info => {
        this.bookInfo = info.data;
      });
    this.$axios
      .get(`https://novel.juhe.im/book/short-reviews?book=${this.bookId}`)
      .then(shorts => {
        this.short = shorts.data.docs;
      });
    // this.$axios
    //   .get(
    //     `https://novel.juhe.im/book-sources?view=summary&book=${this.bookId}`
    //   )
    //   .then(cha => {
    //     this.chapters = cha.data[0]._id;
    //     this.$axios
    //       .get(`https://novel.juhe.im/book-chapters/${this.chapters}`)
    //       .then(cha => {
    //         this.chapterslist = cha.data;
    //       });
    //   });
  },
  watch: {
    $route: function() {
      this.bookId = this.$route.query.id;
      this.$axios
        .get(`https://novel.juhe.im/book-info/${this.bookId}`)
        .then(info => {
          this.bookInfo = info.data;
        });
      this.$axios
        .get(`https://novel.juhe.im/book/short-reviews?book=${this.bookId}`)
        .then(shorts => {
          this.short = shorts.data.docs;
        });
    }
  }
};
</script>
<style lang='less' scoped>
.book {
  display: flex;
  flex-flow: column nowrap;
}

.main {
  .bookIntroduce {
    padding: 3vmin 3vmin 4vmin;
    background-color: #faf7f5;
    border-top: 1px solid #e8e7e6;
    h4 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      margin-bottom: 2vmin;
    }
    p {
      font-size: 14px;
      color: #666;
      line-height: 20px;
      list-style: none;
      box-sizing: border-box;
    }
  }
  .chapters {
    padding: 4vmin 3vmin;
    background-color: #ebe8e6;
    div {
      border: 1px solid #666;
      line-height: 30px;
      text-align: center;
    }
  }
  .new {
    padding: 4vmin 3vmin;
    background-color: #ebe8e6;
    border-top: 1px solid #e8e7e6;
    p {
      line-height: 20px;
      span {
        display: inline-block;
        font-size: 12px;
        width: 40px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        background-color: #666;
        color: #fff;
        box-sizing: border-box;
        border-radius: 10px;
        margin-right: 5px;
      }
    }
    .new1 {
      color: #3a98c9;
    }
    .newtime {
      padding-left: 45px;
    }
  }
}
</style>
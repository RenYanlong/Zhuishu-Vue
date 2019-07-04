<template>
  <!-- 书籍详情 -->
  <div class="book">
    <!-- 置顶头部 -->
    <Head>{{bookInfo.title}}</Head>
    <!-- 页面主体 -->
    <div class="main">
      <!-- 图书详情头部 -->
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <!-- 简介 -->
      <section class="bookIntroduce">
        <h4>简介：</h4>
        <p>{{bookInfo.longIntro}}</p>
      </section>
      <!-- 目录 -->
      <section class="bookall">
        <h4>目录:</h4>
        <div>
          <ul>
            <li v-for="(item,index) in chapterslist.chapters" :key="index">
              <router-link
                :to="{path:'/chapters',query:{id:bookId,zhang:item.order}}"
              >{{item.title}}</router-link>
            </li>
          </ul>
        </div>
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
  methods: {
    isbut: function() {
      this.is = !this.is;
    }
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
        this.short = shorts.data;
      });
    this.$axios
      .get(
        `https://novel.juhe.im/book-sources?view=summary&book=${this.bookId}`
      )
      .then(cha => {
        this.chapters = cha.data[0]._id;
        this.$axios
          .get(`https://novel.juhe.im/book-chapters/${this.chapters}`)
          .then(cha => {
            this.chapterslist = cha.data;
          });
      });
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
          this.short = shorts.data;
        });
      this.$axios
        .get(
          `https://novel.juhe.im/book-sources?view=summary&book=${this.bookId}`
        )
        .then(cha => {
          this.chapters = cha.data[0]._id;
          this.$axios
            .get(`https://novel.juhe.im/book-chapters/${this.chapters}`)
            .then(cha => {
              this.chapterslist = cha.data;
            });
        });
    }
  }
};
</script>
<style lang='less' scoped>
.book {
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
}

.main {
  margin-top: 8vh;
  p {
    font-size: 14px;
    color: #666;
    line-height: 25px;
    list-style: none;
    box-sizing: border-box;
  }
  li {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 8vmin;
    height: 8vmin;
  }
}
</style>
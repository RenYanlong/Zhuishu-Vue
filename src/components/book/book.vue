<template>
  <div class="book">
    <Head>{{bookInfo.title}}</Head>

    <div class="main">
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <!-- 简介 -->
      <div class="bookIntroduce">
        <h4>《{{bookInfo.title}}》简介：</h4>
        <p>{{bookInfo.longIntro}}</p>
      </div>
      <!-- 目录 -->
      <div class="bookall">
        <h4>《{{bookInfo.title}}》目录</h4>
        <div :class="{isheigth:is}">
          <ul>
            <li v-for="(item,index) in chapterslist.chapters" :key="index">
              <router-link
                :to="{path:'/chapters',query:{id:bookId,zhang:item.order}}"
              >{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- <div class="bookReviews">
        <h4>《{{bookInfo.title}}》热门书评:</h4>
        <div class="shuping">
          <div v-for="(item,index) in short.docs" :key="index" class="shupinglist">
            <img :src="`https://statics.zhuishushenqi.com${item.author.avatar}`" />
            <div class="shortright">
              <p>
                <span class="nickname">{{item.author.nickname}}</span>
                <span>{{item.updated.slice(0,10)}}</span>
              </p>
              <el-rate v-model="item.rating" disabled text-color="#ff9900"></el-rate>
              <p class="content">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>-->
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
      short: "",
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
  .bookIntroduce,.bookall {
    padding: 1vh 2vw;
  }
  h4 {
    color: #666;
  }
  p {
    padding: 1vh 2vw;
    font-size: 14px;
    color: #666;
    line-height: 25px;
    list-style: none;
    box-sizing: border-box;
  }
  ul {
    padding: 1vh 2vw;
  }
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 5vh;
    height: 5vh;
    padding-left: 2vw;

  }
  .shupinglist {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 40px;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      padding: 0 10px;
      .nickname {
        font-weight: 600;
      }
      p {
        font-size: 14px;
        padding: 0;
      }
      .content {
        line-height: 25px;
        padding-left: 10px;
        margin: 5px 0;
      }
    }
  }
  span {
    display: inline-block;
    padding: 0 10px;
  }
}
.right {
  h4 {
    line-height: 60px;
    color: #777;
  }
  .likebook a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    margin-bottom: 30px;
    img {
      width: 96px;
      height: 118px;
    }
    .info {
      color: #666;
      margin-left: 10px;
      .bookname {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .bookanthor {
        font-size: 13px;
      }
    }
  }
}
</style>
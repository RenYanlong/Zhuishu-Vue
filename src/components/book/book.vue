<template>
  <div class="book">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/category'}">{{bookInfo.minorCate}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{bookInfo.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="left">
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <div class="bookSection">
        <div class="bookIntroduce">
          <h3>《{{bookInfo.title}}》简介：</h3>
          <p>{{bookInfo.longIntro}}</p>
        </div>
        <div class="booknew">
          <h3>《{{bookInfo.title}}》最新章节</h3>
          <div>
            <ul v-if="chapterslist">
              <li
                v-for="(item,index) in chapterslist.chapters.slice(chapterslist.chapters.length - 6)"
                :key="index"
              >
                <router-link
                  :to="{path:'/chapters',query:{id:bookId,zhang:item.order}}"
                >{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="bookall">
          <h3>《{{bookInfo.title}}》目录</h3>
          <div @click="isbut" class="all">显示全部</div>
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
      </div>
      <div class="bookReviews">
        <h3>《{{bookInfo.title}}》热门书评:</h3>
        <div class="shuping">
          <div v-for="(item,index) in short.docs" :key="index" class="shupinglist">
            <img :src="`https://statics.zhuishushenqi.com${item.author.avatar}`">
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
      </div>
    </div>
    <div class="right">
      <div class="newApp"></div>
      <div class="like">
        <h4>喜欢这本书的也喜欢</h4>
        <div v-for="(item,index) in bookSection.books" :key="index" class="likebook">
          <router-link :to="{path:'/book',query:{id:item._id}}">
            <img :src="`https://statics.zhuishushenqi.com${item.cover}`">
            <div class="info">
              <p class="bookname">{{item.title}}</p>
              <p class="bookanthor">{{item.author}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookTitle from "@/components/book/bookTitle.vue";
export default {
  components: {
    BookTitle
  },
  data() {
    return {
      bookId: this.$route.query.id,
      bookInfo: "",
      bookSection: "",
      chapters: "",
      chapterslist: "",
      like: "",
      short: "",
      is: true
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
      .get(`https://novel.juhe.im/recommend/${this.bookId}`)
      .then(section => {
        this.bookSection = section.data;
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
        .get(`https://novel.juhe.im/recommend/${this.bookId}`)
        .then(section => {
          this.bookSection = section.data;
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
.isheigth {
  overflow: hidden;
  height: 400px;
}
.bookall {
  position: relative;
}
.all {
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
}
.book {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  background-color: @backgroundColor4;
}
.breadcrumb {
  position: absolute;
  top: -30px;
  left: 0px;
}
.left {
  width: 690px;
  margin-right: 30px;
  .bookSection > div {
    margin-bottom: 40px;
  }
  h3 {
    font-size: 16px;
    color: #666;
    border-left: 3px solid #cab389;
    padding-left: 5px;
    margin-bottom: 20px;
  }
  p,
  li {
    font-size: 13px;
    color: #666;
    line-height: 25px;
    list-style: none;
    padding-left: 40px;
    box-sizing: border-box;
  }
  li {
    line-height: 40px;
    height: 40px;
    display: inline-block;
    width: 50%;
    border-bottom: 1px solid #eee;
    padding-left: 40px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
      .nickname{
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
  width: 220px;
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
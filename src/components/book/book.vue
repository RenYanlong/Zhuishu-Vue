<template>
  <div class="book">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/category'}">{{bookInfo.minorCate}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{bookInfo.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="left">
      {{bookId}}
      {{chapters}}
      <BookTitle :bookinfo="bookInfo"></BookTitle>
      <div class="bookSection">
        <div class="bookIntroduce"></div>
        <div class="booknew"></div>
        <div class="bookall"></div>
      </div>
      <div class="bookReviews"></div>
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
      like: ""
    };
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
      .get('https://novel.juhe.im/book-chapters/55eef8b27445ad27755670b9')
      .then(cha => {
        this.chapters = cha.data;
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
        .get('https://novel.juhe.im/book-chapters/55eef8b27445ad27755670b9')
        .then(cha => {
          this.chapters = cha.data;
        });
    }
  }
};
</script>
<style lang='less' scoped>
.book {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
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
  margin-right: 20px;
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
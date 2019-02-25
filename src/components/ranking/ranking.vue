<template>
  <div class="ranking">
    <div class="left">
      <div
        v-for="(item,index) in maleinfo"
        :key="index"
        @click="id = item._id,currentPage = 1,clickleft()"
        :class="[id == item._id ? 'isbut' : '']"
      >
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="right" v-if="booklist">
      <div class="title">{{booklist.ranking.title}}</div>
      <div>
        <div
          v-for="(item,index) in booklist.ranking.books.slice((currentPage - 1) * pagesize,
        currentPage * pagesize)"
          :key="index"
          class="book"
        >
          <router-link tag="a" target="_blank" :to="{path:'/book',query:{id:item._id}}">
            <div class="bookImg">
              <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
            </div>
            <div class="bookinfo">
              <p class="bookname">{{item.title}}</p>
              <p class="author">{{item.author}}</p>
              <p class="brief">{{item.shortIntro}}</p>
              <p class="popular">
                <span>{{item.latelyFollower}}</span>人气
                <span class="shu">|</span>
                <span>{{item.retentionRatio}}%</span>读者存留
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <el-pagination
        class="pagination"
        :current-page.sync="currentPage"
        :page-size="20"
        layout="prev, pager, next, jumper"
        :total="booklist.ranking.books.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ranking",
  data() {
    return {
      currentPage: 1,
      pagesize: 20,
      id: this.$route.query.id
        ? this.$route.query.id
        : "54d42d92321052167dfb75e3",
      booklist: "",
      maleinfo: "",
      femaleinfo: ""
    };
  },
  methods: {
    clickleft: function() {
      this.$router.push({
        path: "/ranking",
        query: {
          id: this.id
        }
      });
    }
  },
  mounted() {
    this.$axios.get("https://novel.juhe.im/rank-category").then(rank => {
      this.maleinfo = rank.data.male;
      this.femaleinfo = rank.data.male;
    }),
      this.$axios.get(`https://novel.juhe.im/rank/${this.id}`).then(info => {
        this.booklist = info.data;
      });
  },
  watch: {
    $route: function() {
      this.id = this.$route.query.id;
      this.$axios.get(`https://novel.juhe.im/rank/${this.id}`).then(info => {
        this.booklist = info.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.ranking {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  .left {
    width: 240px;
    div {
      border-bottom: 1px solid @borderC3;
      box-sizing: border-box;
      list-style: none;
      color: @fontColor2;
      cursor: pointer;
      span {
        box-sizing: border-box;
        display: inline-block;
        font-size: 14px;
        height: 60px;
        line-height: 60px;
        padding: 0 30px;
      }
    }
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    justify-content: left;
    align-items: center;
    width: 900px;
    background-color: @backgroundColor4;
    .title {
      width: 900px;
      box-sizing: border-box;
      line-height: 60px;
      font-size: 22px;
      font-weight: 700;
      color: #cab389;
      padding-left: 15px;
    }
    .pagination {
      margin: 20px 0;
    }
  }
}
.isbut {
  color: @fontColor4;
  background-color: @backgroundColor5;
  span {
    border-bottom: 4px solid @fontColor4;
  }
}
.book {
  box-sizing: border-box;
  width: 410px;
  display: inline-block;
  padding: 15px;
  .bookImg {
    float: left;
    height: 120px;
    width: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bookinfo {
    height: 120px;
    margin-left: 15px;
    float: left;
    width: 275px;
    .bookname {
      color: #333;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
    }
    .author,
    .brief,
    .popular {
      font-size: 12px;
      color: #999;
    }
    .author {
      line-height: 28px;
    }
    .brief {
      height: 40px;
      line-height: 20px;
      margin: 5px 0;
      box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
    }
    .popular {
      line-height: 20px;
      span {
        color: @fontColor3;
      }
      .shu {
        padding: 0 15px;
      }
    }
  }
}
</style>

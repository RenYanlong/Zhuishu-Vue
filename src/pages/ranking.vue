<template>
  <div class="ranking">
    <div class="left">
      <div>
        <div class="sex">男生</div>
        <div
          v-for="(item,index) in maleinfo"
          :key="index"
          @click="id = item._id,currentPage = 1,clickleft()"
          :class="[id == item._id ? 'isbut' : '']"
        >
          <span>{{item.title}}</span>
        </div>
      </div>
      <div>
        <div class="sex">女生</div>
        <div
          v-for="(item,index) in femaleinfo"
          :key="index"
          @click="id = item._id,currentPage = 1,clickleft()"
          :class="[id == item._id ? 'isbut' : '']"
        >
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="right" v-if="booklist">
      <div class="title">{{booklist.ranking.title}}</div>
      <div class="main">
        <Book
          :bookData="item"
          v-for="(item,index) in booklist.ranking.books.slice((currentPage - 1) * pagesize,
        currentPage * pagesize)"
          :key="index"
        ></Book>
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
import Book from "./../components/rank/book";
export default {
  components: {
    Book
  },
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
      this.femaleinfo = rank.data.female;
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
.sex {
  font-size: 15px;
  font-weight: 600;
  line-height: 40px;
}
.ranking {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  margin-top: 15px;
  .left {
    width: 230px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    padding: 20px;
    div {
      box-sizing: border-box;
      list-style: none;
      color: @fontColor2;
      cursor: pointer;
      span {
        box-sizing: border-box;
        display: inline-block;
        font-size: 14px;
        line-height: 35px;
      }
    }
  }
  .right {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 750px;
    margin-left: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    .title {
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: 700;
      color: @fontColor2;
      border-bottom: 1px solid #dbdbdb;
    }

    .pagination {
      padding: 30px;
      align-self: flex-end;
    }
  }
}
.isbut {
  color: @fontColor3;
}
</style>

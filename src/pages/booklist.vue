<template>
  <div class="booklist">
    <div class="title">
      <ul>
        <li @click="clickhot(),chengeurl()" :class="[defaultSort == '按本周热度'?'but':'']">
          <span>按本周热度</span>
        </li>
        <li @click="clicknew(),chengeurl()" :class="[defaultSort == '按发布时间'?'but':'']">
          <span>按发布时间</span>
        </li>
        <li @click="clicknum(),chengeurl()" :class="[defaultSort == '按收藏数量'?'but':'']">
          <span>按收藏数量</span>
        </li>
      </ul>
    </div>
    <div class="listghtmain">
      <ul>
        <li v-for="(list,index) in categorylist" :key="index" class="bookb">
          <router-link :to="{path:'/bookListDetails',query:{id:list._id}}">
            <book :book="list"></book>
          </router-link>
        </li>
        <el-pagination
          @current-change="chengeurl,chengeurl()"
          :current-page.sync="currentPage"
          :page-size="20"
          layout="prev, pager, next, jumper"
          :total="bookListNum"
          class="pag"
        ></el-pagination>
      </ul>
    </div>
  </div>
</template>
<script>
import book from "@/components/booklist/bookblock.vue";
export default {
  name: "booklist",
  data() {
    return {
      bookListNum: "",
      currentPage: this.$route.query.start ? this.$route.query.start : 1,
      sort: this.$route.query.sort ? this.$route.query.sort : "collectorCount",
      duration: this.$route.query.duration
        ? this.$route.query.duration
        : "last-seven-days",
      categorylist: ""
    };
  },
  computed: {
    defaultSort: function() {
      if (this.sort == "collectorCount" && this.duration == "last-seven-days") {
        return "按本周热度";
      } else if (this.sort == "created" && this.duration == "all") {
        return "按发布时间";
      } else if (this.sort == "collectorCount" && this.duration == "all") {
        return "按收藏数量";
      }
    }
  },
  components: {
    book
  },
  methods: {
    clickhot: function() {
      (this.sort = "collectorCount"),
        (this.duration = "last-seven-days"),
        (this.currentPage = 1);
    },
    clicknew: function() {
      (this.sort = "created"), (this.duration = "all"), (this.currentPage = 1);
    },
    clicknum: function() {
      (this.sort = "collectorCount"),
        (this.duration = "all"),
        (this.currentPage = 1);
    },
    //根据需要传入url的参数改变url
    chengeurl: function() {
      this.$router.push({
        push: "/booklist",
        query: {
          sort: this.sort,
          duration: this.duration,
          start: this.currentPage
        }
      });
    }
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/booklists?sort=${this.sort}&duration=${
          this.duration
        }&start=${this.currentPage}`
      )
      .then(response => {
        this.bookListNum = response.data.total;
        this.categorylist = response.data.bookLists;
      });
  },
  watch: {
    //监听url
    $route: function() {
      this.$axios
        .get(
          `https://novel.juhe.im/booklists?sort=${this.sort}&duration=${
            this.duration
          }&start=${this.currentPage}`
        )
        .then(response => {
          this.bookListNum = response.data.total;
          this.categorylist = response.data.bookLists;
        });
    }
  }
};
</script>
<style lang='less' scoped>
.booklist {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  width: 1000px;
  margin: 0 auto;
  padding: 15px 0;
}
.title {
  width: 1000px;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dbdbdb;
  ul {
    display: flex;
    li {
      box-sizing: border-box;
      list-style: none;
      color: #999;
      cursor: pointer;
      padding: 0 10px;
    }
    .but {
      font-weight: 600;
      color: #ed4259;
    }
  }
}
.listghtmain {
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  margin: 20px 0;
  padding: 20px;
  .pag {
    align-self: flex-end;
    padding: 30px 0;
  }
  ul {
    display: flex;
    flex-flow: column nowrap;
    li {
      list-style: none;
      cursor: pointer;
    }
  }
}
</style>
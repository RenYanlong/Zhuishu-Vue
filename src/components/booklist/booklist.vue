<template>
  <div class="booklist">
    <div class="listleft">
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
    <div class="listright">
      <div class="listghtmain">
        <p>{{defaultSort}}</p>
        <ul>
          <li v-for="list in categorylist" :key="list.name" class="bookb">
            <router-link :to="{path:'/bookListDetails',query:{id:list._id}}">
              <book :book="list"></book>
            </router-link>
          </li>
        </ul>
      </div>
      <el-pagination
        background
        @current-change="chengeurl,chengeurl()"
        :current-page.sync="currentPage"
        :page-size="20"
        layout="prev, pager, next, jumper"
        :total="bookListNum"
      ></el-pagination>
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
      currentPage: this.$route.query.start ? this.$route.query.start : "",
      sort: this.$route.query.sort ? this.$route.query.sort : "",
      duration: this.$route.query.duration ? this.$route.query.duration : "",
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
        }&start=${this.currentPage - 1}`
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
          }&start=${this.currentPage - 1}`
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
.bookb {
  box-sizing: border-box;
  width: 410px;
  display: inline-block;
  padding: 15px;
  cursor: pointer;
}
.booklist {
  width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
}
.listleft {
  float: left;
  width: 240px;
  border-top: 5px #cab389 solid;
  font-size: 14px;
  li {
    box-sizing: border-box;
    height: 60px;
    list-style: none;
    color: #999;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    span {
      box-sizing: border-box;
      display: inline-block;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
    }
  }
}
.listright {
  float: right;
  width: 880px;
  padding: 0 15px;
}
.listghtmain p {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-weight: 700;
  color: #cab389;
}
.listrighttitle {
  width: 100%;
  line-height: 60px;
  font-size: 22px;
  font-weight: 700;
  color: #cab389;
}
.listleft .istab {
  color: red;
}
.but {
  color: @fontColor4;
  background-color: @backgroundColor5;
  span {
    border-bottom: 4px solid @fontColor4;
  }
}
</style>
<template>
  <div class="booklist">
    <Head>为你推荐</Head>
    <div class="listghtmain">
      <ul>
        <li v-for="(list,index) in categorylist" :key="index" class="bookb">
          <router-link :to="{path:'/bookListDetails',query:{id:list._id}}">
            <book :book="list"></book>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/head";
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
    book,
    Head
  },
  methods: {
    onClickLeft: function() {
      this.$router.push("/");
    },
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
}
.listghtmain {
  background-color: #fff;
  margin-top: 8vh;
  padding: 0 2vw;
  ul{
    li{
      list-style: none;
    }
  }
}
</style>
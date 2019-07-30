<template>
  <div class="male">
    <!-- 重磅推荐 -->
    <section class="recommend">
      <div class="title">
        <h2>重磅推荐</h2>
        <span>
          更多
          <i></i>
        </span>
      </div>
      <ul>
        <li v-for="(item, index) in hot1" :key="index">
          <Book_2 :bookinfo="item"></Book_2>
        </li>
      </ul>
    </section>

    <!-- 最爱榜单 -->
    <section class="recommend">
      <div class="title">
        <h2>最爱榜单</h2>
        <span>
          更多
          <i></i>
        </span>
      </div>
      <ul>
        <li>
          <Toplist :info="over">热门榜</Toplist>
        </li>
        <li>
          <Toplist :info="hot2">热搜榜</Toplist>
        </li>
        <li>
          <Toplist :info="top100">最top榜</Toplist>
        </li>
      </ul>
    </section>
    <!-- 热门书单 -->
    <section class="vertical">
      <div class="title">
        <h2>热门书单</h2>
        <span>
          更多
          <i></i>
        </span>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in booklist.slice(0,5)" :key="index">
            <Booklist :book="item"></Booklist>
          </li>
        </ul>
      </div>
    </section>
    <section class="recommend">
      <div class="title">
        <h2>畅销图书</h2>
        <span>更多</span>
      </div>
      <ul>
        <li v-for="(item, index) in sellwell" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Book from "@/components/public/Book.vue";
import Book_1 from "@/components/public/Book_1.vue";
import Book_2 from "@/components/public/Book_2.vue";
import Toplist from "@/components/public/Toplist.vue";
import Booklist from "@/components/public/booklist.vue";

export default {
  data() {
    return {
      loading: true,
      top100: "",
      hot1: "",
      hot2: "",
      over: "",
      booklist: "",
      sellwell: ""
    };
  },
  components: {
    Book,
    Book_1,
    Book_2,
    Toplist,
    Booklist
  },
  mounted() {
    this.loading = false;
    //热门推荐
    this.$axios
      .get("https://novel.juhe.im/rank/564d8494fe996c25652644d2")
      .then(ov => {
        this.hot1 = ov.data.ranking.books.slice(0, 3);
        this.sellwell = ov.data.ranking.books.slice(3, 6);
      });
    // 完本精选
    this.$axios
      .get("https://novel.juhe.im/rank/5a6844aafc84c2b8efaa6b6e")
      .then(ov => {
        this.hot2 = ov.data.ranking.books;
      });
    this.$axios
      .get("https://novel.juhe.im/rank/564eb878efe5b8e745508fde")
      .then(ov => {
        this.over = ov.data.ranking.books;
      });
    this.$axios
      .get("https://novel.juhe.im/rank/54d42d92321052167dfb75e3")
      .then(ov => {
        this.top100 = ov.data.ranking.books;
      });
    this.$axios
      .get(
        "https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0&gender=male"
      )
      .then(ov => {
        this.booklist = ov.data.bookLists;
      });
  }
};
</script>

<style lang="scss" scoped>
// 块标题
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3vw;
  h2 {
    padding: 0;
    margin: 0;
    font-size: 4.8vw;
    font-weight: 500;
  }
  span {
    display: flex;
    align-items: center;
    font-size: 3.47vw;
    i {
      width: 3vw;
      height: 3vw;
      background-image: url("./../../assets/images/iconfontjiantou6.svg");
      background-size: 3vw 3vw;
      background-repeat: no-repeat;
    }
  }
}
.recommend {
  padding: 3vw 3vw 0;
  margin-bottom: 4vw;
  ul {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    font-size: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      list-style: none;
      margin-right: 3vw;
    }
  }
}
.vertical {
  padding: 3vw 3vw 0;
  margin-bottom: 4vw;
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>



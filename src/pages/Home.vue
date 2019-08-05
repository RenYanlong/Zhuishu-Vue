<template>
  <div class="home">
    <!-- input -->
    <transition name="cat" enter-active-class='animated fadeIn-0.1s'  leave-active-class='animated fadeOut faster'>
    <Category v-show="isActivate"></Category>
    </transition>
    <div>
      <header>
        <div class="logo">
          <h1></h1>
          <i @click="activate"></i>
        </div>
        <p class="toplist">热门排行</p>
      </header>
      <section class="recommend toppadding">
        <div class="title">
          <h2>最被喜爱图书 | 男生</h2>
          <span>更多</span>
        </div>
        <ul>
          <li v-for="(item, index) in favouriteForMale.slice(0,8)" :key="index">
            <Book_1 :bookinfo="item"></Book_1>
          </li>
        </ul>
      </section>
      <section class="recommend">
        <div class="title">
          <h2>最被喜爱图书 | 女生</h2>
          <span>更多</span>
        </div>
        <ul>
          <li v-for="(item, index) in favouriteForFemale.slice(0,8)" :key="index">
            <Book_1 :bookinfo="item"></Book_1>
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
            <Toplist :info="hotForFemale.slice(0,10)">女生完结榜</Toplist>
          </li>
          <li>
            <Toplist :info="hotForMale.slice(0,10)">男生完结榜</Toplist>
          </li>
          <li>
            <Toplist :info="hotmaiForFemale.slice(0,10)">热销榜</Toplist>
          </li>
        </ul>
      </section>
      <!-- 热门书单 -->
      <section class="vertical">
        <div class="title">
          <h2>热门书单</h2>
          <router-link :to="{path:'/booklist'}">
            <span>更多</span>
          </router-link>
        </div>
        <div>
          <ul>
            <li v-for="(item, index) in booklist.slice(0,4)" :key="index">
              <Booklist :book="item"></Booklist>
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/home/footer.vue";
import Book_1 from "@/components/public/Book_1.vue";
import Toplist from "@/components/public/Toplist.vue";
import Booklist from "@/components/public/booklist.vue";
import Category from "@/components/home/Category.vue";


export default {
  components: {
    Footer,
    Book_1,
    Toplist,
    Booklist,
    Category
  },
  data() {
    return {
      favouriteForMale: "",
      favouriteForFemale: "",
      hotForFemale: "",
      hotForMale: "",
      hotmaiForFemale: "",
      hotmaiForMale: "",
      booklist: ""
    };
  },
  computed: {
    isActivate() {
      return this.$store.state.isActivate;
    }
  },
  methods: {
    activate() {
      this.$store.commit("changeisActivate");
    }
  },
  mounted() {
    // 两个最热门
    // 男生最热门
    this.$axios
      .get("https://novel.juhe.im/rank/54d42d92321052167dfb75e3")
      .then(ov => {
        this.favouriteForMale = ov.data.ranking.books;
      });
    // 女生最热门
    this.$axios
      .get("https://novel.juhe.im/rank/54d43437d47d13ff21cad58b")
      .then(ov => {
        this.favouriteForFemale = ov.data.ranking.books;
      });
    // 四个榜单
    // 女生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eb8a9cf77e9b25056162d")
      .then(ov => {
        this.hotForFemale = ov.data.ranking.books;
      });
    // 男生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eb878efe5b8e745508fde")
      .then(ov => {
        this.hotForMale = ov.data.ranking.books;
      });
    // 热销榜
    this.$axios
      .get("https://novel.juhe.im/rank/564d80d0e8c613016446c5aa")
      .then(ov => {
        this.hotmaiForFemale = ov.data.ranking.books;
      });
    // 热门书单
    this.$axios
      .get(
        "https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0"
      )
      .then(ov => {
        this.booklist = ov.data.bookLists;
      });
  }
};
</script>

<style lang="scss" scoped>
// style for input
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  box-sizing: border-box;
  margin: 0 0 pxtovw(15);
  padding: 0 pxtovw(15);
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px #d7fff1;
  z-index: 20;
  .logo {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    h1 {
      width: pxtovw(40);
      height: pxtovw(40);
      margin: 0;
      padding: 0;
      margin-right: pxtovw(10);
      background-image: url("./../assets/images/logo.svg");
      background-size: pxtovw(40) pxtovw(40);
      background-repeat: no-repeat;
    }
    i {
      width: pxtovw(20);
      height: pxtovw(20);
      margin: 0;
      padding: 0;
      background-image: url("./../assets/images/sousuo-F-2.svg");
      background-size: pxtovw(20) pxtovw(20);
      background-repeat: no-repeat;
    }
  }
  .toplist {
    margin: 0;
    padding: 0;
    background-color: #e53a40;
    border-radius: pxtovw(5);
    box-sizing: border-box;
    line-height: pxtovw(25);
    padding: 0 pxtovw(15);
    font-size: pxtovw(12);
    color: #d7fff1;
  }
}
// 块标题
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: pxtovw(10);
  line-height: pxtovw(20);
  h2 {
    padding: 0;
    margin: 0;
    font-size: pxtovw(16);
    font-weight: 400;
    a,
    span {
      font-size: pxtovw(12);
    }
  }
  & > span,
  & > a {
    display: flex;
    align-items: center;
    font-size: pxtovw(13);
  }
}
.toppadding {
  padding-top: pxtovw(55);
}
.recommend {
  padding-left: pxtovw(15);
  padding-right: pxtovw(15);
  margin-bottom: pxtovw(15);
  ul {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      list-style: none;
      margin-right: pxtovw(10);
    }
  }
}
.vertical {
  padding-left: pxtovw(15);
  padding-right: pxtovw(15);
  margin-bottom: pxtovw(15);
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
}
</style>
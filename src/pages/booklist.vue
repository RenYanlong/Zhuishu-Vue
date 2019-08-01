<template>
  <!-- 书单页面 -->
  <div class="booklist">
    <Head>书单</Head>
    <div class="listghtmain">
      <p>{{bookListNum}}个书单</p>
      <ul>
        <li v-for="(list,index) in categorylist" :key="index" class="bookb">
          <router-link :to="{path:'/bookListDetails',query:{id:list._id}}">
            <Book :bookinfo="list"></Book>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Head from "@/components/public/Head";
import Book from "@/components/public/BookforBooklist";
export default {
  name: "booklist",
  components: {
    Book,
    Head
  },
  data() {
    return {
      bookListNum: "",
      categorylist: ""
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0`
      )
      .then(response => {
        this.bookListNum = response.data.total;
        this.categorylist = response.data.bookLists;
      });
  }
};
</script>
<style lang='scss' scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.listghtmain {
  padding: pxtovw(55) pxtovw(15) 0;
  & > p {
    margin: 0;
    padding: 0;
    font-size: pxtovw(12);
    color: #9DC8C8;
    margin-bottom: pxtovw(15);
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    li {
      list-style: none;
    }
  }
}
</style>
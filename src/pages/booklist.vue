<template>
  <!-- 书单页面 -->
  <div class="booklist">
    <Head>主题书单</Head>
    <div class="sequence">
      <ul>
        <li @click="chan(0),iis = 'hot'" :class="[0 === num ? 'is' : '']">推荐</li>
        <li @click="chan(1),iis = 'new'" :class="[1 === num ? 'is' : '']">男频</li>
        <li @click="chan(2),iis = 'most'" :class="[2 === num ? 'is' : '']">女频</li>
        <li @click="chan(3),iis = 'most'" :class="[3 === num ? 'is' : '']">出版</li>
      </ul>
    </div>
    <!-- <keep-alive>
      <component :is="iis"></component>
    </keep-alive> -->
  </div>
</template>
<script>
import Head from "@/components/public/Head";
import Hot from "@/components/BookList/Hot";
import New from "@/components/BookList/New";
import Most from "@/components/BookList/Most";
export default {
  name: "booklist",
  components: {
    Head,
    Hot,
    New,
    Most
  },
  data() {
    return {
      bookListNum: "",
      categorylist: "",
      num: 0,
      iis: "Hot"
    };
  },
  methods: {
    chan(num) {
      this.num = num;
    }
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
.sequence {
  position:fixed;
  top: pxtovw(55);
  width: 100vw;
  box-sizing: border-box;
  font-size: pxtovw(12);
  background-color: #fff;
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  li {
    box-sizing: border-box;
    height: pxtovw(26);
    line-height: pxtovw(26);
    color: #9dc8c8;
    border-bottom: 2px solid #fff;
    transition: all .3s;
  }
  .is {
    box-sizing: border-box;
    color: #011638;
    border-bottom: 2px solid #011638;
    transition: all .3s;
  }
}
.listghtmain {
  padding: pxtovw(105) pxtovw(15) 0;
}
</style>
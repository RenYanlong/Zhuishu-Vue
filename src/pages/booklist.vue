<template>
  <!-- 书单页面 -->
  <div class="booklist">
    <Head>书单</Head>
    <div class="sequence">
      <ul>
        <li @click="chan(0),iis = 'hot'" :class="[0 === num ? 'is' : '']">最热</li>
        <li @click="chan(1),iis = 'new'" :class="[1 === num ? 'is' : '']">最新</li>
        <li @click="chan(2),iis = 'most'" :class="[2 === num ? 'is' : '']">收藏</li>
      </ul>
    </div>
    <component :is="iis"></component>
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
      seq: ["最热", "最新", "收藏"],
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
  position: fixed;
  top: pxtovw(55);
  font-size: pxtovw(12);
  padding: pxtovw(15) pxtovw(15);
  margin: pxtovw(-15) 0 pxtovw(15);
  background-color: #fff;
  width: 100vw;
  z-index: 50;
  box-shadow: 0px 1px 1px 0px #d7fff1;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    box-sizing: border-box;
    list-style: none;
    padding: 0 pxtovw(10);
    line-height: pxtovw(20);
    border: #9dc8c8 1px solid;
    color: #9dc8c8;
    margin-right: pxtovw(10);
    border-radius: pxtovw(10);
  }
  .is {
    color: #011638;
    border: #011638 1px solid;
  }
}
.listghtmain {
  padding: pxtovw(105) pxtovw(15) 0;
}
</style>
<template>
  <div class="moreBooks">
    <Head>{{title}}</Head>
    <ul class="main">
      <li v-for="(item, index) in books" :key="index">
        <Book_2 :bookinfo="item"></Book_2>
      </li>
    </ul>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from "@/components/public/Head";
import Book_2 from "@/components/public/Book_2";
import Foot from "@/components/home/footer";
export default {
  name: "moreBooks",
  components: {
    Head,
    Book_2,
    Foot
  },
  data() {
    return {
      title: this.$route.query.title
    };
  },
  computed: {
    books() {
      return this.$store.state.moreBooks;
    }
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.main{
  padding: pxtovw(15) pxtovw(15);
  li{
    margin-bottom: pxtovw(15);
  }
}
</style>

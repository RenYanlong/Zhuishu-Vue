<template>
  <div class="male">
    <BookSection_1 title="好看的停不下来" url="/moreBooks" :books="Hotfe"></BookSection_1>
    <BookSection_2 title="努力发家致富" url="/moreBooks" :books="jingshangfe"></BookSection_2>
    <BookSection_2 title="想象力大开" url="/moreBooks" :books="xuanyi"></BookSection_2>
  </div>
</template>

<script>
import BookSection_1 from "@/components/home/BookSection_1";
import BookSection_2 from "@/components/home/BookSection_2";

import { mapState } from "vuex";
export default {
  components: {
    BookSection_1,
    BookSection_2
  },
  computed: mapState({
    Hotfe: state => state.female.Hotfe,
    jingshangfe: state => state.female.jingshangfe,
    xuanyi: state => state.female.xuanyi
  }),
  mounted() {
    // 好看的停不下来
    this.$axios
      .get("https://novel.juhe.im/rank/5a684515fc84c2b8efaa9875")
      .then(ov => {
        this.$store.commit("changeHotfe", ov.data.ranking.books);
      });

    // 经商
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=female&type=hot&major=古代言情&minor=经商种田&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changejingshangfe", ov.data.books);
      });
    // 科幻
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=female&type=hot&major=科幻&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changexuanyi", ov.data.books);
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
</style>

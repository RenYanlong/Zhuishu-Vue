<template>
  <div class="male">
    <BookSection_1 title="极品爽文，万人追读" url="/moreBooks" :books="hot"></BookSection_1>
    <BookSection_2 title="好评如潮" url="/moreBooks" :books="highOpinion"></BookSection_2>
    <BookSection_2 title="畅游都市" url="/moreBooks" :books="city"></BookSection_2>
    <BookSection_2 title="逆天玄幻，升级打怪" url="/moreBooks" :books="xuanhuan"></BookSection_2>
    <BookSection_2 title="时空穿梭，科幻世界" url="/moreBooks" :books="kehuan"></BookSection_2>
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
    hot: state => state.male.hot,
    highOpinion: state => state.male.highOpinion,
    city: state => state.male.city,
    xuanhuan: state => state.male.xuanhuan,
    kehuan: state => state.male.kehuan
  }),
  mounted() {
    // 完结经典
    this.$axios
      .get("https://novel.juhe.im/rank/564d820bc319238a644fb408")
      .then(ov => {
        this.$store.commit("changeHot", ov.data.ranking.books);
      });
    // 好评榜
    this.$axios
      .get("https://novel.juhe.im/rank/5a6844aafc84c2b8efaa6b6e")
      .then(ov => {
        this.$store.commit("changehighOpinion", ov.data.ranking.books);
      });

    // 都市
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=male&type=hot&major=都市&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changeCity", ov.data.books);
      });

    // 逆天玄幻
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=male&type=hot&major=玄幻&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changexuanhuan", ov.data.books);
      });
    // 科幻
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=male&type=hot&major=科幻&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changekehuan", ov.data.books);
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
</style>

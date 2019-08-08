<template>
  <div class="male">
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <BookSection_1 title="出版小说" url="/moreBooks" :books="hotsnovel"></BookSection_1>
    <BookSection_2 title="穿越时空的爱恋" url="/moreBooks" :books="cross"></BookSection_2>
    <BookSection_1 title="完结经典，日也捧读" url="/moreBooks" :books="over"></BookSection_1>
    <BookSection_2 title="年少风轻，青春无悔" url="/moreBooks" :books="young"></BookSection_2>
    <BookSection_2 title="生活时尚" url="/moreBooks" :books="movies"></BookSection_2>
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
  data() {
    return {
      loading:false
    }
  },
  computed: mapState({
    hotsnovel: state => state.allbooks.hotsnovel,
    cross: state => state.allbooks.cross,
    over: state => state.allbooks.over,
    young: state => state.allbooks.young,
    movies: state => state.allbooks.movies
  }),
  created() {
    this.loading = true;
    // 热门小说
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=出版小说&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changehotsnovel", ov.data.books);
      });
    // 穿越时空
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=female&type=hot&major=古代言情&minor=穿越时空&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changecross", ov.data.books);
      });
    // 完结经典
    this.$axios
      .get("https://novel.juhe.im/rank/564eb878efe5b8e745508fde")
      .then(ov => {
        this.$store.commit("changeover", ov.data.ranking.books);
      });
    // 青春
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=青春言情&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changeyoung", ov.data.books);
      });
    // 生活时尚
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=生活时尚&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changemovies", ov.data.books);
      });
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
</style>

<template>
  <div class="male">
    <BookSection_1 title="成功励志" url="/moreBooks" :books="chenggong"></BookSection_1>
    <BookSection_2 title="传记名著" url="/moreBooks" :books="zhuanji"></BookSection_2>
    <BookSection_2 title="军事" url="/moreBooks" :books="junshi"></BookSection_2>
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
    chenggong: state => state.press.chenggong,
    zhuanji: state => state.press.zhuanji,
    junshi: state => state.press.junshi
  }),
  mounted() {
    // 成功励志
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=成功励志&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changechenggong", ov.data.books);
      });
    // 科幻
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=传记名著&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changezhuanji", ov.data.books);
      });
    // 军事
    this.$axios
      .get(
        "https://novel.juhe.im/category-info?gender=press&type=hot&major=政治军事&minor=&start=0&limit=12"
      )
      .then(ov => {
        this.$store.commit("changejunshi", ov.data.books);
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
</style>

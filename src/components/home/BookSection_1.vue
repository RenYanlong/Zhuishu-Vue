<template>
  <!-- 需要接收三个props：title,url,books -->
  <section class="recommend" v-if="books">
    <TitleForSection :title="title" :url="url"></TitleForSection>
    <div class="main">
      <Book_2 :bookinfo="books[0]"></Book_2>
      <ul>
        <li v-for="(item, index) in books.slice(1,5)" :key="index">
          <Book_1 :bookinfo="item"></Book_1>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TitleForSection from "@/components/public/TitleForSection";
import Book_1 from "@/components/public/Book_1";
import Book_2 from "@/components/public/Book_2";

export default {
  components: {
    TitleForSection,
    Book_1,
    Book_2
  },
  props: {
    title: String,
    url: String,
    books: [Array,String]
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.recommend {
  border-top: pxtovw(5) solid #58c9ba20;
  .main {
    padding: pxtovw(15);
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin-top: pxtovw(20);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

<template>
  <router-link :to="{path:'/book',query:{id:bookinfo._id}}" class="book_1">
    <img :src="`http://statics.zhuishushenqi.com${bookinfo.cover}`" />
    <h3>{{bookinfo.title}}</h3>
  </router-link>
</template>

<script>
export default {
  props: ["bookinfo"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.book_1 {
  width: pxtovw(90);
  display: block;
  img {
    width: pxtovw(90);
    height: pxtovw(120);
    margin-bottom: pxtovw(10);
  }
  h3 {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>




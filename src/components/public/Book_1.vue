<template>
  <router-link :to="{path:'/book',query:{id:bookinfo._id}}" class="book_1">
    <img :src="`http://statics.zhuishushenqi.com${bookinfo.cover}`" />
    <h3>{{bookinfo.title}}</h3>
  </router-link>
</template>

<script>
export default {
  props: {
    bookinfo: Object
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.book_1 {
  width: pxtovw(75);
  display: block;
  img {
    width: pxtovw(75);
    height: pxtovw(100);
    margin-bottom: pxtovw(6);
    border-radius: pxtovw(2);
    box-shadow: 0px 0px 6px 2px rgba(212, 153, 185, 0.40);
  }
  h3 {
    font-size: pxtovw(14);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>




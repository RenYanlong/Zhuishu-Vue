<template>
  <div class="book">
    <div class="img">
      <img :src="`https://statics.zhuishushenqi.com${book.covers[0]}`" />
    </div>
    <div class="bookinfo">
      <h3>{{book.title}}</h3>
      <p class="popular">共{{book.bookCount}}本 / {{book.author}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"]
};
</script>
<style lang='scss' scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.book {
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 3vw;
  .img {
    height: pxtovw(120);
    width: pxtovw(90);
    margin-right: pxtovw(10);
    img {
      height: pxtovw(120);
      width: pxtovw(90);
    }
  }
  .bookinfo {
    flex: 1;
    max-width: pxtovw(245);
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(14);
      font-weight: 400;
      margin-bottom: pxtovw(10);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .popular {
      margin: 0;
      padding: 0;
      font-size: pxtovw(12);
      color: #d499b9;
    }
  }
}
</style>
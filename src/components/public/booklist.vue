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
.book {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 3vw;
  .img {
    height: 30vw;
    width: 21vw;
    margin-right: 3vw;
    img {
      height: 30vw;
      width: 21vw;
      border-radius: 1vw;
    }
  }
  .bookinfo {
    h3 {
      margin: 0;
      padding: 0;
      font-size: 4.27vw;
      margin-bottom: 3vw;
    }
    .popular {
      margin: 0;
      padding: 0;
      font-size: 3.47vw;
      color: #2E294E;
    }
  }
}
</style>
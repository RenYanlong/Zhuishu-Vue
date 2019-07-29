<template>
  <div class="bookblock">
    <div class="imgs">
      <img :src="`https://statics.zhuishushenqi.com${book.covers[0]}`"/>
    </div>
    <div class="bookinfo">
      <h3>{{book.title}}</h3>
      <p class="popular">{{book.bookCount}}本 / {{book.author}} </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"]
};
</script>
<style lang='less' scoped>
.bookblock {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 3vw;
  .imgs {
    height: 27vw;
    width: 20vw;
    margin-right: 2vw;
    img {
      height: 27vw;
      width: 20vw;
      border-radius: 1vw;
    }
  }
}
.bookinfo {
  h3{
    margin-bottom: 3vw;
  }
  .popular{
    font-size: 13px;
    color: #666;
  }
}
</style>
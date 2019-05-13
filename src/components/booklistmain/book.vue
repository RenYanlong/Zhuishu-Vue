<template>
  <div class="bookInfo" v-if="bookInfo">
    <div>
      <img :src="`http://statics.zhuishushenqi.com${bookInfo.book.cover}`">
    </div>
    <div class="info">
      <h4>{{bookInfo.book.title}}</h4>
      <p class="zuozhe">{{bookInfo.book.author}}</p>
      <p class="comment">{{bookInfo.comment}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bookInfo"]
};
</script>
<style lang='less' scoped>
.bookInfo {
  display: flex;
  flex-flow: row nowrap;
  padding: 1vw 0;
  img {
    height: 100px;
    width: 75px;
  }
  .info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    padding-left: 2vw;
    h4 {
      color: @fontColor;
      font-size: 16px;
    }
    .zuozhe {
      font-size: 14px;
      line-height: 28px;
      color: @fontColor;
    }
    .comment {
      font-size: 12px;
    }
  }
}
</style>

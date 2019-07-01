<template>
  <div class="bookInfo" v-if="bookInfo">
    <div>
      <img :src="`http://statics.zhuishushenqi.com${bookInfo.book.cover}`" />
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
  margin-bottom: 1vh;
  img {
    height: 120px;
    width: 90px;
  }
  .info {
    display: flex;
    flex-flow: column nowrap;
    
    padding-left: 2vw;
    h4,
    .zuozhe,
    .comment {
      margin-bottom: 1vh;
    }
    .zuozhe {
      font-size: 12px;
      color: red;
    }
    .comment {
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>

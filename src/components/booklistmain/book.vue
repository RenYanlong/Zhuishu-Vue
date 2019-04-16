<template>
  <div class="book">
    <div class="bookInfo" v-if="bookInfo">
      <img :src="`http://statics.zhuishushenqi.com${bookInfo.book.cover}`">
      <div class="info">
        <h4>{{bookInfo.book.title}}</h4>
        <p class="zuozhe">{{bookInfo.book.author}}</p>
        <van-tag plain>{{bookInfo.book.cat}}</van-tag>
        <!-- <p>{{bookInfo.comment}}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bookInfo"]
};
</script>
<style lang='less' scoped>
.book {
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 0;
  .bookInfo {
    display: flex;
    flex-flow: row nowrap;
    background-color: @backgroundColor4;
    img {
      height: 120px;
      width: 90px;
      margin-right: 10px;
    }
    .info {
      color: @fontColor2;
      font-size: 12px;
      h4 {
        color: @fontColor;
        line-height: 22px;
        font-size: 14px;
      }
      .zuozhe,
      .leixing {
        line-height: 28px;
      }
      .zuozhe {
        color: @fontColor;
      }
      .latelyFollower {
        line-height: 20px;
        margin-top: 22px;
      }
    }
  }
}
</style>

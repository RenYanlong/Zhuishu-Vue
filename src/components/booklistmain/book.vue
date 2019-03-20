<template>
  <div class="book">
    <div class="bookInfo">
      <img v-lazy="`http://statics.zhuishushenqi.com${bookInfo.book.cover}`">
      <div class="info">
        <h4>{{bookInfo.book.title}}</h4>
        <p class="zuozhe">{{bookInfo.book.author}}</p>
        <p class="leixing">{{bookInfo.book.cat}}</p>
        <p
          class="latelyFollower"
        >{{bookInfo.book.latelyFollower / 10000}}万人气-{{bookInfo.book.retentionRatio}}%作者预存率</p>
      </div>
    </div>
    <div class="comment" v-if="bookInfo.comment !== ''">{{bookInfo.comment}}</div>
  </div>
</template>
<script>
export default {
  props: ["bookInfo"]
};
</script>
<style lang='less' scoped>
.book {
  width: 930px;
  margin: 0 auto;
  padding: 20px 15px;
  box-sizing: border-box;
  .bookInfo {
    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    background-color: @backgroundColor4;
    img {
      width: 90px;
      height: 120px;
    }
    .info {
      color: @fontColor2;
      font-size: 12px;
      margin-left: 10px;
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
  .comment {
    position: relative;
    padding: 15px;
    margin-left: 90px;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: @backgroundColor5;
    color: @fontColor2;
    font-size: 14px;
    line-height: 25px;
  }
  .comment:before {
    content: "";
    position: absolute;
    left: -15px;
    /* ceshi  */
    border-top: 15px solid @backgroundColor5;
    border-left: 15px solid @fontColor5;
  }
}
</style>

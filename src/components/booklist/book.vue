<template>
  <div class="book">
    <div class="bookInfo">
      <img class="cover" :src="`http://statics.zhuishushenqi.com${bookInfo.book.cover}`">
      <div class="info">
        <h4>{{bookInfo.book.title}}</h4>
        <p class="zuozhe">{{bookInfo.book.author}}-{{bookInfo.book.cat}}</p>
        <p
          class="latelyFollower"
        >{{bookInfo.book.latelyFollower}}人气-{{bookInfo.book.retentionRatio}}作者预存率</p>
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
* {
  margin: 0;
  padding: 0;
}
.book {
  margin: 0 auto;
  width: 930px;
}
.bookInfo {
  width: 930px;
  padding: 20px 15px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
}
.cover {
  float: left;
  width: 90px;
  height: 120px;
}
.info {
  margin-left: 105px;
}
h4 {
  color: #333;
  line-height: 22px;
  font-size: 14px;
}
.zuozhe {
  color: #999;
  font-size: 12px;
  line-height: 28px;
}
.latelyFollower {
  color: #999;
  line-height: 20px;
  font-size: 12px;
  margin-top: 50px;
}
.comment {
  position: relative;
  margin: 0px 0px 20px 120px;
  padding: 15px 10px;
  line-height: 25px;
  background-color: #f4f2ef;
  color: #999;
  font-size: 14px;
}
.comment:before {
  content: "";
  position: absolute;
  left: -15px;
  top: 15px;
  /* ceshi  */
  border-top: 15px solid #f4f2ef;
  border-left: 15px solid #fff;
}
</style>

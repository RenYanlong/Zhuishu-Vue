<template>
  <div class="bookblock">
    <div class="bookImg">
      <img :src="`https://statics.zhuishushenqi.com${book.cover}`">
    </div>
    <div class="bookinfo">
      <p class="bookname">{{book.title}}</p>
      <p class="brief">{{book.desc}}</p>
      <p class="popular">
        共
        <span>{{book.bookCount}}</span>本书
        <span>{{book.collectorCount}}</span>人收藏
      </p>
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
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
}
img {
  height: 120px;
  width: 90px;
}
.bookinfo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-left: 15px;
  font-size: 13px;
  color: @fontColor2;
  .bookname {
    color: @fontColor;
    font-weight: 600;
    font-size: 14px;
  }
  .brief {
    height: 40px;
    line-height: 20px;
    margin: 5px 0;
    box-orient: vertical;
    line-clamp: 2;
    overflow: hidden;
  }
}
</style>
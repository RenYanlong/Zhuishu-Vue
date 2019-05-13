<template>
  <div class="bookblock">
    <div class="bookImg">
      <img :src="`https://statics.zhuishushenqi.com${book.cover}`">
    </div>
    <div class="bookinfo">
      <p class="bookname">{{book.title}}</p>
      <p class="brief">{{book.desc}}</p>
      <p class="popular">
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
  margin-right: 5px;
}
.bookinfo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  .bookname {
    font-weight: 600;
    font-size: 14px;
  }
  .brief {
    font-size: 12px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .popular {
    font-size: 12px;
    color: red;
  }
}
</style>
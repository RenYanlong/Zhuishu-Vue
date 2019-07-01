<template>
  <div class="bookblock">
    <div class="bookImg">
      <img :src="`https://statics.zhuishushenqi.com${book.cover}`" />
    </div>
    <div class="bookinfo">
      <h4 class="bookname">{{book.title}}</h4>
      <p class="popular">
        <span>{{book.bookCount}}</span>本书
        <span>{{book.collectorCount}}</span>人收藏
      </p>
      <p class="brief">{{book.desc}}</p>
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
  padding: 1vh 0;
}
img {
  height: 120px;
  width: 90px;
  margin-right: 5px;
}
.bookinfo {
  display: flex;
  flex-flow: column nowrap;
  .bookname,
  .brief,
  .popular {
    margin-bottom: 2vh;
  }
  .brief {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .popular {
    font-size: 12px;
    color: red;
  }
}
</style>
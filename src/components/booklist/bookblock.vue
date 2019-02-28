<template>
  <div class="bookblock">
    <div class="bookImg">
      <img :src="`http://statics.zhuishushenqi.com${book.cover}`" v-if="book.cover != ''">
      <img src="../../../src/assets/img-bk.png" v-else>
    </div>
    <div class="bookinfo">
      <p class="bookname">{{book.title}}</p>
      <p class="author">{{book.author}}</p>
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
.bookImg {
  float: left;
  img {
    height: 120px;
    width: 90px;
  }
}
.bookinfo {
  height: 120px;
  margin-left: 15px;
  float: left;
  width: 275px;
  span {
    color: @fontColor3;
  }
  .bookname {
    color: @fontColor;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .author,
  .brief,
  .popular {
    font-size: 12px;
    color: @fontColor2;
  }
  .author {
    line-height: 28px;
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
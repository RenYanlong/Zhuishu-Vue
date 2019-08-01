<template>
  <div class="book">
    <div class="info" v-if="bookinfo">
      <div class="imgs">
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.book.cover}`" />
      </div>
      <div class="main">
        <p class="bookname">{{bookinfo.book.title}}</p>
        <p class="author">{{bookinfo.book.author}}</p>
      </div>
    </div>
    <div class="comment">
      <p>{{bookinfo.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookinfo"]
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.book{
  padding: 0 pxtovw(15);
  margin-bottom: pxtovw(20);
}
.info {
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: pxtovw(10);
  .imgs {
    width: pxtovw(75);
    height: pxtovw(100);
    margin-right: pxtovw(10);
    img {
      width: pxtovw(75);
      height: pxtovw(100);
      border-radius: pxtovw(3);
    }
  }
  .main {
    display: flex;
    flex:1;
    flex-flow: column nowrap;
    justify-content: flex-start;
    .bookname {
      margin: 0;
      padding: 0;
      font-size: pxtovw(15);
      font-weight: 400;
    }
    .author {
      font-size: 12px;
    }
  }
}
.comment {
  margin: 0;
  padding: pxtovw(10);
  background-color: #d7fff1;
  color: #9dc8c8;
  border-radius: pxtovw(3);
  p {
    margin: 0;
    padding: 0;
    font-size: pxtovw(12);
    line-height: pxtovw(18);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
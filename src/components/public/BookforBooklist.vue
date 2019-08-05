<template>
  <div class="book" v-if="bookinfo">
    <div class="cover">
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" v-if="bookinfo.cover" />
      <img :src="`./../../assets/img-bk.png`" v-else>
    </div>
    <div class="bookinfo">
      <h3>{{bookinfo.title}}</h3>
      <p class="introduction">共{{bookinfo.bookCount}}本书</p>
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
.book {
  margin-bottom: pxtovw(10);
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: pxtovw(345);
  .cover {
    height: pxtovw(120);
    width: pxtovw(90);
    margin-right: pxtovw(15);
    img {
      height: pxtovw(120);
      width: pxtovw(90);
      border-radius: pxtovw(3);
    }
  }
  .bookinfo {
    flex: 1;
    h3 {
      margin: 0;
      padding: 0;
      font-size: pxtovw(14);
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .introduction {
      margin: 0;
      padding: 0;
      font-size: pxtovw(10);
      line-height: pxtovw(18);
      color: #9dc8c8;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>

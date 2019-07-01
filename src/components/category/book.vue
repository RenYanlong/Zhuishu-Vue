<template>
  <div class="book" v-if="bookinfo">
    <div class="img">
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" />
    </div>
    <div class="main">
      <h4>{{bookinfo.title}}</h4>
      <div class="zuozhe">{{bookinfo.author}}</div>
      <div class="jianjie">{{bookinfo.shortIntro}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookinfo"]
};
</script>

<style lang="less" scoped>
.book {
  display: flex;
  background-color: #fff;
  .img {
    img {
      width: 90px;
      height: 120px;
      margin-right: 2vw;
    }
  }
  .main {
    display: flex;
    flex-flow: column nowrap;
    .head,.zuozhe,jianjie{
      margin-bottom: 1vh;
    }
    .jianjie {
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .zuozhe {
      font-size: 12px;
      color: red;
    }
  }
}
</style>

<template>
  <div class="book">
    <div>
       <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`">
    </div> 
    <div class="main">
      <div class="head">{{bookinfo.title}}</div>
      <div class="jianjie">{{bookinfo.shortIntro}}</div>
      <div class="zuozhe">{{bookinfo.author}}</div>
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
  padding: 10px;
  background-color: #fff;
  .main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .head {
      font-size: 14px;
      font-weight: 600;
    }
    .jianjie {
      font-size: 12px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .zuozhe {
      font-size: 12px;
      color: red;
    }
  }
}
img {
  height: 120px;
  width: 90px;
  margin-right: 5px;
}
</style>

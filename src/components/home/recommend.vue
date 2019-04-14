<template>
  <div class="tuijian">
    <img :src="`http://statics.zhuishushenqi.com${info.cover}`">
    <p class="title">{{info.title}}</p>
    <p class="zuozhe">{{info.author}}</p>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang="less" scoped>
.tuijian {
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  img {
    width: 70px;
    height: 85px;
    margin-right: 10px;
  }
  .title {
    font-size: 14px;
  }
  .zuozhe {
    font-size: 12px;
  }
}
</style>

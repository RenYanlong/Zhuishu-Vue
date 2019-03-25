<template>
  <div class="tuijian">
    <img v-lazy="`http://statics.zhuishushenqi.com${info.cover}`">
    <div class="info">
      <p class="title">{{info.title}}</p>
      <p class="jianjie">{{info.shortIntro}}</p>
      <div class="zuozhe">
        <div class="zuohe">{{info.author}}</div>
      </div>
    </div>
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
  
  width: 23%;
  box-sizing: border-box;
  padding: 10px 0;
  img {
    width: 70px;
    height: 85px;
    margin-right: 10px;
  }
  .info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 180px;
    .title {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .jianjie {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 12px;
      color: #666;
    }
    .zuozhe {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #a6a6a6;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>

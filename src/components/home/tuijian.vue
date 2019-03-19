<template>
  <div class="tuijian">
    <img :src="`http://statics.zhuishushenqi.com${info.cover}`">
    <div class="info">
      <p class="title">{{info.title}}</p>
      <p class="jianjie">{{info.shortIntro}}</p>
      <div class="zuozhe">
        <div class="zuohe">{{info.author}}</div>
        <div class="leixing">{{info.majorCate}}</div>
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
  width: 250px;
  box-sizing: border-box;
  padding: 20px 10px;
  img {
    width: 70px;
    height: 85px;
    margin-right: 5px;
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
      .leixing{
        padding: 0 5px;
        box-sizing: border-box;
        border: 1px solid #a6a6a6;
      }
    }
  }
}
</style>

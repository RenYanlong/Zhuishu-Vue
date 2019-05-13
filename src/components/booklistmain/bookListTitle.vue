<template>
  <div class="title">
    <h3>{{info.title}}</h3>
    <p class="desc">{{info.desc}}</p>
    <div class="authorInfo">
      <img :src="`https://statics.zhuishushenqi.com${info.author.avatar}`">
      <p class="authorName">{{info.author.nickname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.title {
  background-color: #fff;
  padding-bottom: 1vh;
  .desc {
    font-size: 14px;
    padding: 1.5vh 0 2vh;
  }
  .authorInfo {
    display: flex;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    .authorName {
      padding: 0 5px;
      font-size: 16px;
    }
  }
}
</style>

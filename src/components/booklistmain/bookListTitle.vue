<template>
  <section class="title">
    <h3>{{info.title}}</h3>
    <div class="authorInfo">
      <img :src="`https://statics.zhuishushenqi.com${info.author.avatar}`" />
      <p class="authorName">{{info.author.nickname}}</p>
    </div>
    <p class="desc">{{info.desc}}</p>
  </section>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.title {
  h3,.desc,.authorInfo{
    margin-bottom: 2vmin;
  }
  .desc {
    font-size: 14px;
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

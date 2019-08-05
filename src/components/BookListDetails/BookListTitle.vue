<template>
  <section>
    <h3>{{info.title}}</h3>
    <p class="collector">{{info.total}}个内容 · {{info.collectorCount}}人收藏</p>
    <div class="authorInfo">
      <div class="imgs">
        <img :src="`https://statics.zhuishushenqi.com${info.author.avatar}`" />
      </div>
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
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
section {
  margin: 0 0 pxtovw(15);
  padding: 0 pxtovw(15) pxtovw(15);
  box-shadow: 0px 1px 1px 0px #d7fff1;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: pxtovw(10);
  }
  .collector {
    margin: 0;
    padding: 0;
    font-size: pxtovw(12);
    color: #9dc8c8;
    margin-bottom: pxtovw(15);
  }
  .authorInfo {
    display: flex;
    align-items: center;
    margin-bottom: pxtovw(15);
    .imgs {
      height: pxtovw(25);
      width: pxtovw(25);
      margin-right: pxtovw(10);
    }
    img {
      height: pxtovw(25);
      width: pxtovw(25);
      border-radius: 50%;
    }
    .authorName {
      margin: 0;
      padding: 0;
      line-height: pxtovw(25);
      font-size: pxtovw(14);
    }
  }
  .desc{
    margin: 0;
      padding: 0;
      line-height: pxtovw(20);
      font-size: pxtovw(12);
  }
}
</style>

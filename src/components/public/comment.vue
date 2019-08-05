<template>
  <div class="comm">
    <p class="author">
      <img :src="`https://statics.zhuishushenqi.com${info.author.avatar}`" />
      <span>{{info.author.nickname}}</span>
      <span class="lv">Lv.{{info.author.lv}}</span>
    </p>
    <van-rate v-model="info.rating" readonly class="star" :size="12" :gutter="2" />
    <p class="content">{{info.content}}</p>
  </div>
</template>


<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.comm {
  width: pxtovw(375-30);
  box-sizing: border-box;
  margin-bottom: pxtovw(10);
  padding: 0 0 pxtovw(10);
  border-bottom: 1px solid #9dc8c831;
}
p {
  margin: 0;
  padding: 0;
}
.author {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: pxtovw(4);
  img {
    width: pxtovw(20);
    height: pxtovw(20);
    border-radius: 50%;
    margin-right: pxtovw(10);
  }
  span {
    font-size: pxtovw(12);
    margin-right: pxtovw(6);
    color: #9dc8c8;
  }
  .lv {
    font-size: pxtovw(10);
  }
}
.star {
  margin-bottom: pxtovw(4);
}
.content {
  font-size: pxtovw(13);
  line-height: pxtovw(22);
  word-wrap: break-word;
  word-break: normal;
}
</style>

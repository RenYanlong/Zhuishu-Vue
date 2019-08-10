<template>
  <div class="mark" v-if="bookinfo">
    <div>
      <p class="fi">{{bookinfo.rating.score.toFixed(1)}}</p>
      <p>{{bookinfo.rating.tip}}</p>
    </div>
    <div>
      <p class="fi">{{bookinfo.retentionRatio}}%</p>
      <p>读者存留率</p>
    </div>
    <div>
      <p class="fi">{{bookinfo.latelyFollower}}</p>
      <p>7日人气</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    bookinfo: [Object,String]
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.mark {
  display: flex;
  justify-content: space-around;
  padding: pxtovw(10) pxtovw(15);
  margin-bottom: pxtovw(15);
  align-items: flex-start;
  text-align: center;
  .fi {
    font-size: pxtovw(16);
    line-height: pxtovw(24);
  }
  p {
    font-size: pxtovw(12);
    color: #548687;
  }
}
</style>
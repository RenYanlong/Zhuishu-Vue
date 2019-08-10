<template>
  <section class="catalogue" v-if="bookinfo">
    <h3>目录</h3>
    <p>{{bookinfo.lastChapter}}</p>
    <i></i>
  </section>
</template>


<script>
export default {
  props: {
    bookinfo: [Object, String]
  }
};
</script>

<style lang="scss">
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.catalogue {
  padding: 0 pxtovw(15);
  margin-bottom: pxtovw(15);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  line-height: pxtovw(30);
  h3 {
    font-size: pxtovw(16);
    font-weight: 400;
  }
  p {
    flex: 1;
    font-size: pxtovw(12);
    text-align: center;
    padding: 0 pxtovw(30);
    overflow: hidden;
    color: #9dc8c8;
  }
  i {
    display: inline-block;
    width: pxtovw(15);
    height: pxtovw(15);
    background: url("./../../assets/images/iconfontjiantou6.svg") no-repeat
      center center;
  }
}
</style>
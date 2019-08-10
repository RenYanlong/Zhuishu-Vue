<template>
  <section class="introduce" v-if="bookinfo">
    <h3>简介</h3>
    <p class="class">
      <span v-for="(item, index) in bookinfo.tags.slice(0,5)" :key="index">{{item}}</span>
    </p>
    <p>{{bookinfo.longIntro}}</p>
  </section>
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
.introduce {
  padding: 0 pxtovw(15);
  margin-bottom: pxtovw(15);
  h3 {
    font-size: pxtovw(16);
    font-weight: 400;
    margin-bottom: pxtovw(10);
  }
  p {
    font-size: pxtovw(13);
    line-height: pxtovw(24);
  }
}
.class {
  display: flex;
  align-items: center;
  font-size: pxtovw(12);
  margin-bottom: pxtovw(10);
  span {
    display: inline-block;
    padding: 0 pxtovw(10);
    line-height: pxtovw(20);
    background-color: #54868725;
    border-radius: pxtovw(10);
    margin-right: pxtovw(5);
  }
}
</style>
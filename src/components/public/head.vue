<template>
  <div class="returnbut">
    <span @click="goBack"></span>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.returnbut {
  position: fixed;
  margin: 0;
  padding: 0 pxtovw(15);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: pxtovw(40);
  margin-bottom: pxtovw(15);
  background-color: #fff;
  width: 100vw;
  box-shadow: 0px 1px 1px 0px #d7fff1;
  span {
    width: pxtovw(25);
    height: pxtovw(25);
    background: url("./../../assets/images/zuojiantou.svg") no-repeat;
    background-size: pxtovw(25) pxtovw(25);
  }
  p {
    flex: 1;
    margin: 0;
    padding: 0;
    padding-right: pxtovw(25);
    text-align: center;
  }
}
</style>

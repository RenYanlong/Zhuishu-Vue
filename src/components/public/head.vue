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
  position: sticky;
  top: 0;
  padding: 0 pxtovw(15);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: pxtovw(40);
  background-color: #fff;
  width: 100vw;
  span {
    width: pxtovw(20);
    height: pxtovw(20);
    background: url("./../../assets/images/zuojiantou.svg") no-repeat;
    background-size: pxtovw(20) pxtovw(20);
  }
  p {
    flex: 1;
    padding-right: pxtovw(25);
    font-size: pxtovw(16);
    text-align: center;
  }
}
</style>

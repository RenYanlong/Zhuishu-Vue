<template>
  <header>
    <div class="logo">
      <h1></h1>
      <i @click="activate"></i>
    </div>
    <p class="toplist">书架</p>
  </header>
</template>

<script>
export default {
  methods: {
    activate() {
      this.$store.commit("changeisActivate");
    }
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100vw;
  padding: 0 pxtovw(15);
  box-sizing: border-box;
  background-color: #fff;
  // box-shadow: 0px 1px 1px 0px #d7fff1;
}
.logo {
  display: flex;
  align-items: center;
  h1 {
    width: pxtovw(40);
    height: pxtovw(40);
    margin-right: pxtovw(10);
    background: url("./../../assets/images/logo.svg") no-repeat;
    background-size: pxtovw(40) pxtovw(40);
  }
  i {
    width: pxtovw(20);
    height: pxtovw(20);
    background: url("./../../assets/images/sousuo-F-2.svg") no-repeat;
    background-size: pxtovw(20) pxtovw(20);
  }
}
.toplist {
  line-height: pxtovw(25);
  color: #e53a40;
  font-size: pxtovw(16);
  &::after{
    width: pxtovw(20);
    height: pxtovw(20);
    background-color: red;
  }
}
</style>

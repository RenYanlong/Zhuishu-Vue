<template>
  <footer>
    <p>- 到底啦 -</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
footer {
  line-height: pxtovw(50);
  text-align: center;
  color: #548687;
}
p {
  font-size: pxtovw(12);
}
</style>



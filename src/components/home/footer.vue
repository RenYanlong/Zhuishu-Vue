<template>
  <footer>
    <p>该项目仅供学习使用</p>
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
  line-height: pxtovw(40);
  text-align: center;
  color: #58c9b9;
}
p {
  font-size: pxtovw(12);
}
</style>



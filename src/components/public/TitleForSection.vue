<template>
  <!-- 首页模块标题 -->
  <div class="title">
    <h2>{{title}}</h2>
    <span @click="change">更多</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    url: String
  },
  methods: {
    change: function() {
      this.$store.commit("changemoreBooks", this.$parent.books);
      this.$router.push({ path: "moreBooks", query: { title: this.title } });
    }
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: pxtovw(45);
  padding: 0 pxtovw(15);
  border-bottom: 0.5px solid #58c9ba20;
  h2 {
    font-size: pxtovw(15);
    font-weight: 400;
  }
  & > span {
    display: flex;
    align-items: center;
    font-size: pxtovw(12);
    color: #d499b9;
  }
}
</style>

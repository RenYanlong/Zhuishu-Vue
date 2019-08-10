<template>
  <header>
    <div class="head-fixed">
      <h1 href="#">youstory</h1>
      <span @click="activate"></span>
    </div>
  </header>
</template>

<script>
import Cat from "@/components/home/Category";

export default {
  components: {
    Cat
  },
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
  position: sticky;
  top: 0;
  padding: 0 pxtovw(15);
  background-color: #fff;
  border-bottom: 0.5px solid #58c9ba40;
}

.head-fixed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: pxtovw(50);
  h1 {
    display: inline-block;
    height: pxtovw(20);
    width: pxtovw(90);
    background-image: url("./../../assets/images/youstory.svg");
    background-repeat: no-repeat;
    background-size: pxtovw(90) pxtovw(20);
    background-position: center center;
    text-indent: -99999px;
  }
  span {
    width: pxtovw(20);
    height: pxtovw(20);
    background: url("./../../assets/images/caidan.svg") no-repeat;
    background-size: pxtovw(20) pxtovw(20);
  }
}
.toplist {
  line-height: pxtovw(25);
  color: #e53a40;
  font-size: pxtovw(16);
  &::after {
    width: pxtovw(20);
    height: pxtovw(20);
    background-color: red;
  }
}
</style>

<template>
  <!-- 首页 -->
  <div class="home">
    <!-- head -->
    <Head></Head>
    <!-- 导航 -->
    <Nav></Nav>
    <router-view></router-view> 
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "@/components/home/head";
import Nav from "@/components/home/nav.vue";
import Footer from "@/components/home/footer.vue"

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Nav,
    Head,
    Footer
  }
};
</script>

<style lang="less" scoped>
</style>
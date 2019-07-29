<template>
  <!-- 首页 -->
  <div class="home">
    <!-- head -->
    <!-- <Head></Head> -->
    <div>
      <van-search placeholder="你是否在找书籍？" shape="round" readonly />
    </div>
    <!-- 导航 -->
    <nav>
      <router-link :to="{name:'male'}">男频</router-link>
      <router-link :to="{name:'female'}">女频</router-link>
      <router-link :to="{name:'press'}">出版社</router-link>
      <router-link :to="{name:'male1'}">排行</router-link>
    </nav>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "@/components/home/head";
import Footer from "@/components/home/footer.vue";
import Male from "@/components/home/male.vue";
import Female from "@/components/home/female.vue";
import Press from "@/components/home/press.vue";
import Category from "./Category.vue";
import Ranking from "./ranking.vue";

export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    Head,
    Footer,
    Male,
    Female,
    Press,
    Category,
    Ranking
  },
  methods: {
    sun() {}
  }
};
</script>

<style lang="less">
.van-tabs__nav {
  padding: 0 3vw;
  justify-content: space-between;
}
.van-tab {
  flex: none;
}
nav {
  padding: 2vmin 3vmin;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  a{
    line-height: 30px;
    padding:  0 3vw;
  }
}
</style>
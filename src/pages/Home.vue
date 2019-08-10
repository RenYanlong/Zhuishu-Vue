<template>
  <div class="home">
    <!-- 搜索组件 -->

    <div>
      <!-- 首页头组件 -->
      <Head></Head>
      <Category></Category>
      <div class="sequence">
        <ul>
          <router-link :to="{path:'/'}">
            <li :class="[this.$route.path === '/' ? 'isfocus':'']">推荐</li>
          </router-link>
          <router-link :to="{path:'male'}">
            <li :class="[this.$route.path ==='/male' ? 'isfocus':'']">男频</li>
          </router-link>
          <router-link :to="{path:'female'}">
            <li :class="[this.$route.path ==='/female' ? 'isfocus':'']">女频</li>
          </router-link>
          <router-link :to="{path:'press'}">
            <li :class="[this.$route.path ==='/press' ? 'isfocus':'']">出版</li>
          </router-link>
        </ul>
      </div>
      <!-- {{this.$route.path}} -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Head from "@/components/home/Head";
import Footer from "@/components/home/footer.vue";
import Category from "@/components/home/Category";

export default {
  components: {
    Head,
    Footer,
    Category,
  },
  data() {
    return {
      num: 0
    };
  },
  methods: {
    chan(num) {
      this.num = num;
    }
  }
};
</script>

<style lang="scss" scoped>
// style for input
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}

.sequence {
  position: sticky;
  top: pxtovw(50);
  width: 100vw;
  padding: 0 pxtovw(15);
  box-sizing: border-box;
  font-size: pxtovw(13);
  background-color: #fff;
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  li {
    box-sizing: border-box;
    margin-right: pxtovw(15);
    border-bottom: 2px solid #fff;
    line-height: pxtovw(36);
    font-size: pxtovw(14);
    font-weight: 400;
    color: #548687;
    transition: all 0.2s;
  }
  .isfocus{
    font-size: pxtovw(18);
    color: #1F2124;
  }
  .is {
    box-sizing: border-box;
    color: #e53a40;
    border-bottom: 2px solid #e53a40;
    transition: all 0.2s;
  }
}
</style>
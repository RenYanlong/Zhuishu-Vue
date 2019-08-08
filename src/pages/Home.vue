<template>
  <div class="home">
    <!-- 搜索组件 -->
    <transition
      name="cat"
      enter-active-class="animated fadeIn-0.1s"
      leave-active-class="animated fadeOut faster"
    >
      <Category v-show="isActivate"></Category>
    </transition>
    <div>
      <!-- 首页头组件 -->
      <Head></Head>
      <div class="sequence">
        <ul>
          <router-link :to="{path:'/'}">
            <li>推荐</li>
          </router-link>
          <router-link :to="{path:'male'}">
            <li>男频</li>
          </router-link>
          <router-link :to="{path:'female'}">
            <li>女频</li>
          </router-link>
          <router-link :to="{path:'press'}">
            <li>出版</li>
          </router-link>
        </ul>
      </div>
      <!-- {{this.$route.path}} -->
      <transition
        name="chilren"
        enter-active-class="animated slideInRight-0.1s"
        
      >
        <router-view></router-view>
      </transition>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Head from "@/components/home/Head";
import Footer from "@/components/home/footer.vue";
import Category from "@/components/home/Category";
import AllBooks from "./AllBooks";

export default {
  components: {
    Head,
    Footer,
    Category,
    AllBooks
  },
  data() {
    return {
      num: 0,
      iis: "AllBooks"
    };
  },
  computed: {
    isActivate() {
      return this.$store.state.isActivate;
    }
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
  top: pxtovw(40);
  width: 100vw;
  padding: 0 pxtovw(15);
  box-sizing: border-box;
  font-size: pxtovw(12);
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
    line-height: pxtovw(26);
    font-size: pxtovw(14);
    font-weight: 400;
    color: #9dc8c8;
    transition: all 0.2s;
  }
  .is {
    box-sizing: border-box;
    color: #e53a40;
    border-bottom: 2px solid #e53a40;
    transition: all 0.2s;
  }
}
</style>
<template>
  <div class="home">
    <!-- input -->
    <div class="headinput" @click="openSearch">
      <input type="text" value="你想搜一下什么图书？" readonly />
      <i></i>
    </div>
    <!-- Nav -->
    <nav>
      <!-- to classify -->
      <router-link :to="{name:'classify'}" class="classify">
        <i></i>
        <p>搜索</p>
      </router-link>
      <router-link :to="{name:'female'}" class="bangdan">
        <i></i>
        <p>榜单</p>
      </router-link>
      <router-link :to="{name:'press'}" class="tushu">
        <i></i>
        <p>图书</p>
      </router-link>
      <router-link :to="{name:'male1'}" class="shudan">
        <i></i>
        <p>书单</p>
      </router-link>
    </nav>
    <Male />
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
      active: false
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
    openSearch() {
      this.active = true;
      if (this.active) {
        console.log("打开搜索界面");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// style for input
.headinput {
  box-sizing: border-box;
  position: relative;
  padding: 3vw 3vw 0;
  margin-bottom: 4vw;
  input {
    box-sizing: border-box;
    line-height: 9.6vw;
    width: 100%;
    padding: 0 0 0 9vw;
    border: none;
    border-radius: 4.8vw;
    outline: none;
    background-color: rgba(212, 153, 185, 0.3);
    font-size: 3.74vw;
    color: #d499b9;
  }
  i {
    display: inline-block;
    position: absolute;
    left: 5vw;
    top: 4.8vw;
    height: 6vw;
    width: 6vw;
    background-image: url("./../assets/images/sousuo-2.svg");
    background-repeat: no-repeat;
    background-size: 6vw 6vw;
  }
}
// style for Nav
nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 3vw 5vw 0;
  margin-bottom: 4vw;
  a {
    display: flex;
    flex-flow: column nowrap;
    i {
      width: 8.54vw;
      height: 8.54vw;
      background-size: 8.54vw 8.54vw;
    }
    p {
      padding: 0;
      margin: 0;
      margin-top: 2vw;
      font-size: 3.47vw;
      text-align: center;
      color: #d499b9;
    }
  }
  .classify > i {
    background-image: url("./../assets/images/sousuo.svg");
  }
  .bangdan > i {
    background-image: url("./../assets/images/huojian.svg");
  }
  .tushu > i {
    background-image: url("./../assets/images/shijian.svg");
  }
  .shudan > i {
    background-image: url("./../assets/images/xinwen.svg");
  }
}
</style>
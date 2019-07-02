<template>
  <div class="category">
    <Head>为你推荐</Head>
    <div class="categorglists">
      <h3>男生分类</h3>
      <router-link
        v-for="(item, index) in maleCate"
        :key="index"
        :to="{path:'/catemain',query:{gender:male,major:item.major,minor:'全部'}}"
      >
        <Categorylist :info="item"></Categorylist>
      </router-link>
      <h3>女生分类</h3>
      <router-link
        v-for="(item, index) in femaleCate"
        :key="index"
        :to="{path:'/catemain',query:{gender:female,major:item.major,minor:'全部'}}"
      >
        <Categorylist :info="item"></Categorylist>
      </router-link>
      <h3>出版社分类</h3>
      <router-link
        v-for="(item, index) in pressCate"
        :key="index"
        :to="{path:'/catemain',query:{gender:press,major:item.major,minor:'全部'}}"
      >
        <Categorylist :info="item"></Categorylist>
      </router-link>
    </div>
  </div>
</template>
<script>
import Categorylist from "@/components/public/categorylist";
import Head from "@/components/public/head";
import { constants } from "crypto";
export default {
  components: {
    Head,
    Categorylist
  },
  data() {
    return {
      active: 0,
      male: "male",
      female: "female",
      press: "press",
      maleCate: "",
      femaleCate: "",
      pressCate: ""
    };
  },
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
  },
  mounted() {
    if (localStorage.subb) {
      this.maleCate = JSON.parse(localStorage.getItem("subb")).data.male;
      this.femaleCate = JSON.parse(localStorage.getItem("subb")).data.female;
      this.pressCate = JSON.parse(localStorage.getItem("subb")).data.press;
    } else {
      this.$axios.get(`https://novel.juhe.im/sub-categories`).then(sub => {
        localStorage.setItem("subb", JSON.stringify(sub));
        this.maleCate = JSON.parse(localStorage.subb).data.male;
        this.femaleCate = JSON.parse(localStorage.subb).data.female;
        this.pressCate = JSON.parse(localStorage.subb).data.press;
      });
    }
  }
};
</script>
<style lang='less' scoped>
.category {
  display: flex;
  flex-flow: column nowrap;
}
.categorglists {
  background-color: #fff;
  margin-top: 7vh;
  padding-left: 6vw;
  h3 {
    font-size: 28px;
    position: sticky;
    top: 7vh;
    background-color: #fff;
  }
}
</style>
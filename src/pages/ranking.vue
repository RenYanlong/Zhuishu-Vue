<template>
  <div class="ranking">
    <Head>为你推荐</Head>
    <div class="ranklists">
      <h3>男生排行榜</h3>
      <router-link
        v-for="(item, index) in maleinfo"
        :key="index"
        :to="{path:'/rankmain',query:{id:item._id}}"
      >
        <Categorylist :info="item"></Categorylist>
      </router-link>
      <h3>女生排行榜</h3>
      <router-link
        v-for="(item, index) in femaleinfo"
        :key="index"
        :to="{path:'/rankmain',query:{id:item._id}}"
      >
        <Categorylist :info="item"></Categorylist>
      </router-link>
    </div>
  </div>
</template>

<script>
import Categorylist from "@/components/rank/ranklists";
import Head from "@/components/public/head";
export default {
  components: {
    Categorylist,
    Head
  },
  name: "ranking",
  data() {
    return {
      active: 0,
      maleinfo: "",
      femaleinfo: ""
    };
  },
  mounted() {
    this.$axios.get("https://novel.juhe.im/rank-category").then(rank => {
      this.maleinfo = rank.data.male;
      this.femaleinfo = rank.data.female;
    });
  }
};
</script>

<style lang="less" scoped>
.ranking {
  display: flex;
  flex-flow: column nowrap;
}
.ranklists {
  background-color: #fff;
  margin-top: 8vh;
  padding-left: 6vw;
  h3 {
    font-size: 28px;
    position: sticky;
    top: 8vh;
    background-color: #fff;
  }
}

</style>

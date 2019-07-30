<template>
<!-- 排行榜页面 -->
  <div class="ranking">
    <Head>排行榜</Head>
    <section class="ranklists">
      <h3>男生排行榜</h3>
      <router-link
        v-for="(item, index) in maleinfo"
        :key="index"
        :to="{path:'/rankmain',query:{id:item._id}}"
      >
        <div class="categorylist">
          <p>{{item.title}}</p>
        </div>
      </router-link>
    </section>
    <section>
      <h3>女生排行榜</h3>
      <router-link
        v-for="(item, index) in femaleinfo"
        :key="index"
        :to="{path:'/rankmain',query:{id:item._id}}"
      >
        <div class="categorylist">
          <p>{{item.title}}</p>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import Head from "@/components/public/head";

export default {
  components: {
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

<style lang="scss" scoped>
.ranklists {
  padding-top: 8vh;
}
section {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0 0 8vmin;

  h3 {
    font-size: 28px;
  }
}
.categorylist {
  display: flex;
  justify-content: space-between;
  padding: 1vh 0;
  color: #666;
  font-size: 16px;
}
</style>

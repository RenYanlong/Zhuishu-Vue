<template>
  <div class="ranking">
    <van-nav-bar title="排行榜" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="男生">
        <van-cell v-for="(item, index) in maleinfo" :key="index" :title="item.title" is-link :to="{path:'/rankmain',query:{id:item._id}}"/>
      </van-tab>
      <van-tab title="女生">
        <van-cell v-for="(item, index) in femaleinfo" :key="index" :title="item.title" is-link :to="{path:'/rankmain',query:{id:item._id}}"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Book from "./../components/rank/book";
export default {
  components: {
    Book
  },
  name: "ranking",
  data() {
    return {
      active: 0,
      maleinfo: "",
      femaleinfo: ""
    };
  },
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
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

</style>

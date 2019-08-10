<template>
  <section class="comment" v-if="info">
    <h3>评论</h3>
    <div>
      <Comment v-for="(item, index) in info.slice(0,2)" :key="index" :info="item"></Comment>
    </div>
    <router-link :to="{path:'/comment',query:{id:this.$route.query.id}}">查看全部评论</router-link>
  </section>
</template>


<script>
import Comment from "@/components/public/comment";
export default {
  components: {
    Comment
  },

  props: {
    info: [Array, String]
  }
};
</script>


<style lang="scss">
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.comment {
  padding: 0 pxtovw(15);
  margin-bottom: pxtovw(15);
  h3 {
    font-size: pxtovw(16);
    font-weight: 400;
    margin-bottom: pxtovw(10);
  }
  a {
    display: block;
    text-align: center;
    font-size: pxtovw(12);
    line-height: pxtovw(40);
    color: #9dc8c8;
  }
}
</style>
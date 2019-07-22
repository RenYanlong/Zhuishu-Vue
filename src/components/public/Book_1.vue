<template>
  <div class="book_1">
    <router-link :to="{path:'/book',query:{id:bookinfo._id}}">
      <img :src="`http://statics.zhuishushenqi.com${bookinfo.cover}`" />
      <h3>{{bookinfo.title}}</h3>
      <p>{{bookinfo.author}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["bookinfo"],
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.book_1 {
  width: 30vmin;
  img {
    width: 30vmin;
    height: 40vmin;
    border-radius: 2vmin;
  }
  h3 {
    margin: 1vmin 0;
  }
  p {
    font-size: 12px;
  }
}
</style>




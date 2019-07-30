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

<style lang="scss" scoped>
.book_1 {
  width: 30vw;
  margin-bottom: 3vw;
  img {
    width: 30vw;
    height: 40vw;
    border-radius: 1vw;
    margin-bottom: 2vw;
  }
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
}
</style>




<template>
  <div class="book" v-if="bookinfo">
    <router-link class="tobook" :to="{path:'/book',query:{id:bookinfo._id}}">
      <div class="cover">
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" :alt="`${bookinfo.title}`" />
      </div>
      <div class="bookinfo">
        <h3>{{bookinfo.title}}</h3>
        <p class="author">{{bookinfo.author}}</p>
        <p class="introduction">{{bookinfo.shortIntro}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["bookinfo"]
};
</script>

<style lang="less" scoped>
.book {
  margin: 3vmin 0;
}
.cover {
  height: 27vmin;
  width: 20vmin;
  margin-right: 2vmin;
  img {
    height: 27vmin;
    width: 20vmin;
    border-radius: 1vmin;
  }
}
.tobook {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  h3 {
    margin-bottom: 1vmin;
  }
  .author,
  .introduction {
    font-size: 12px;
    line-height: 20px;
    color: #666;
    margin-bottom: 1vmin;
  }
  .introduction {
    padding-right: 5vmin;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

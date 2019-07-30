<template>
  <div class="book" v-if="bookinfo">
    <router-link :to="{path:'/book',query:{id:bookinfo._id}}">
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
  props: ["bookinfo"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.book {
  width: 80vw;
  a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-right: 3vw;
  }
}
.cover {
  height: 30vw;
  width: 21vw;
  margin-right: 3vw;
  img {
    height: 30vw;
    width: 21vw;
    border-radius: 1vw;
  }
}
.bookinfo {
  p,
  h3 {
    padding: 0;
    margin: 0 0 2vw;
  }
  h3{
    font-size: 4.27vw;
  }
  .author {
    font-size: 3.2vw;
    color: #2E294E;
  }
  .introduction {
    font-size: 3.47vw;
    line-height: 6.4vw;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

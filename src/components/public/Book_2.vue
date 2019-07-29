<template>
  <div class="book" v-if="bookinfo">
    <router-link class="tobook" :to="{path:'/book',query:{id:bookinfo._id}}">
      <div class="cover">
        <img
          :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`"
          :alt="`${bookinfo.title}`"
        />
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

<style lang="less" scoped>
.book {
  width: 80vw;
}
.cover {
  height: 27vw;
  width: 20vw;
  margin-right: 3vw;
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
  padding-right: 3vw;
  .author,
  .introduction {
    line-height: 24px;
    color: #666;
    margin-bottom: 1vmin;
    font-size: 13px;
  }
  .introduction {
    display: inline-block;
    background-color: #eee;
    border-radius: 1vw;
    padding: 1vmin;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

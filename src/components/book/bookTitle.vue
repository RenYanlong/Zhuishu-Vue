<template>
  <div class="bookinfo" v-if="bookinfo">
    <div>
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" />
    </div>
    <div class="info">
      <h3>{{bookinfo.title}}</h3>
      <p class="author">作者：{{bookinfo.author}}</p>
      <p>分类：{{bookinfo.majorCateV2}}</p>
      <p>字数：{{bookinfo.wordCount / 10000}}万</p>
      <p>评分：{{bookinfo.rating.score}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  props: ["bookinfo"]
};
</script>
<style lang='scss' scoped>
.bookinfo {
  display: flex;
  flex-flow: row nowrap;
  padding: 3vmin 3vmin 4vmin;

  img {
    height: 40vmin;
    width: 30vmin;
    margin-right: 3vmin;
  }
  .info {
    display: flex;
    flex-flow: column nowrap;
    .author,
    .bookdata,
    p {
      margin: 1vmin 0;
      color: #666;
    }
  }
}
</style>
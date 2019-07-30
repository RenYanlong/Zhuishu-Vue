
<template>
  <div class="book" v-if="bookinfo">
    <div class="tupian">
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.book.cover}`">
    </div>
    <div class="main">
      {{bookinfo.cover}}
      <p class="bookname">{{bookinfo.book.title}}</p>
      <p class="jianjie">{{bookinfo.comment}}</p>
      <p class="zuozhe">{{bookinfo.book.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bookinfo"]
};
</script>

<style lang="scss" scoped>
.book {
  display: flex;
  margin: 2vmin 0;
  .tupian {
    img {
      height: 25vmin;
      width: 18vmin;
      border-radius: 4px;
      margin-right: 2vmin;
    }
  }
  .main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .bookname {
      font-size: 14px;
      font-weight: 600;
    }
    .jianjie {
      font-size: 12px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .zuozhe {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
<template>
  <div class="bookblock">
    <div>
      <img :src="`https://statics.zhuishushenqi.com${book.cover}`" />
    </div>
    <div class="bookinfo">
      <p class="bookname">{{book.title}}</p>
      <p class="popular">{{book.author}} | {{book.bookCount}}本书</p>
      <p class="desc">{{book.desc.trim()}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"]
};
</script>
<style lang='less' scoped>
.bookblock {
  display: flex;
  margin-bottom: 3vmin;
  img {
    height: 25vmin;
    width: 18vmin;
    border-radius: 4px;
    margin-right: 2vmin;
  }
}
.bookinfo {
  display: flex;
  flex-flow: column nowrap;
  .bookname {
    font-size: 14px;
    font-weight: 600;
  }
  .popular {
    font-size: 13px;
    color: #666;
  }
  .desc,
  .popular {
    margin-top: 1vmin;
  }
  .desc {
    font-size: 14px;
  }
}
</style>
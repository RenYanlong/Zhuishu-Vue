<template>
  <section class="bookTitle">
    <div class="bookinfo">
      <div>
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" />
      </div>
      <div class="info">
        <h3>{{bookinfo.title}}</h3>
        <p class="author">作者：{{bookinfo.author}}</p>
        <p
          class="bookdata"
        >{{Math.floor(bookinfo.wordCount / 10000)}}万字 · {{bookinfo.latelyFollower}}人追书</p>
      </div>
    </div>
  </section>
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
<style lang='less' scoped>
.bookTitle {
  display: flex;
  flex-flow: column nowrap;
  padding: 4vmin 3vmin 2vmin;
  .bookinfo {
    display: flex;
    flex-flow: row nowrap;
    img {
      height: 40vmin;
      width: 30vmin;
      border-radius: 4px;
      margin-right: 6vmin;
    }
    .info {
      display: flex;
      flex-flow: column nowrap;
      .author {
        margin-bottom: 10vmin;
      }
      .bookdata {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
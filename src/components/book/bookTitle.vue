<template>
  <div class="bookTitle">
    <div class="bookinfo">
      <div class="img">
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" />
      </div>
      <div class="info">
        <h3>{{bookinfo.title}}</h3>
        <p class="author">{{bookinfo.author}}</p>
        <p>{{Math.floor(bookinfo.wordCount / 10000)}}万字数</p>
      </div>
    </div>
    <div class="bookdata">
      <div>
        <p class="title">追书人数</p>
        <p class="num">{{bookinfo.latelyFollower}}</p>
      </div>
      <div>
        <p class="title">读者留存率</p>
        <p class="num">{{bookinfo.retentionRatio}}%</p>
      </div>
      <div>
        <p class="title">日更新字数</p>
        <p class="num">{{bookinfo.serializeWordCount}}</p>
      </div>
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
<style lang='less' scoped>
.bookTitle {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 4vw;
  .bookinfo {
    display: flex;
    img {
      height: 120px;
      width: 90px;
      margin-right: 4vw;
    }
    .info {
      h3,
      p {
        margin-bottom: 1vh;
      }
      .author {
        color: red;
      }
    }
  }
}
.bookdata {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 2vh 0;
  border-bottom: 1px solid #ddd;
  .title {
    color: @fontColor2;
    font-size: 14px;
    line-height: 20px;
  }
  .num {
    font-size: 18px;
    line-height: 30px;
    color: @fontColor3;
    font-weight: 700;
  }
}
</style>
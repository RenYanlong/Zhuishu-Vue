<template>
  <div class="bookTitle">
    <div class="bookinfo">
      <div>
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`">
      </div>
      <div>
        <h4>{{bookinfo.title}}</h4>
        <ul v-if="bookinfo.tags" class="tags">
          <li v-for="(item, index) in bookinfo.tags" :key="index">{{item}}</li>
        </ul>
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
  padding: 0 6vw;
  .bookinfo {
    display: flex;
    img {
      height: 100px;
      width: 75px;
    }
    .tags {
      display: flex;
      li{
        line-height: 16px;
        padding: 2px;
      }
    }

    .aut {
      span {
        display: inline-block;
        margin-right: 10px;
      }
      .author {
        color: @fontColor3;
      }
    }
    .startlooking {
      width: 120px;
      height: 30px;
      line-height: 30px;
      color: @fontColor5;
      font-size: 14px;
      background-color: @backgroundColor3;
      text-align: center;
    }
  }
}

.bookdata {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 30px 0;
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
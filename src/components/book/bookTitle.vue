<template>
  <div class="bookTitle">
    <div class="bookinfo">
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`">
      <h4>{{bookinfo.title}}</h4>
      <div class="info">
        <p class="tags" v-if="bookinfo.tags">
          <span class="one" v-if="bookinfo.tags[0]">{{bookinfo.tags[0]}}</span>
          <span class="two" v-if="bookinfo.tags[1]">{{bookinfo.tags[1]}}</span>
          <span class="san" v-if="bookinfo.tags[2]">{{bookinfo.tags[2]}}</span>
          <span class="si" v-if="bookinfo.tags[3]">{{bookinfo.tags[3]}}</span>
        </p>
        <p class="aut">
          <span class="author">{{bookinfo.author}}</span>
          <span>{{Math.floor(bookinfo.wordCount / 10000)}}万字数</span>
        </p>
        <p class="startlooking">开始阅读</p>
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
  padding: 10px;
  .bookinfo {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    img {
      height: 150px;
      width: 120px;
    }
    .info {
      height: 150px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 12px;
      margin-left: 30px;
      h4 {
        line-height: 25px;
        font-size: 20px;
        color: @fontColor1;
      }

      .tags {
        display: flex;
        .one {
          background-color: #86bfec;
        }
        .two {
          background-color: #f5b572;
        }
        .san {
          background-color: #86d196;
        }
        .si {
          background-color: #f18c8c;
        }
        .wu {
          background-color: #b9a7cc;
        }
        span {
          padding: 5px 10px;
          border: 1px solid;
          color: @fontColor5;
          background-color: blue;
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
}
.bookdata{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items:center;
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  .title{
    color:@fontColor2;
    font-size: 14px;
    line-height: 20px;
  }
  .num{
    font-size: 18px;
    line-height: 30px;
    color: @fontColor3;
    font-weight: 700;
  }
}
</style>
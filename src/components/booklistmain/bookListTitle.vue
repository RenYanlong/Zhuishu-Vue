<template>
  <div class="title">
    <div class="introduceInfo">
      <div class="cover" v-if="info">
        <img
          :src="`http://statics.zhuishushenqi.com${info.books[0].book.cover}`"
          class="img1"
        >
        <img
          :src="`http://statics.zhuishushenqi.com${info.books[1].book.cover}`"
          class="img2"
        >
        <img
          :src="`http://statics.zhuishushenqi.com${info.books[2].book.cover}`"
          class="img3"
        >
      </div>
      <div class="bookListInfo">
        <div class="name">{{info.title}}</div>
        <div class="booksNum">
          <p>共
            <span>{{info.books.length}}</span>本书
          </p>
          <p>
            <span>{{info.collectorCount}}</span>人收藏
          </p>
        </div>
        <div class="desc">{{info.desc}}</div>
      </div>
    </div>
    <div class="author">
      <img
        class="avatar"
        :src="`http://statics.zhuishushenqi.com${info.author.avatar}`"
      >
      <div class="nikckname">作者：{{info.author.nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>

<style lang='less' scoped>
.title {
  display: inline-block;
  width: 930px;
  margin: 0 auto;
  padding: 30px 0;
  background-color: @backgroundColor4;
  border-bottom: 2px solid @broderC2;
}

.introduceInfo {
  float: left;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 730px;
  .cover {
    position: relative;
    width: 210px;
    height: 150px;
    .img1 {
      position: absolute;
      top: 15px;
      left: 0;
      width: 90px;
      height: 120px;
    }

    .img2 {
      position: absolute;
      left: 45px;
      width: 120px;
      height: 150px;
      z-index: 1;
    }

    .img3 {
      position: absolute;
      top: 15px;
      right: 0px;
      width: 90px;
      height: 120px;
    }
  }
  .bookListInfo {
    box-sizing: border-box;
    width: 440px;
    .name {
      font-size: 16px;
      color: @fontColor;
      font-weight: 700;
    }
    .booksNum {
      font-size: 14px;
      color: #999;
      line-height: 40px;
      p {
        display: inline-block;
        margin: 0 10px 0 0;
        line-height: 25px;
        span {
          color: @backgroundColor3;
        }
      }
    }
    .desc {
      color: @fontColor2;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
  }
}
.author {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  box-sizing: border-box;
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .nickname {
    font-size: 14px;
    color: @fontColor2;
  }
}
</style>
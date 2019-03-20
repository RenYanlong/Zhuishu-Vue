<template>
  <div class="book">
    <router-link tag="a" target="_blank" :to="{path:'/book',query:{id:bookData._id}}">
      <img :src="`https://statics.zhuishushenqi.com${bookData.cover}`">
      <div class="bookinfo">
        <p class="bookname">{{bookData.title}}</p>
        <p class="author">{{bookData.author}}</p>
        <p class="brief">{{bookData.shortIntro}}</p>
        <p class="popular">
          <span>{{bookData.latelyFollower}}</span>人气
          <span class="shu">|</span>
          <span>{{bookData.retentionRatio}}%</span>读者存留
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["bookData"]
};
</script>

<style lang="less" scoped>
.book {
  a {
    display: flex;
    justify-content: flex-start;  
    margin-bottom: 25px; 
  }
  img {
      height: 120px;
      width: 90px;
    }
  .bookinfo {
    margin-left: 10px;
    .bookname {
      color: #333;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
    .author,
    .brief,
    .popular {
      font-size: 13px;
      color: #666;
    }
    .author {
      line-height: 28px;
    }
    .brief {
      height: 40px;
      line-height: 20px;
      margin: 5px 0;
      box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
    }
    .popular {
      line-height: 20px;
      span {
        color: @fontColor3;
      }
      .shu {
        padding: 0 15px;
      }
    }
  }
}
</style>

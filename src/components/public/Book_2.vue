<template>
  <!-- 横向图书模块 -->
  <div class="book" v-if="bookinfo">
    <router-link :to="{path:'/book',query:{id:bookinfo._id}}">
      <div class="cover">
        <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" :alt="`${bookinfo.title}`" />
      </div>
      <div class="bookinfo">
        <h3>{{bookinfo.title}}</h3>
        <p class="introduction">{{bookinfo.shortIntro}}</p>
        <p class="author">
          <i></i>
          <span>{{bookinfo.author}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    bookinfo: Object
  }
};
</script>

<style lang="scss" scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.book {
  a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
}
.cover {
  width: pxtovw(66);
  margin-right: pxtovw(15);
  box-shadow: 0px 0px 6px 2px rgba(212, 153, 185, 0.40);
  img {
    height: pxtovw(88);
    width: pxtovw(66);
    border-radius: pxtovw(2);
  }
}
.bookinfo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  h3 {
    line-height: pxtovw(26);
    font-size: pxtovw(14);
  }
  .introduction {
    line-height: pxtovw(20);
    font-size: pxtovw(12);
    color: #58c9b9;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .author {
    display: flex;
    align-items: center;
    font-size: pxtovw(12);
    color: #58c9b9;
    i {
      display: inline-block;
      height: pxtovw(12);
      width: pxtovw(12);
      margin-right: pxtovw(5);
      background-image: url("./../../assets/images/character-avatar.svg");
      background-repeat: no-repeat;
      background-size: pxtovw(12) pxtovw(12);
    }
  }
}
</style>

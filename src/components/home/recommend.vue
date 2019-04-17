<template>
  <div class="books">
    <slot name="head"></slot>
    <!-- <div class="main">
      <div class="tuijian" v-for="(item, index) in info" :key="index">
        <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
        <p class="title">{{item.title}}</p>
        <p class="zuozhe">{{item.author}}</p>
      </div>
    </div>-->
    <swiper :options="hots" v-if="bannerInfo" class="hots">
      <swiper-slide v-for="(item, index) in info" :key="index">
        <router-link
          :to="{path:'/book',query:{id:item.link}}"
          v-for="(item, index) in info"
          :key="index"
        >
          <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
          <!-- <p class="title">{{item.title}}</p>
          <p class="zuozhe">{{item.author}}</p> -->
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      hots: {
        centeredSlides: true,
        slidesPerView: 2.1,
        spaceBetween: 10
      },
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.tuijian {
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  img {
    width: 70px;
    height: 85px;
    margin-right: 10px;
  }
  .title {
    font-size: 14px;
  }
  .zuozhe {
    font-size: 12px;
  }
}
</style>

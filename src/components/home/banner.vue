<template>
  <div class="banner">
    <swiper :options="swiperOption" v-if="bannerData.length > 0">
      <swiper-slide v-for="(item,key) in bannerData" :key="key">
        <router-link :to="{path:'/book',query:{id:item.link}}">
          <img :src="item.img">
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  props: ["bannerData"],
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 300,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="less">
.banner {
  position: relative;
}
.swiper-button-prev,
.swiper-button-next {
  outline: none;
}
img {
  width: 780px;
  height: 260px;
}
.swiper-pagination {
  bottom: 0;
  left: 50%;
  padding: 5px 0;
  margin: 0 auto;
  span {
    outline: none;
    margin: 0 3px;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
</style>


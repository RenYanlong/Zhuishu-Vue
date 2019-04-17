<template>
  <div class="home">
    <!-- head -->
    <Head></Head>
    <!-- swiper -->
    <swiper :options="swiper" v-if="bannerInfo" class="swiper">
      <swiper-slide v-for="(item, index) in bannerInfo" :key="index">
        <router-link :to="{path:'/book',query:{id:item.link}}">
          <img :src="item.img">
        </router-link>
      </swiper-slide>
    </swiper>
    <!-- 热门推荐 -->
    <div class="popular">
      <h3 slot="head">热门推荐</h3>
      <swiper :options="hots" v-if="finish" class="hots">
        <swiper-slide v-for="(item, index) in finish" :key="index">
          <router-link :to="{path:'/book',query:{id:item.link}}">
            <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
            <h4>{{item.title}}</h4>
            <p>{{item.minorCate}}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 导航 -->
    <Nav></Nav>
    <!-- 本周最热书单 -->
    <div class="hotBooklist">
      <h3>本周最热书单</h3>
      <swiper :options="hotBooklist" v-if="bookLists" class="hots">
        <swiper-slide v-for="(item, index) in bookLists" :key="index">
          <router-link :to="{path:'/book',query:{id:item.link}}">
            <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
            <h5>{{item.title}}</h5>
            <p>{{item.minorCate}}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 起点推荐 -->
    <div class="qidianlist">
      <h3 slot="head">起点推荐</h3>
      <swiper :options="hots" v-if="qidian" class="hots">
        <swiper-slide v-for="(item, index) in qidian" :key="index">
          <router-link :to="{path:'/book',query:{id:item.link}}">
            <img :src="`http://statics.zhuishushenqi.com${item.cover}`">
            <h4>{{item.title}}</h4>
            <p>{{item.minorCate}}</p>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Head from "@/components/home/head";
import HotWords from "@/components/home/hotwords";
import Nav from "@/components/home/nav.vue";
export default {
  data() {
    return {
      swiper: {
        centeredSlides: true,
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      qidians: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      hots: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      hotBooklist: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 20
      },
      bannerInfo: "",
      hotBooks: "",
      qidian: "",
      finish: "",
      bookLists: ""
    };
  },
  components: {
    HotWords,
    Nav,
    Head
  },
  mounted() {
    //请求banner数据
    this.$axios.get("https://www.zhuishushenqi.com/spread").then(spread => {
      this.bannerInfo = spread.data.data;
    });
    this.$axios.get("https://novel.juhe.im/hot-books").then(hot => {
      this.hotBooks = hot.data.newHotWords.slice(0, 6);
    });
    //起点榜
    this.$axios
      .get("https://novel.juhe.im/rank/54d4306c321052167dfb75e4")
      .then(qd => {
        this.qidian = qd.data.ranking.books;
      });
    //hotbooklist
    this.$axios
      .get(
        "https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=1"
      )
      .then(hotbooklist => {
        this.bookLists = hotbooklist.data.bookLists;
      });
    //男生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eea0b731ade4d6c509493")
      .then(ov => {
        this.finish = ov.data.ranking.books.slice(0, 10);
      });
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
.swiper {
  margin: 10px 0;
}
.popular,.qidianlist {
  background-color: #fff;
  padding: 10px 10px 0px;
  p {
    font-size: 12px;
  }
  h3 {
    padding: 10px 0;
  }
  img {
    width: 120px;
    height: 160px;
  }
  h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.hotBooklist {
  background-color: #fff;
  padding: 10px 10px 0px;
  img {
    width: 120px;
    height: 160px;
  }
  h3 {
    padding: 10px 0;
  }
  .tabs {
    padding-top: 40px;
  }
}
</style>
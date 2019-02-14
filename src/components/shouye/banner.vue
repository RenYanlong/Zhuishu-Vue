// banner模块
<template>
  <div id="app">
    <!-- 下面放置slider参数 -->
    <Slider    
      animation="normal"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
      :interval='5000'
      width="940px"
      height='310px'
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
        <!-- banner每页内容 -->
        <router-link to="i._id">
          <img :src= 'i.img' alt="" v-bind:style="styleObject">
        </router-link>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: "App",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: '',
      sliderValue: 2, 
      styleObject:{
        width:'940px',
        height:'310px'
      }  
    };

  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  // api请求
  mounted() {
    this.$axios.get('https://www.zhuishushenqi.com/spread')
      .then((response) => {
        this.list = response.data.data;
      })
  }
};
</script>

// banner最外围设置
<style scoped>
.bannerlist{
  width: 940px;
  height: 310px;
}

</style>


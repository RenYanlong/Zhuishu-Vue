<template>
  <div class="home">
    <div class="homeLeft">
      <category :data="maleData" :sex="sexmale"></category>
      <category :data="femaleData" :sex="sexfemale"></category>
      <category :data="pressData" :sex="sexpress"></category>
      <sharts></sharts>
    </div>
    <div class="homeRight">
      <div class="block">
        <el-carousel height="240px" class="banner">
          <el-carousel-item v-for="(item,index) in bannerInfo" :key="index">
            <router-link :to="{path:'/book',query:{id:item._id}}">
              <img :src="item.img">
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <div class="hotwords">
          <div class="hotTitle">大家都在搜</div>
          <div class="hotMain">
            <ul>
              <li v-for="(list,index) in hotBooks" :key="index">
                <router-link :to="{path:'/book',query:{id:list.book}}">{{list.word}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import category from "@/components/home/category.vue";
import sharts from "@/components/home/charts.vue";
export default {
  data() {
    return {
      name: "home",
      maleData: "",
      femaleData: "",
      pressData: "",
      bannerInfo: "",
      hotBooks: "",
      sexmale: {
        Egender: "male",
        CName: "男生"
      },
      sexfemale: {
        Egender: "female",
        CName: "女生"
      },
      sexpress: {
        Egender: "press",
        CName: "出版社"
      }
    };
  },
  components: {
    category,
    sharts
  },
  mounted() {
    this.$axios.get("https://novel.juhe.im/categories").then(response => {
      this.maleData = response.data.male.slice(0, 9);
      this.femaleData = response.data.female.slice(0, 9);
      this.pressData = response.data.press.slice(0, 9);
    });
    this.$axios.get("http://www.zhuishushenqi.com/spread").then(spread => {
      this.bannerInfo = spread.data.data;
    });
    this.$axios.get("https://novel.juhe.im/hot-books").then(hot => {
      this.hotBooks = hot.data.newHotWords.slice(0, 5);
    });
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  .homeLeft {
    float: left;
    width: 250px;
  }
  .homeRight {
    float: left;
    margin-left: 10px;
    .block {
      .banner {
        width: 720px;
        float: left;
        img {
          width: 720px;
          height: 240px;
        }
      }
    }
    .hotwords {
      float: right;
      box-sizing: border-box;
      background-color: @backgroundColor4;
      border: 1px solid @broderC2;
      width: 210px;
      height: 240px;
      padding: 0 10px;
      margin-left: 10px;
      font-size: 14px;
      .hotTitle {
        border-bottom: 1px solid @broderC2;
        line-height: 50px;
        height: 50px;
      }
      .hotMain {
        margin-top: 10px;
        color: @fontColor1;
        li {
          list-style: none;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
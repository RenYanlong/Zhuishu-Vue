<template>
  <div class="home">
    <div class="homeLeft">
      <category :data="maleData" :sex="sexmale"></category>
      <category :data="femaleData" :sex="sexfemale"></category>
    </div>
    <div class="homeRight">
      <div class="block">
        <banner :dd="bannerInfo"></banner>
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
    <div class="rank">
      <chart :data="potential"></chart>
      <chart :data="qidian"></chart>
      <chart :data="qidianph"></chart>
      <chart :data="vip"></chart>
      
    </div>
    <div class="over">
      <Overbooks :info="wanjie"></Overbooks>
    </div>
  </div>
</template>

<script>
import category from "@/components/home/category.vue";
import chart from "@/components/home/charts.vue";
import banner from "@/components/public/banner.vue";
import Overbooks from "@/components/home/overbooks.vue";

export default {
  data() {
    return {
      name: "home",
      maleData: "",
      femaleData: "",
      pressData: "",
      bannerInfo: "",
      hotBooks: "",
      potential: "",
      qidian: "",
      qidianph: "",
      vip: "",
      wanjie: "",
      nvrs: "",
      sexmale: {
        Egender: "male",
        CName: "男生"
      },
      sexfemale: {
        Egender: "female",
        CName: "女生"
      }
    };
  },
  components: {
    category,
    chart,
    banner,
    Overbooks
  },

  mounted() {
    this.$axios.get("https://novel.juhe.im/categories").then(response => {
      this.maleData = response.data.male.slice(0, 12);
      this.femaleData = response.data.female.slice(0, 12);
      this.pressData = response.data.press.slice(0, 12);
    });
    this.$axios.get("https://www.zhuishushenqi.com/spread").then(spread => {
      this.bannerInfo = spread.data.data;
    });
    this.$axios.get("https://novel.juhe.im/hot-books").then(hot => {
      this.hotBooks = hot.data.newHotWords.slice(0, 5);
    });
    //一周潜力榜
    this.$axios
      .get("https://novel.juhe.im/rank/54d42e72d9de23382e6877fb")
      .then(pot => {
        this.potential = pot.data.ranking;
      });
    //起点榜
    this.$axios
      .get("https://novel.juhe.im/rank/54d4306c321052167dfb75e4")
      .then(qd => {
        this.qidian = qd.data.ranking;
      });
    //票红榜
    this.$axios
      .get("https://novel.juhe.im/rank/550b836229cd462830ff4d1d")
      .then(ph => {
        this.qidianph = ph.data.ranking;
      });
    //vip
    this.$axios
      .get("https://novel.juhe.im/rank/57eb86f0ef9e5a8f20543d7d")
      .then(vipp => {
        this.vip = vipp.data.ranking;
      });
    //
    this.$axios
      .get("https://novel.juhe.im/rank/5a684515fc84c2b8efaa9875")
      .then(rs => {
        this.nvrs = rs.data.ranking;
      });
    //男生完结榜
    this.$axios
      .get("https://novel.juhe.im/rank/564eea0b731ade4d6c509493")
      .then(ov => {
        this.wanjie = ov.data.ranking;
      });
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 1100px;
  margin: 0 auto;
  margin-top: 15px;
  .homeLeft {
    float: left;
    width: 250px;
    margin-top: -15px;
  }
  .homeRight {
    float: left;
    margin-left: 10px;
    .block {
      .banner {
        width: 630px;
        float: left;
        img {
          width: 630px;
          height: 210px;
        }
      }
    }
    .hotwords {
      float: right;
      box-sizing: border-box;
      background-color: @backgroundColor4;
      border: 1px solid @broderC2;
      width: 200px;
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
.rank {
  display: flex;
  justify-content: space-between;
  width: 1100px;
  float: left;
  div {
    width: 250px;
    padding: 0 10px;
  }
}
.over {
  float: left;
  width: 1200px;
}
</style>
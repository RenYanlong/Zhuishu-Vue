<template>
  <div class="charts">
    <div class="chartsHead">
      <span class="chartsName">{{data.title}}</span>
    </div>

    <div class="chartsmain" v-if="data">
      <ul>
        <li v-for="(list,index) in data.books.slice(0,10)" :key="index">
          <div class="chartsnum">
            <span class="one" v-if="index == 0">{{(index + 1)}}</span>
            <span class="two" v-else-if="index == 1">{{(index + 1)}}</span>
            <span class="three" v-else-if="index == 2">{{(index + 1)}}</span>
            <span class="other" v-else>{{(index + 1)}}</span>
            <img :src="`http://statics.zhuishushenqi.com${list.cover}`" v-if="index == 0">
          </div>
          <div class="chartstext">
            <p class="bookName">{{list.title}}</p>
            <p class="follow">{{(list.latelyFollower/10000).toFixed(2)}} 万人气</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  name: "charts"
};
</script>
<style lang="less" scoped>
.charts {
  background-color: @backgroundColor4;
  width: 250px;
  float: left;
  padding: 0 15px;
  box-sizing: border-box;
}

.chartsHead {
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  .chartsName {
    float: left;
    font-size: 18px;
    color: #333;
    font-weight: 700;
  }
}
.chartsmain {
  padding: 13px 0;
  li {
    display: inline-block;
    list-style: none;
    width: 100%;
    font-size: 14px;
    margin-bottom: 13px;
    cursor: pointer;
  }
}
.chartsnum {
  float: left;
  span {
    float: left;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
  .one {
    position: absolute;
    margin-top: 0px;
    background-color: #d82626;
    color: #fff;
  }
  .two {
    position: relative;
    margin-top: 2px;
    background-color: #fd5d32;
    color: #fff;
  }
  .three {
    position: relative;
    margin-top: 2px;
    background-color: #ffba60;
    color: #fff;
  }
  .other {
    position: relative;
    margin-top: 2px;
    background-color: #ededed;
  }
  img {
    width: 70px;
    height: 85px;
  }
}
.chartstext {
  float: left;
  margin-left: 10px;
  p {
    margin: 0;
  }
  .bookName {
    color: #666;
    line-height: 20px;
    font-size: 14px;
  }
  .bookName:hover{
    color: @fontColor3;
  }
  .follow {
    color: #999;
    line-height: 20px;
    font-size: 12px;
  }
}
</style>

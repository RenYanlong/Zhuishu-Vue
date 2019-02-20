<template>
  <div class="chartsmain">
    <ul>
      <li v-for="(list,index) in data" :key="index" class="chartsmalelist">
        <div class="chartsnum">
          <p class="one" v-if="index == 0">{{(index + 1)}}</p>
          <p class="two" v-else-if="index == 1">{{(index + 1)}}</p>
          <p class="san" v-else-if="index == 2">{{(index + 1)}}</p>
          <p class="other" v-else>{{(index + 1) + '.'}}</p>
          <img :src="`http://statics.zhuishushenqi.com${list.cover}`" v-if="index == 0">
        </div>
        <div class="chartstext">
          <p class="chartstitle">{{list.title}}</p>
          <p class="chartsfollower">{{(list.latelyFollower/10000).toFixed(2)}} 万人气</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "chartsmain",
  props: ["data"]
};
</script>

<style lang="less" scoped>
.chartsmale ul {
  margin: 0;
  padding: 0;
}

.chartsmalelist {
  display: inline-block;
  list-style: none;
  width: 100%;
  font-size: 14px;
  margin-bottom: 13px;
}

.chartsnum {
  float: left;
}

.chartsnum p {
  font-weight: 400;
  float: left;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
}

.chartsnum .one {
  position: absolute;
  margin-top: 0px;
  background-color: #d82626;
  color: #fff;
}

.chartsnum .two {
  position: relative;
  margin-top: 2px;
  background-color: #fd5d32;
  color: #fff;
}

.chartsnum .san {
  position: relative;
  margin-top: 2px;
  background-color: #ffba60;
  color: #fff;
}

.chartsnum .other {
  position: relative;
  margin-top: 2px;
}

.chartsnum img {
  width: 70px;
  height: 85px;
}

.chartstext {
  float: left;
  margin-left: 10px;
}

.chartstext p {
  margin: 0;
}

.chartstitle {
  color: #666;
  line-height: 20px;
  font-size: 14px;
}

.chartsfollower {
  color: #999;
  line-height: 20px;
  font-size: 12px;
}
</style>
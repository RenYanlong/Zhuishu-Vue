<template>
  <div class="category" @mouseenter="isshow = true" @mouseleave="isshow = false">
    <div class="title">
      <h3>{{sex.CName}}</h3>
      <router-link :to="{path:'/category'}" v-show="isshow">
        <span>更多</span>
      </router-link>
    </div>
    <div class="cetegoryList">
      <router-link
        :to="{path:'/category-info',query:{gender:sex.Egender,major:List.name}}"
        v-for="(List,index) in data"
        :key="index"
      >
        <p>{{List.name}}</p>
        <p class="bookCount">{{List.bookCount}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "category",
  props: ["data", "sex"],
  data() {
    return {
      isshow: false
    };
  }
};
</script>
<style lang='less' scoped>
.category {
  box-sizing: border-box;
  background-color: #f2f2f2;
  // border: @broderC2 1px solid;
  padding: 0 15px;
  // margin-bottom: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid @broderC2;
  line-height: 39px;
  font-size: 13px;
  a {
    font-size: 13px;
    color: @fontColor1;  
  }
}
.cetegoryList {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around;
  padding: 7px 0;
  font-size: 14px;
  line-height: 30px;
  a {
    flex-basis: 33.3%; 
    margin: 3px 0;
    .bookCount {
      font-size: 12px;
      line-height: 10px;
    }
  }
  a:hover {
      color: @fontColor3;
    }
}
</style>
<template>
  <div class="category" @mouseenter="isshow = true" @mouseleave="isshow = false">
    <div class="title">
      <h3>{{sex.CName}}</h3>
      <router-link :to="{path:'/category'}" v-show="isshow">
        <span>更多</span>
      </router-link>
    </div>
    <div class="cetegoryList">
      <div v-for="(List,index) in data" :key="index">
        <router-link :to="{path:'/category-info',query:{gender:sex.Egender,major:List.name}}">
          <p>{{List.name}}</p>
          <p class="bookCount">{{List.bookCount}}</p>
        </router-link>
      </div>
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
  width: 250px;
  box-sizing: border-box;
  background-color: @backgroundColor4;
  border: @broderC2 1px solid;
  padding: 0 15px;
  margin-bottom: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid @broderC2;
  height: 50px;
  a {
    font-size: 12px;
    color: @fontColor1;
  }
}
.cetegoryList {
  font-size: 13px;
  padding: 12px 0;
  display: inline-block;
  div {
    float: left;
    width: 33.3%;
    padding: 2px 0;
    box-sizing: border-box;
    line-height: 18px;
    .bookCount {
      font-size: 12px;
    }
    a:hover {
      color: @fontColor3;
    }
  }
  div:hover {
    color: @fontColor3;
  }
}
</style>
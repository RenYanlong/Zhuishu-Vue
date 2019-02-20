<template>
  <div class="category">
    <div class="title">
      <span>{{sex.CName}}</span>
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
  props: ["data", "sex"]
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
  .title {
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid @broderC2;
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
}
</style>
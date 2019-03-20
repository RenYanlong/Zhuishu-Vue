<template>
  <div class="hotwords">
    <div class="hotTitle">大家都在搜</div>
    <div class="hotMain">
      <ul>
        <li v-for="(item,key) in hotwordsData" :key="key">
          <router-link :to="{path:'/book',query:{id:item.book}}">{{item.word}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotwordsData']
};
</script>

<style lang="less" scoped>
.hotwords {
  box-sizing: border-box;
  background-color: @backgroundColor4;
  border: 1px solid @broderC2;
  width: 210px;
  height: 260px;
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
</style>

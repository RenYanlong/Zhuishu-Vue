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
  width: 210px;
  height: 260px;
  padding: 0 10px;
  margin-left: 20px;
  font-size: 14px;
  color: #333;
  .hotTitle {
    font-size: 16px;
    border-bottom: 1px solid @broderC2;
    line-height: 50px;
    height: 50px;
  }
  .hotMain {
    margin-top: 10px;
    li {
      list-style: none;
      line-height: 30px;
    }
  }
}
</style>

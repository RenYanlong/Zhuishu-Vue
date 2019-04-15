<template>
  <div class="sonClass" v-if="date">
    <div v-for="(item, index) in date" :key="index" class="main">
      <van-cell-group>
        <van-cell
          class="title"
          :title="item.major"
          is-link
          :to="{path:'/catemain',query:{gender:sex,major:item.major}}"
        />
      </van-cell-group>
      <div class="min" v-if="item.mins.length > 0">
        <div v-for="(min, index) in item.mins" :key="index">
          <router-link
            :to="{path:'/catemain',query:{gender:sex,major:item.major,minor:min}}"
          >{{min}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["date", "sex"]
};
</script>

<style lang="less" scoped>
.sonClass {
  .main {
    background-color: #fff;
    margin-bottom: 5px;
  }
  .title {
    font-size: 14px;
    font-weight: 600;
  }
}
.min {
  display: flex;
  flex-flow: row wrap;
  line-height: 30px;
  padding: 20px 15px;
  div {
    flex: 0 0 25%;
    box-sizing: border-box;
  }
}
</style>

<template>
  <div class="leftNav">
    <ul>
      <li
        v-for="(item,index) in leftNavInfo"
        :key="index"
        @click="isshow = index"
        :class="[isshow == index?'isbut':'']"
      >
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: 0
    };
  },
  props: ["leftNavInfo"]
};
</script>

<style lang="less" scoped>
.leftNav {
  li {
    border-bottom: 1px solid @borderC3;
    box-sizing: border-box;
    list-style: none;
    color: @fontColor2;
    span {
      box-sizing: border-box;
      display: inline-block;
      font-size: 14px;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
    }
  }
  .isbut {
    color: @fontColor4;
    background-color: @backgroundColor5;
    span {
      border-bottom: 4px solid @fontColor4;
    }
  }
}
</style>

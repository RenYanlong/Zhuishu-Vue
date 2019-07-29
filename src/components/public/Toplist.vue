<template >
  <div class="toplist" v-if="info">
    <div class="one">
      <p class="one1">共{{info.length}}部</p>
      <p class="name">
        <slot></slot>
      </p>
    </div>
    <div class="two">
      <ol>
        <li v-for="(item, index) in info.slice(0,4)" :key="index">
          <p>{{index+1}}. {{item.title}}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {};
  }
};
</script>


<style lang="less" scoped>
.toplist {
  width: 60vw;
  height: 60vw;
  background: url("./../../assets/images/qwe.jpg") no-repeat center;
  background-size: 70vw;
  border-radius: 1vw;
  .one {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 30vw;
    align-items: flex-start;
    background-color: rgba(rgba(0, 0, 0, 0.8));
    padding: 1vw 4vw 2vw;
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
  }
  .one1 {
    
    font-size: 12px;
    color: rgba(238, 238, 238, 0.8);
    align-self: flex-end;
    
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
  .two {
    height: 30vw;
    background-color: rgb(48, 25, 25);
    color: rgba(238, 238, 238, 0.8);
    padding: 4vw;
    font-size: 14px;
    line-height: 20px;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    ol {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }
  }
}
</style>

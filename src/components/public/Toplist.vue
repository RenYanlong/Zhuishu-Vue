<template >
  <div class="toplist" v-if="info" :style="{backgroundImage:`url(${bg})`}">
    <div class="top">
      <p class="quantity">共{{info.length}}部</p>
      <h3>
        <slot></slot>
      </h3>
    </div>
    <div class="bottom">
      <ol>
        <li v-for="(item, index) in info.slice(0,4)" :key="index">
          <p>
            <span>{{index+1}}</span>
            {{item.title}}
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  computed: {
    bg: function() {
      return "https://statics.zhuishushenqi.com" + this.info[0].cover;
    }
  }
};
</script>


<style lang="scss" scoped>
.toplist {
  width: 60vw;
  height: 60vw;
  background: no-repeat center;
  background-size: 70vw;
  border-radius: 1vw;
  .top {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    box-sizing: border-box;
    height: 30vw;
    background-color: rgba(0, 0, 0, 0.8);
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    padding: 3vw;
    .quantity {
      padding: 0;
      margin: 0;
      font-size: 3.2vw;
      color: #d499b9;
      text-align: right;
    }
    h3 {
      padding: 0;
      margin: 0;
      font-size: 4.27vw;
      color: #fff;
    }
  }

  .bottom {
    box-sizing: border-box;
    height: 30vw;
    background-color: rgba(51, 43, 44, 0.999);
    color: #d499b9;
    font-size: 3.2vw;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    padding: 3vw;
    ol {
      display: flex;
      flex-flow: column nowrap;
      justify-content:center;
      height: 100%;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        line-height: 5vw;
      }
      p {
        padding: 0;
        margin: 0;

        span {
          display: inline-block;
          width: 4vw;
          text-align: center;
        }
      }
    }
  }
}
</style>

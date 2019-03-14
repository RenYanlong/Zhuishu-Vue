<template>
  <div class="customer">
    <div class="center">
      <div class="follow" @mouseenter="showguanzhu = true" @mouseleave="showguanzhu = false">
        <span>关注</span>
        <div class="followinterface" v-show="showguanzhu">
          <div class="ground followpos"></div>
          <div class="cover followpos"></div>
          <div>
            <img src="../../assets/images/fuwuhao.png">
            <p>微信</p>
          </div>
          <div>
            <img src="../../assets/images/weibo.png">
            <p>微博</p>
          </div>
        </div>
      </div>
      <span class="interval">|</span>
      <div class="contact" @mouseenter="showContactInterface = true" @mouseleave="showContactInterface = false">
        <span>联系客服</span>
        <div class="contactInterface" v-show="showContactInterface">
          <div class="ground contactpos"></div>
          <div class="cover contactpos"></div>
          <div>
            <img src="../../assets/images/fuwuhao.png">
            <p>微信联系客服</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showContactInterface: false,
      showguanzhu: false
    }
  }
};
</script>

<style lang="less" scoped>
.customer {
  background-color: @backgroundColor1;
  border-bottom: 1px solid #e5e5e5;
  .center {
    position: relative;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
    width: 1200px;
    line-height: 35px;
    color: @fontColor1;
    font-size: 13px;
    .follow,
    .contact {
      display: inline-block;
    }
    .interval {
      padding: 0 16px;
    }
    .followpos {
      position: absolute;
      right: 87px;
    }
    .contactpos {
      position: absolute;
      right: 14px;
    }
    .ground {
      top: -15px;
      border-bottom: 15px solid @backgroundColor3;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
    .cover {
      top: -12px;
      border-bottom: 15px solid @backgroundColor4;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
    }
    .followinterface,
    .contactInterface {
      position: absolute;
      display: flex;
      justify-content: space-around;
      right: 0px;
      z-index: 200;
      padding: 20px 10px;
      margin-top: 13px;
      border: 2px solid @backgroundColor3;
      background-color: @backgroundColor4;
      text-align: center;
      img {
        vertical-align: top;
        width: 110px;
        height: 110px;
        margin: 0 10px;
      }
      p {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>

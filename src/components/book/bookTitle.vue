<template>
  <div class="bookinfo" v-if="bookinfo">
    <div class="imgs">
      <img :src="`https://statics.zhuishushenqi.com${bookinfo.cover}`" />
    </div>
    <div class="info">
      <div class="name">
        <h3>{{bookinfo.title}}</h3>
        <p>{{bookinfo.rating.score.toFixed(1)}}</p>
      </div>
      <p class="author">{{bookinfo.author}} / {{bookinfo.updated.slice(0,10)}}更新</p>
      <p class="Desc">{{bookinfo.copyrightDesc}}</p>
      <p class="class">
        <span class="cla1">{{bookinfo.majorCate}}</span>
        <span class="cla2">{{bookinfo.minorCate}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  props: ["bookinfo"]
};
</script>
<style lang='scss' scoped>
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.bookinfo {
  margin: 0;
  padding: 0 pxtovw(15);
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: pxtovw(15);
  .imgs {
    height: pxtovw(120);
    width: pxtovw(90);
    margin-right: pxtovw(10);
    img {
      height: pxtovw(120);
      width: pxtovw(90);
    }
  }
  .info {
    flex: 1;
    .name {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: pxtovw(10);
      h3 {
        margin: 0;
        padding: 0;
        font-size: pxtovw(16);
        font-weight: 400;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: pxtovw(24);
        font-style: italic;
      }
    }
    .author {
      margin: 0;
      padding: 0;
      font-size: pxtovw(12);
      color: #9dc8c8;
      margin-bottom: pxtovw(10);
    }
    .Desc,
    .class {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      font-size: pxtovw(12);
      margin-bottom: pxtovw(10);
    }
    .cla1,
    .cla2 {
      display: inline-block;
      padding: 0 pxtovw(10);
      line-height: pxtovw(20);
      background-color: #9dc8c8;
      border-radius: pxtovw(10);
      margin-right: pxtovw(5);
    }
    .cla1 {
      background-color: #d1b6e1;
    }
    .cla2 {
      background-color: #efdc05;
    }
  }
}
</style>
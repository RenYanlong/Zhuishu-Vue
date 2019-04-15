<template>
  <div class="category">
    <van-nav-bar title="分类" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="男生">
        <SonClass :date="maleCate" :sex="male"></SonClass>
      </van-tab>
      <van-tab title="女生">
        <SonClass :date="femaleCate" :sex="female"></SonClass>
      </van-tab>
      <van-tab title="出版社">
        <SonClass :date="pressCate" :sex="press"></SonClass>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import SonClass from "@/components/category/sonClass.vue";
export default {
  components: {
    SonClass
  },
  data() {
    return {
      active: 0,
      male: "male",
      female:'female',
      press:'press',
      maleCate: "",
      femaleCate: "",
      pressCate: ""
    };
  },
  methods: {
    onClickLeft: function() {
      history.go(-1);
    }
  },
  mounted() {
    this.$axios.get(`https://novel.juhe.im/sub-categories`).then(sub => {
      this.maleCate = sub.data.male;
      this.femaleCate = sub.data.female;
      this.pressCate = sub.data.press;
    });
  }
};
</script>
<style lang='less' scoped>
.van-tabs--line {
  padding-top: 49px;
}
</style>
<template>
  <!-- 分类页面 -->
  <div class="category">
    <section>
      <h3>男生小说</h3>
      <ul>
        <li v-for="(item, i) in maleCate" :key="i">
          <router-link :to="{path:'/catemain',query:{gender:male}}">{{item.major}}</router-link>
        </li>
      </ul>
    </section>
    <section>
      <h3>女生小说</h3>
      <ul>
        <li v-for="(item, i) in femaleCate" :key="i">
          <router-link :to="{path:'/catemain',query:{gender:female}}">{{item.major}}</router-link>
        </li>
      </ul>
    </section>
    <section>
      <h3>图书图库</h3>
      <ul>
        <li v-for="(item, i) in pressCate" :key="i">
          <router-link :to="{path:'/catemain',query:{gender:press}}">{{item.major}}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      male: "male",
      female: "female",
      press: "press",
      maleCate: "",
      femaleCate: "",
      pressCate: ""
    };
  },
  mounted() {
    if (localStorage.subb) {
      this.maleCate = JSON.parse(localStorage.getItem("subb")).data.male;
      this.femaleCate = JSON.parse(localStorage.getItem("subb")).data.female;
      this.pressCate = JSON.parse(localStorage.getItem("subb")).data.press;
    } else {
      this.$axios.get(`https://novel.juhe.im/sub-categories`).then(sub => {
        localStorage.setItem("subb", JSON.stringify(sub));
        this.maleCate = JSON.parse(localStorage.subb).data.male;
        this.femaleCate = JSON.parse(localStorage.subb).data.female;
        this.pressCate = JSON.parse(localStorage.subb).data.press;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
section {
  padding: 3vmin 2vmin;
  border-bottom: 8px solid #f5f5f5;
}
h3{
  margin-bottom: 3vmin;
}
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  li {
    width: 31vmin;
    line-height: 26px;
    text-align: center;
    margin-bottom: 3vmin;
    a{
      display: inline-block;
      width: 20vmin;
      background-color: #f5f5f5;
      border-radius: 1vmin;
    }
  }
}
</style>
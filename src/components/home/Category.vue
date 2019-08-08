<template>
  <!-- 分类页面 -->
  <div class="category" @touchmove.prevent>
    <div class="main">
      <div class="title">
        <p @click="activate">关闭</p>
        <input type="text" placeholder="想看点什么？" />
      </div>
      <section class="male">
        <ul>
          <li v-for="(item, i) in maleCate" :key="i">
            <router-link
              :to="{path:'/catemain',query:{gender:male}}"
              :style="{color:`${col[i+1]}`}"
            >{{item.major}}</router-link>
          </li>
        </ul>
      </section>
      <section class="female">
        <!-- <h3>女生小说</h3> -->
        <ul>
          <li v-for="(item, i) in femaleCate" :key="i">
            <router-link
              :to="{path:'/catemain',query:{gender:female}}"
              :style="{color:`${col[i+2]}`}"
            >{{item.major}}</router-link>
          </li>
        </ul>
      </section>
      <section class="press">
        <!-- <h3>图书图库</h3> -->
        <ul>
          <li v-for="(item, i) in pressCate" :key="i">
            <router-link
              :to="{path:'/catemain',query:{gender:press}}"
              :style="{color:`${col[i]}`}"
            >{{item.major}}</router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      col: [
        "#519D9E",
        "#CE6D39",
        "#EFDC05",
        "#30A9DE",
        "#566270",
        "#881600",
        "#f9d423",
        "#6a60a9",
        "#3ac569",
        "#252c41",
        "#fec8c9",
        "#C65146",
        "#3C3530",
        "#6C49B8"
      ],
      male: "male",
      female: "female",
      press: "press",
      maleCate: "",
      femaleCate: "",
      pressCate: ""
    };
  },
  methods: {
    activate() {
      this.$store.commit("changeisActivate");
    }
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
@function pxtovw($n) {
  @return ($n / 375) * 100vw;
}
.category {
  position: fixed;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  .main{
    overflow: scroll;
  }
  .title {
    padding: 0 pxtovw(15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: pxtovw(45);
    box-shadow: 0px 1px 1px 0px #d7fff1;
    margin-bottom: pxtovw(15);
    p {
      font-size: pxtovw(14);
      padding-right: pxtovw(15);
      color: #e53a40;
    }
    input {
      box-sizing: border-box;
      background-color: #d7fff1;
      outline: none;
      border: none;
      flex: 1;
      height: pxtovw(25);
      border-radius: pxtovw(3);
      padding: 0 pxtovw(15);
      text-align: center;
      color: #e53a40;
      font-size: pxtovw(12);
    }
  }
}
section {
  padding: 0 pxtovw(15) pxtovw(15);
  margin-bottom: pxtovw(15);
  box-shadow: 0px 1px 1px 0px #d7fff1;
  h3 {
    line-height: pxtovw(20);
    font-size: pxtovw(12);
    color: #e53a40;
  }
}
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  li {
    list-style: none;
    width: pxtovw(115);
    text-align: center;
    line-height: pxtovw(36);
    font-size: pxtovw(14);
    font-weight: 400;
  }
}
.press {
  box-shadow: none;
}
</style>
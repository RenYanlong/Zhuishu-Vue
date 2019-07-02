<template>
  <div class="catemain">
    <Head>{{major}}</Head>
    <div class="main">
      <div class="minor">
        <ul>
          <li
            v-for="(item, index) in this.minorlist"
            :key="index"
            :class="[minor == item ? 'isminor':'']"
          >{{item}}</li>
        </ul>
      </div>
      <Book :bookinfo="item" v-for="(item, index) in books" :key="index"></Book>
    </div>
  </div>
</template>

<script>
import Head from "@/components/public/head";
import Book from "@/components/category/book.vue";
export default {
  components: {
    Book,
    Head
  },
  data() {
    return {
      gender: this.$route.query.gender,
      allgender: "",
      major: this.$route.query.major,
      minorlist: "",
      minor: this.$route.query.minor,
      useminor:
        this.$route.query.minor == "全部" ? "" : this.$route.query.minor,
      books: ""
    };
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/category-info?gender=${this.gender}&type=hot&major=${this.major}&minor=${this.useminor}&start=0&limit=20`
      )
      .then(books => {
        this.books = books.data.books;
      });
    if (localStorage.subb) {
      this.allgender = JSON.parse(localStorage.getItem("subb")).data[
        this.gender
      ];
      for (let i = 0; i < this.allgender.length; i++) {
        if (this.allgender[i].major == this.major) {
          this.minorlist = this.allgender[i].mins;
          this.minorlist.unshift("全部");
        }
      }
    } else {
    }
  }
};
</script>

<style lang="less" scoped>
.catemain {
  display: flex;
  flex-flow: column nowrap;
}
.main {
  margin-top: 8vh;
  padding: 0 2vw;
  background-color: #fff;
  .minor {
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        list-style: none;
      }
    }
  }
  .isminor {
    color: red;
  }
}
</style>

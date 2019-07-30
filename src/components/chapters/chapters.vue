<template>
  <div class="chapters">
    <div>
      <h2>{{text.title}}</h2>
      <p v-html="text1"></p>
    </div>
    <!-- <div v-else>
      <p>关注我们浏览全部</p>
      {{text1}}
      <img src="./../../assets/images/fuwuhao.png">
    </div> -->
  </div>
</template>

<script>
export default {
  name: "chapters",
  data() {
    return {
      bookId: this.$route.query.id,
      zhang: this.$route.query.zhang - 1,
      zhangid: "",
      text: "",
      chapters: "",
      chapterslist: ""
    };
  },
  computed: {
    text1() {
      return `<p>${this.text.cpContent.replace(/\n/g, "<br>")}</p>`;
    }
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/book-sources?view=summary&book=${this.bookId}`
      )
      .then(cha => {
        this.chapters = cha.data[0]._id;
        this.$axios
          .get(`https://novel.juhe.im/book-chapters/${this.chapters}`)
          .then(cha => {
            this.chapterslist = encodeURIComponent(
              cha.data.chapters[this.zhang].link
            );
            this.$axios
              .get(`https://novel.juhe.im/chapters/${this.chapterslist}`)
              .then(text => {
                this.text = text.data.chapter;
              });
          });
      });
  }
};
</script>

<style lang="scss" scoped>
.chapters {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fff;
  padding: 60px;
  line-height: 30px;
  box-sizing: border-box;
  h2 {
    height: 40px;
    line-height: 40px;
  }
}
</style>

<template>
  <div class="chapters">
    {{chapterslist}}
    text:{{text}}
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

<style lang="less" scoped>
</style>

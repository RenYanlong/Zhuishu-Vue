<template>
  <div class="listghtmain" v-if="listlength">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      class="ul"
      error-text="请求失败，点击重新加载"
      finished-text="全部加载完了..."
      :error.sync="error"
    >
      <li v-for="(list,index) in categorylist" :key="index">
        <router-link :to="{path:'/bookListDetails',query:{id:list._id}}">
          <Book :bookinfo="list"></Book>
        </router-link>
      </li>
    </van-list>
  </div>
</template>


<script>
import Book from "@/components/public/BookforBooklist";

export default {
  components: {
    Book
  },
  data() {
    return {
      categorylist: [],
      start: 0,
      error: false,
      loading: false,
      finished: false,
      listlength: ""
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.$axios
          .get(
            `https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=${this
              .start * 20}`
          )
          .then(response => {
            for (let i = 0; i < response.data.bookLists.length; i++) {
              this.categorylist.push(response.data.bookLists[i]);
              this.listlength = response.data.total;
            }
          })
          .catch(() => {
            this.error = true;
          });
        this.loading = false;
        this.start++;
        if (this.start * 20 >= this.listlength) {
          this.finished = true;
        }
      }, 2000);
    }
  },
  mounted() {
    this.$axios
      .get(
        `https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0`
      )
      .then(response => {
        this.listlength = response.data.total;
      });
  }
};
</script>

<style lang="scss" scoped>
.listghtmain {
  padding: pxtovw(105) pxtovw(15) 0;

  & > p {
    margin: 0;
    padding: 0;
    font-size: pxtovw(12);
    color: #9dc8c8;
    margin-bottom: pxtovw(15);
  }
  .ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
    }
  }
}
</style>

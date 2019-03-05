<template>
  <div class="category">
    <div class="categoryLeft">
      <div class="leftNav">
        <ul>
          <li
            v-for="(item,index) in subCategories"
            :key="index"
            @click="gender = index,major = item[0].major,changeGender()"
            :class="[gender == index ? 'isbut':'']"
          >
            <span v-if="index == 'male'">男生</span>
            <span v-else-if="index == 'female'">女生</span>
            <span v-else-if="index == 'press'">出版物</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="categoryRight">
      <div class="rightCategoryTitle">
        <p v-if="this.gender == 'female'">女生</p>
        <p v-else-if="this.gender == 'press'">出版物</p>
        <p v-else>男生</p>
      </div>
      <div class="majorSort">
        <ul>
          <li
            v-for="(list,index) in subCategories[gender]"
            :key="index"
            @click="major = list.major,changeMajor()"
            :class="[major == list.major ? 'majorbut' : '']"
          >{{list.major}}</li>
        </ul>
      </div>

      <div class="bookList">
        <div class="book" v-for="list in categorylist.books" :key="list._id">
          <div class="bookImg">
            <img :src="`http://statics.zhuishushenqi.com${list.cover}`">
          </div>
          <div class="bookinfo">
            <p class="bookname">{{list.title}}</p>
            <p class="author">{{list.author}}</p>
            <p class="brief">{{list.shortIntro}}</p>
            <p class="popular">
              <span>{{list.latelyFollower}}</span>人气
              <span class="shu">|</span>
              <span>{{list.retentionRatio}}%</span>读者存留
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gender: this.$route.query.gender ? this.$route.query.gender : "male",
      major: this.$route.query.major ? this.$route.query.major : "",
      category: "",
      subCategories: "",
      categorylist: ""
    };
  },
  computed: {
    //用于重置
    maj: function() {
      if (this.$route.query.major) {
        return this.$route.query.major;
      } else {
        if (this.gender == "male") {
          return "玄幻";
        } else if (this.gender == "female") {
          return "古代言情";
        } else {
          return "出版小说";
        }
      }
    }
  },
  components: {},
  methods: {
    //改变url参数
    changeGender: function() {
      this.$router.push({
        path: "/category",
        query: {
          gender: this.gender
        }
      });
    },
    //改变url参数
    changeMajor: function() {
      this.$router.push({
        path: "/category",
        query: {
          gender: this.gender,
          major: this.major
        }
      });
    }
  },
  watch: {
    $route() {
      //参数改变后的操作
      this.$axios
        .get(
          `https://novel.juhe.im/category-info?type=hot&gender=${
            this.gender
          }&major=${this.major}`
        )
        .then(response => {
          this.categorylist = response.data;
        });
    }
  },
  mounted() {
    if (this.$route.query.major) {
      this.major = this.$route.query.major;
    } else {
      this.major = sub.data[this.gender][0].major;
    }
    this.$axios.get(`https://novel.juhe.im/sub-categories`).then(sub => {
      delete sub.data.picture;
      delete sub.data.ok;
      this.subCategories = sub.data;
    });
    this.$axios
      .get(
        `https://novel.juhe.im/category-info?type=hot&gender=${
          this.gender
        }&major=${this.maj}`
      )
      .then(response => {
        this.categorylist = response.data;
      });
  }
};
</script>
<style lang='less' scoped>
.category {
  width: 1200px;
  margin: 0 auto;
  margin-top: 15px;
  .categoryLeft {
    width: 240px;
    float: left;
    border-top: 4px solid #cab389;
    .leftNav {
      li {
        border-bottom: 1px solid @borderC3;
        box-sizing: border-box;
        list-style: none;
        color: @fontColor2;
        span {
          box-sizing: border-box;
          display: inline-block;
          font-size: 14px;
          height: 60px;
          line-height: 60px;
          padding: 0 30px;
        }
      }
      .isbut {
        color: @fontColor4;
        background-color: @backgroundColor5;
        span {
          border-bottom: 4px solid @fontColor4;
        }
      }
    }
  }
  .categoryRight {
    width: 880px;
    float: right;
    .rightCategoryTitle p {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: 700;
      color: #cab389;
    }
    .majorSort {
      width: 100%;
      height: 30px;
      margin-bottom: 10px;
      li {
        list-style: none;
        float: left;
        padding: 0 10px;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        cursor: pointer;
      }
    }
  }
}
.book {
  box-sizing: border-box;
  width: 410px;
  display: inline-block;
  padding: 15px;
  .bookImg {
    float: left;
    height: 120px;
    width: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bookinfo {
    height: 120px;
    margin-left: 15px;
    float: left;
    width: 275px;
    .bookname {
      color: #333;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
    }
    .author,
    .brief,
    .popular {
      font-size: 12px;
      color: #999;
    }
    .author {
      line-height: 28px;
    }
    .brief {
      height: 40px;
      line-height: 20px;
      margin: 5px 0;
      box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
    }
    .popular {
      line-height: 20px;
      span {
        color: @fontColor3;
      }
      .shu {
        padding: 0 15px;
      }
    }
  }
}
.majorbut {
  background-color: @backgroundColor3;
  color: @fontColor5;
  border-radius: 2px;
}
</style>
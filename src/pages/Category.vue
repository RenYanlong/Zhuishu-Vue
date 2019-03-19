<template>
  <div class="category">
    <div class="nav">
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
    <div class="minorSort" v-if="minorlist != ''">
      <span>具体类型：</span>
      <ul>
        <li
          v-for="(item,index) in minorlist"
          :key="index"
          @click="minor = item,changeMinor()"
          :class="[minor == item ? 'majorbut' : '']"
        >{{item}}</li>
      </ul>
    </div>
    <div class="bookList">
      <div class="book" v-for="list in categorylist.books" :key="list._id">
        <router-link :to="{path:'/book',query:{id:list._id}}">
          <div class="bookImg">
            <img :src="`http://statics.zhuishushenqi.com${list.cover}`" v-if="list.cover">
            <img src="../assets/img-bk.png" v-else>
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
        </router-link>
      </div>
    </div>
    <el-pagination
      background
      :current-page.sync="currentPage"
      :page-size="28"
      layout="total, prev, pager, next,jumper"
      :total="categorylist.total"
      class="pag"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      gender: "",
      majorlist: "",
      major: "",
      minorlist: "",
      minor: "",
      category: "",
      subCategories: "",
      categorylist: ""
    };
  },
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
    },
    changeMinor: function() {
      this.$router.push({
        path: "/category",
        query: {
          gender: this.gender,
          major: this.major,
          minor: this.minor
        }
      });
    },
    //改变ajax请求参数
    getcanshu: function() {
      if (this.$route.query.gender) {
        this.gender = this.$route.query.gender;
        this.majorlist = this.subCategories[this.gender];
      } else {
        this.gender = "male";
        this.majorlist = this.subCategories["male"];
      }

      if (this.$route.query.major) {
        this.major = this.$route.query.major;
      } else {
        this.major = this.subCategories[this.gender][0].major;
      }

      for (const key in this.majorlist) {
        if (this.majorlist[key].major == this.major) {
          this.minorlist = this.majorlist[key].mins;
        }
      }

      if (this.$route.query.minor) {
        this.minor = this.$route.query.minor;
      } else {
        this.minor = "";
      }
    }
  },
  watch: {
    $route() {
      this.getcanshu();
      this.$axios
        .get(
          `https://novel.juhe.im/category-info?type=hot&limit=19&gender=${
            this.gender
          }&major=${this.major}&minor=${this.minor}&start=${this.currentPage}`
        )
        .then(response => {
          this.categorylist = response.data;
        });
    },
    currentPage() {
      this.getcanshu();
      this.$axios
        .get(
          `https://novel.juhe.im/category-info?type=hot&limit=19&gender=${
            this.gender
          }&major=${this.major}&minor=${this.minor}&start=${this.currentPage}`
        )
        .then(response => {
          this.categorylist = response.data;
        });
    }
  },
  mounted() {
    this.$axios.get(`https://novel.juhe.im/sub-categories`).then(sub => {
      delete sub.data.picture;
      delete sub.data.ok;
      this.subCategories = sub.data;
      this.getcanshu();
      this.$axios
        .get(
          `https://novel.juhe.im/category-info?type=hot&limit=19&gender=${
            this.gender
          }&major=${this.major}&minor=${this.minor}&start=${this.currentPage}`
        )
        .then(response => {
          this.categorylist = response.data;
        });
    });
  }
};
</script>
<style lang='less' scoped>
.category {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  margin-top: 15px;
  width: 1000px;
  .nav {
    width: 1000px;
    ul {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      justify-content: flex-start;
      li {
        border: 1px solid #fff;
        box-sizing: border-box;
        list-style: none;
        padding: 0 10px;
        color: @fontColor2;
        height: 40px;
        line-height: 40px;
      }
    }
    .isbut {
      font-weight: 600;
      color: #ed4259;
    }
  }
  .majorSort {
    width: 1000px;
    line-height: 40px;

    font-weight: 400;
    .majorbut {
      font-weight: 600;
      color: #ed4259;
      border-radius: 2px;
    }
    li {
      float: left;
      list-style: none;
      padding: 0 10px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    li:hover {
      color: @fontColor3;
    }
  }
  .minorSort {
    width: 1000px;
    line-height: 40px;
    line-height: 40px;
    .majorbut {
      font-weight: 600;
      color: #ed4259;
    }
    li,
    span {
      float: left;
      list-style: none;
      padding: 0 10px;
      line-height: 30px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    li:hover {
      color: @fontColor3;
    }
  }
}
.bookList{
  margin: 10px 0 20px;
}
.book {
  box-sizing: border-box;
  width: 500px;
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
    width: 345px;
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
</style>
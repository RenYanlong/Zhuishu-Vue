<template>
  <div class="category">
    <div class="left">
      <div class="sex">
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
        <p>分类</p>
        <ul>
          <li
            v-for="(list,index) in subCategories[gender]"
            :key="index"
            @click="major = list.major,changeMajor()"
            :class="[major == list.major ? 'majorbut' : '']"
          >{{list.major}}</li>
        </ul>
      </div>
    </div>
    <div class="bookList">
      <div class="book" v-for="list in categorylist.books" :key="list._id">
        <router-link :to="{path:'/book',query:{id:list._id}}">
          <div class="bookImg">
            <img v-lazy="`http://statics.zhuishushenqi.com${list.cover}`" v-if="list.cover">
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
      <el-pagination
      :current-page.sync="currentPage"
      :page-size="28"
      layout="total, prev, pager, next,jumper"
      :total="categorylist.total"
      class="pag"
    ></el-pagination>
    </div>
    
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
    changeGender: function() {
      this.$router.push({
        path: "/category",
        query: {
          gender: this.gender
        }
      });
    },
    changeMajor: function() {
      this.$router.push({
        path: "/category",
        query: {
          gender: this.gender,
          major: this.major
        }
      });
    },
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
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  list-style: none;
  margin-top: 20px;
  .left {
    width: 230px;
    font-size: 13px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 6px;
    .sex {
      border-bottom: 1px solid #dbdbdb;
      ul {
        display: flex;
        list-style: none;
        li {
          padding: 0 10px;
          border-bottom: 2px solid #fff;
          cursor: pointer;
        }
      }
      .isbut {
        font-weight: 600;
        color: #ed4259;
        border-bottom: 2px solid #ed4259;
      }
    }
  }
  .majorSort {
    padding: 20px 0;
    p {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      li {
        flex: 0 0 33.3%;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
      }
      li:hover {
        color: @fontColor3;
      }
    }
    .majorbut {
      font-weight: 500;
      color: #ed4259;
    }
  }
}
.bookList {
  display: flex;
  flex-flow: column nowrap;
  width: 750px;
  margin-left: 20px;
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  box-sizing: border-box;
  .pag{
    align-self:flex-end;
    padding: 30px 0;

  }
}
.book {
  box-sizing: border-box;
  padding: 20px 0;
  border-bottom: 1px solid #dbdbdb;
  a {
    display: flex;
    justify-content: flex-start;
  }
  img {
    height: 120px;
    width: 90px;
    margin-right: 15px;
  }
  .bookinfo {
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
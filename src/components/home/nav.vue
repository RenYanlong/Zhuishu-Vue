<template>
  <div class="nav">
    <router-link class="classify" :to="{path:'/category'}">
      <span></span>
      分类
    </router-link>
    <router-link class="charts" :to="{path:'/ranking'}">
      <span></span>排行榜
    </router-link>
    <router-link class="over" :to="{path:'/ranking'}">
      <span></span>完本
    </router-link>
    <router-link class="bookslist" :to="{path:'/booklist'}">
      <span></span>书单
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 5px;
  a {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 10px;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-size: 30px 30px;
      background-repeat: no-repeat;
      margin-bottom: 10px;
    }
  }
}
.classify {
  span {
    background-image: url("./../../assets/images/开课指导.svg");
  }
}
.charts {
  span {
    background-image: url("./../../assets/images/排行榜.svg");
  }
}
.over {
  span {
    background-image: url("./../../assets/images/作业.svg");
  }
}
.bookslist {
  span {
    background-image: url("./../../assets/images/help_4-01.svg");
  }
}
</style>

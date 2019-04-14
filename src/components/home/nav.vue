<template>
  <div class="nav">
    <div class="classify">
      <span></span>
      分类
    </div>
    <div class="charts">
      <span></span>排行榜
    </div>
    <div class="over">
      <span></span>完本
    </div>
    <div class="bookslist">
      <span></span>书单
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  div {
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

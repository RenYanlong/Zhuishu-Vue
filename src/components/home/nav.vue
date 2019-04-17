<template>
  <div class="nav">
    <h3>更多</h3>
    <router-link class="classify" :to="{path:'/category'}">
      <p>分类</p>
      <svg
        class="icon"
        width="24px"
        height="24.00px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z"
          fill="#dbdbdb"
        ></path>
      </svg>
    </router-link>
    <router-link class="charts" :to="{path:'/ranking'}">
      <p>排行榜</p>
      <svg
        class="icon"
        width="24px"
        height="24.00px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z"
          fill="#dbdbdb"
        ></path>
      </svg>
    </router-link>
    <router-link class="bookslist" :to="{path:'/booklist'}">
      <p>书单</p>
      <svg
        class="icon"
        width="24px"
        height="24.00px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z"
          fill="#dbdbdb"
        ></path>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
h3 {
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;
  }
.nav {
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  padding: 10px 10px 0px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 0;
    border-bottom: 1px solid #dbdbdb;
    font-weight: 600;
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

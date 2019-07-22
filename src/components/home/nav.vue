<template>
  <section class="nav">
    <router-link class="male" :to="{path:'/'}">
      <p>男频</p>
    </router-link>
    <router-link class="female" :to="{path:'/female'}">
      <p>女频</p>
    </router-link>
    <router-link class="press" :to="{path:'/press'}">
      <p>出版社</p>
    </router-link>
    <router-link class="classify" :to="{path:'/category'}">
      <p>分类</p>
    </router-link>
    <router-link class="ranking" :to="{path:'/ranking'}">
      <p>排行</p>
    </router-link>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 2vmin 3vmin;
  font-size: 16px;
  color: #666;
  font-weight: 500;
  a{
    padding: 0 2vmin;
  }
}
</style>

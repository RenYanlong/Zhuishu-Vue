<template>
  <div class="bookshelf">
    123{{books}}</div>
</template>

<script>
export default {
data () {
  return {
    books:sessionStorage.getItem('booklist')
  }
}
};
</script>

<style lang="less" scoped>
.bookshelf{
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
}
</style>

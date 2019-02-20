<template>
  <div class="home">
    <div class="homeLeft">
      <category :data='maleData' :sex='sexmale'></category>
      <category :data='femaleData' :sex='sexfemale'></category>
      <category :data='pressData' :sex='sexpress'></category>
      <sharts></sharts>
    </div>
    <!-- <div class="homeRight"></div>   -->
  </div>
</template>

<script>
  import category from '@/components/home/category.vue'
  import sharts from '@/components/home/charts.vue'
  export default {
    data() {
      return {
        name: 'home',
        maleData: '',
        femaleData: '',
        pressData: '',
        sexmale: {
          Egender: 'male',
          CName: '男生'
        },
        sexfemale: {
          Egender: 'female',
          CName: '女生'
        },
        sexpress: {
          Egender: 'press',
          CName: '出版社'
        }
      }
    },
    components: {
      category,
      sharts
    },
    mounted() {
      this.$axios.get('https://novel.juhe.im/categories').then((response) => {
        this.maleData = response.data.male.slice(0, 9)
        this.femaleData = response.data.female.slice(0, 9)
        this.pressData = response.data.press.slice(0, 9)
      })
    }
  }
</script>

<style lang="less" scoped>
  .home {
    width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
    .homeLeft {
      width: 250px;
    }
    .homeRight {
      width: 940px;
      margin-left: 10px;
    }
  }
</style>
<template>
  <div class="home">
      <div class="homeLeft">
        <category v-bind:sextype='nansheng' v-bind:type="typemale" v-bind:sex="nan"></category>
        <category v-bind:sextype='nvsheng' v-bind:type="typefemale" v-bind:sex="nv"></category>
        <category v-bind:sextype='press' v-bind:type="typepress" v-bind:sex="pre"></category>
        <sharts></sharts>
      </div>
        <div class="homeRight">
      </div>  
  </div>
</template>

<script>
import category from '@/components/home/category.vue'
import sharts from '@/components/home/charts.vue'

export default {
  data () {
    return {
      name:'home',
      typemale:[],
      typefemale:[],
      typepress:[],
      nansheng:'男生',
      nvsheng:'女生',
      press:'出版社',
      nan:'male',
      nv:'female',
      pre:'press'
    }
  },
  components: {
    category,
    sharts
  },
  mounted(){
    this.$axios
      .get('https://novel.juhe.im/categories')
      .then((response) => {
        this.typemale = response.data.male.slice(0,9),
        this.typefemale = response.data.female.slice(0,9),
        this.typepress = response.data.press.slice(0,9)
      }) 
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 1200px;
  margin: 0 auto;
  .homeLeft{
    
    width: 250px;
  }
  .homeRight{
    width: 940px;
    margin-left: 10px;
  }
}
</style>

<style scoped>




</style>


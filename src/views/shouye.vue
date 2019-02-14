<template>
  <div class="shouye">
    <div class="shouyecenter">
      <div class="Content-left">
        <!-- 分类 -->
        <category v-bind:sextype='nansheng' v-bind:type="typemale" v-bind:sex="nan"></category>
        <category v-bind:sextype='nvsheng' v-bind:type="typefemale" v-bind:sex="nv"></category>
        <category v-bind:sextype='press' v-bind:type="typepress" v-bind:sex="pre"></category>
        <sharts></sharts>
      </div>
      <div class="Content-right">
        <banner></banner>
      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 引入helloworld组件,相当于局部引用
// import HelloWorld from '@/components/HelloWorld.vue'
import category from '@/components/shouye/category.vue'
import banner from '@/components/shouye/banner.vue'
import sharts from '@/components/shouye/charts.vue'

export default {
  data () {
    return {
      name:'shouye',
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
    banner,
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

<style scoped>
.shouye{
  padding-top: 10px;
}
.shouyecenter{
  width: 1200px;
  margin: 0 auto;
}
.Content-left{
  float: left;
  width: 250px;
}

.Content-right{
  width: 940px;
  float: right;
  margin-left: 10px;
}

</style>


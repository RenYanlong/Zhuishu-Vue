<template>
  <div class="booklist">  
    <div class="booklistcenter">
      <div class="listleft">
        <ul>
          <li v-for="list in sortList" 
              @click="defaultSort = list.name;clickhot(list.sort,list.duration,list.start)"
              :key="list.name">
              {{list.name}}
          </li>        
        </ul>
      </div>
      <div class="listright">
        <div class="listghtmain">
          <p>{{defaultSort}}</p>
          <ul>
            <li v-for="list in categorylist" :key="list.name" class="bookb">
              <router-link :to="{path:'/bookListDetails',query:{id:list._id}}" >
                <book :book='list'></book>
              </router-link>  
            </li>
          </ul>     
        </div>
      </div>
    </div>
    <!-- 调用helloworld组件 -->
  </div>
</template>

<script>
// @ is an alias to /src
// 引入helloworld组件,相当于局部引用
// import HelloWorld from '@/components/HelloWorld.vue'
import book from '@/components/public/bookblock.vue'

export default {
  name: 'booklist',
  data(){
    return {
      desort:'',
      deduration:'',
      destart:'',
      categorylist:'',
      defaultSort:'按本周热度',
      sortList:[{name:'按本周热度',sort:'collectorCount',duration:'last-seven-days',start:'0'},
                {name:'按发布时间',sort:'created',duration:'all'},
                {name:'按收藏数量',sort:'collectorCount',duration:'all'}
                ]
    }
  },
  components: {
      book
  },
  methods:{
    clickhot:function(a,b,c){
      this.$router.push({
        push:'/booklist',
        query:{
          sort:a,
          duration:b,
          start:c
        }
      })
    }
  },
  watch:{
    '$route'(){  
      //监控$route.query参数
      this.desort = this.$route.query.sort,
      this.deduration = this.$route.query.duration,
      this.destart = this.$route.query.start
      // this.$axios.get('https://novel.juhe.im/booklists?sort='+ this.desort + '&duration=' + this.deduration)
      // .then((response) => {
      // this.categorylist = response.data.bookLists;
      // })  
    }
  },
  mounted(){
    this.$axios.get('https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0')
    .then((response) => {
    this.categorylist = response.data.bookLists;
    })
  }
}
</script>


<style scoped>

*{
  margin: 0;
  padding: 0;
}
.booklist{
  padding: 15px 0;
}
.bookb{
    box-sizing: border-box;
    width: 410px;
    display: inline-block;
    padding: 15px;
    cursor: pointer;
}

.booklistcenter{
  width: 1200px;
  margin: 0 auto;
}

.listleft{
  float: left;
  width: 240px;
  border-top: 5px #cab389 solid;
}

.listleft li{
  list-style: none;
  height: 60px;
  line-height: 60px;
  width: 100%;
  color: #999;
  font-size: 14px;
  padding-left: 15px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
}

.listright{
  float: right;
  width: 880px;
  padding: 0 15px;
}
.listghtmain p{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-weight: 700;
    color: #cab389;
}

.listrighttitle{
  width: 100%;
  line-height: 60px;
  font-size: 22px;
  font-weight: 700;
  color: #cab389;
}
.listleft .istab{
  color: red;
}
</style>


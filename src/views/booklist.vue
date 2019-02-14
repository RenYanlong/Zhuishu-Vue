<template>
  <div class="booklist">  
    <div class="booklistcenter">
      <div class="listleft">
        <ul>
          <li>按本周热度</li>
          <li>按发布时间</li>
          <li>按收藏数量</li>
        </ul>
      </div>
      <div class="listright">
        <sort></sort>
        <div class="listghtmain">
          <!-- 主内容 -->
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
import sort from '@/components/sort.vue'

export default {
  name: 'booklist',
  components: {
    // HelloWorld
    sort
  },
  data () {
    return {
      
    }
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
}

.listright{
  float: right;
  width: 880px;
  padding: 0 15px;
}

.listrighttitle{
  width: 100%;
  line-height: 60px;
  font-size: 22px;
  font-weight: 700;
  color: #cab389;
}
</style>


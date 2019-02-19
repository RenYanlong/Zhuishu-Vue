// 分类模块
<template>
    <div class="category">
        <div class="title">
            <span class="sex">{{sextype}}</span>
            <span class="more">更多</span>
        </div>
        <div class="cetegory-list">
            <router-link :to="{path:'./category-info',query:{gender:sex,major:List.name,type:'hot'}}"  v-for="List in type" v-bind:key="List.name">
                <p class="name">{{List.name}}</p>
                <p class="bookCount">{{List.bookCount}}</p>
            </router-link>
        </div>
    </div>  
</template>
<script>
export default {
    name:'category',
    props:[
        'type',
        'sextype',
        'sex'
    ]
}
</script>

<style scoped>
.category{
    width: 250px; 
    box-sizing: border-box;
}
.category,.ranktab{
    border: #eee 1px solid;
    padding: 0 15px;
    margin-bottom: 10px;
} 
.title{
    height: 50px;
    line-height: 50px;
    font-size:18px;
    font-weight:700;
    border-bottom: 1px solid #eee;
}
.sex{
    float: left;
}
.more{
    float: right;
    font-size: 12px;
    line-height: 50px;
    font-weight: 200;
    color:#999;
}
.name{
    color: #666;
    font-weight: 400;
}
.bookCount{
    color: #999;
    font-size: 12px;
}
a{
    text-decoration:none;
}
a:link,a:visited,a:hover,a:active{
    color:#666;
    font-size:13px;
}
.cetegory-list{
    padding: 12px 0;
    display: inline-block;
}
.cetegory-list a{
    float: left;
    width: 33.3%;
    padding: 2px 0;
    box-sizing: border-box;
    line-height: 18px;
}
.cetegory-list p{
    margin: 0;
}
</style>


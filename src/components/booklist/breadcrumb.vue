<template>
    <div class="breadcrumb">
        <p>当前位置：</p>
        <span>
            <router-link :to="{path:'/booklist'}">书单</router-link>
        </span>
        <span class="text"></span>
        <p class="booklistname">{{breadcrumbInfo.bookList.title}}</p>
    </div>  
</template>

<script>
export default {
    props:[
        'breadcrumbInfo'
    ]
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    color: #333
}
a:link,a:visited,a:active{
    text-decoration: none;
    color: #333
}
a:hover{
    color: #333 
}
.breadcrumb{
    margin: 0 auto;
    width: 1200px;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    color: #333;
    font-weight: 400;
}
.breadcrumb p{
    display: inline-block;
}
.text{
    display: inline-block;
    border-top: 1px solid;
    border-right: 1px solid;
    width: 8px;
    height: 8px;
    border-color: #333;
    transform: rotate(45deg);
    margin: 0 8px;
}
.booklistname{
    color: #999;
}
</style>

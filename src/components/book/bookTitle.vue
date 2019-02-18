<template>
    <div class="bookTitle">
        <div class="bookinfo">
            <img :src="'https://statics.zhuishushenqi.com' + bookinfo.cover" class="bookimg">
            <div class="info">
                <h4>书名</h4>
                <p>tags</p>
                <p>作者</p>
                <p>更新日期</p>
                <div>开始阅读</div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="bookdata"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input:''
        }
    },
    props:[
        'bookinfo'
    ]
}
</script>

<style scoped>
.bookTitle{
    width: 680px;
}

.bookimg{
    display: inline-block;
}
img{
    float: left;
}
.info{
    float: left;
}
</style>

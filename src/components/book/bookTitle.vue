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
            </div>
        </div>
        <div class="bookdata"></div>
    </div>
</template>

<script>
export default {
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
</style>

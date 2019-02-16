<template>
    <div class="bookListTitle">
        <div class="introduce">
            <div class="introduceInfo">
                <div class="cover">
                    <img :src="'http://statics.zhuishushenqi.com' + bookListinfo.bookList.books[0].book.cover" alt="" class="img1">
                    <img :src="'http://statics.zhuishushenqi.com' + bookListinfo.bookList.books[1].book.cover" alt="" class="img2">
                    <img :src="'http://statics.zhuishushenqi.com' + bookListinfo.bookList.books[2].book.cover" alt="" class="img3">
                </div>
                <div class="bookListInfo">
                    <div class="title">{{bookListinfo.bookList.title}}</div>
                    <div class="booksNum">共<span>{{bookListinfo.bookList.books.length}}</span>本书  <span>{{bookListinfo.bookList.collectorCount}}</span>人收藏</div>
                    <div class="desc">{{bookListinfo.bookList.desc}}</div>
                </div>
            </div>
            <div class="author">
                <img class="avatar" :src="'http://statics.zhuishushenqi.com' + bookListinfo.bookList.author.avatar"> 
                <div class="nickname">作者：{{bookListinfo.bookList.author.nickname}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'bookListinfo'
    ]
}
</script>

<style scoped>
.bookListTitle{
    margin: 0 auto;
    width: 1200px;
    height: 290px;
    background-color: #fff;
}
.introduce{
    margin: 0 auto;
    padding-top: 55px;
    padding-bottom: 30px;
    width: 930px;
    height: 205px;
    border-bottom: 1px solid #ccc;
}
.introduceInfo{
    float: left;
    width: 730px;
    height: 205px;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
}
.author{
    padding-left: 50px;
    box-sizing: border-box;
    float: right;
    width: 200px;
    height: 205px;
}
.cover{
    position: relative;
    float: left;
    width: 210px;
    height: 150px;
}
.img1{
    position: absolute;
    top: 15px;
    left: 0;
    width: 90px;
    height: 120px;
}
.img2{
    position: absolute;
    left: 45px;
    width: 120px;
    height: 150px;
    z-index: 1;
}
.img3{
    position: absolute;
    top: 15px;
    right: 0px;
    width: 90px;
    height: 120px;
}
.bookListInfo{
    float: left;
    box-sizing: border-box;
    padding: 0 40px;
    width: 440px;
}
.title{
    font-size: 16px;
    color: #333;
    font-weight: 700;
}
.booksNum{
    font-size: 14px;
    color: #999;
    line-height: 40px;
    height: 50px;
}
.booksNum span{
    color: #d82626;
}
.desc{
    color: #999;
    font-size: 14px;
}
.avatar{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 30px 0 10px;
}
.nickname{
    font-size: 14px;
    color: #999;
}
</style>

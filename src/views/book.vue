<template>
    <div class="book">
        <div class="center">
            <div class="left">
                <BookTitle :bookinfo = bookInfo></BookTitle>
                <div class="bookSection">
                    <div class="bookIntroduce"></div>
                    <div class="booknew"></div>
                    <div class="bookall"></div>
                </div>
                <div class="bookReviews"></div>
            </div>
            <div class="right">
                <div class="newApp"></div>
                <div class="like"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BookTitle from '@/components/book/bookTitle.vue'
export default {
    components: {
        BookTitle
    },
    data () {
        return {
            bookId:this.$route.query.id,
            bookInfo:'',
            bookSection:'',
            like:''
        }
    },
    mounted () {
        this.$axios.get("https://novel.juhe.im/book-info/" + this.bookId)
        .then((info) => {
            this.bookInfo = info.data
        })
        this.$axios.get("https://novel.juhe.im/recommend/" + this.bookId)
        .then((section) => {
            this.bookSection = section.data
        })
    }
}
</script>

<style scoped>
.book{
    margin: 0 auto;
    width: 1200px;
    background-color: #FFF;
}
.center{
    margin: 0 auto;
    width: 930px;
}
.left{
    float: left;
    width: 690px;
}
.right{
    float: right;
    width: 220px;
}
</style>

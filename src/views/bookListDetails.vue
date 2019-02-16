<template>
    <div class="bookListDetails">
        <Breadcrumb :breadcrumbInfo = 'bookListInfo'></Breadcrumb>
        <div class="bookListMain">
            <BookListTitle :bookListinfo = 'bookListInfo'></BookListTitle>
            <div class="books" >
                <Book v-for="list in bookListInfo.bookList.books" :key="list._id" :bookInfo = list></Book>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/booklist/breadcrumb.vue'
import BookListTitle from '@/components/booklist/bookListTitle.vue'
import Book from '@/components/booklist/book.vue'
export default {   
    data () {
        return {
            bookListInfo:'',
            bookId:this.$route.query.id
        }
    },
    components:{
        Breadcrumb,
        BookListTitle,
        Book
    },
    watch:{
        '$route'(){  
            this.bookId = this.$route.query.id
        }
    },
    mounted(){
        this.$axios.get("https://novel.juhe.im/booklists/" + this.bookId)
        .then((response) => {
            this.bookListInfo = response.data
        })
    }
}
</script>

<style scoped>
.bookListMain{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
}


</style>

import Vue from "vue";
import Router from "vue-router";


import Home from "./components/home/Home.vue";
import Booklist from "./components/booklist/booklist.vue";
import Category from "./components/category/Category.vue";
import BookListDetails from "./components/booklistmain/bookListDetails.vue";
import Book from "./components/book/book.vue";
import Ranking from './components/ranking/ranking.vue'
import Chapters from './components/chapters/chapters.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/booklist",
      name: "booklist",
      component: Booklist
    },
    {
      path: "/bookListDetails",
      name: "bookListDetails",
      component: BookListDetails
    },
    {
      path: "/book",
      name: "book",
      component: Book
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/chapters',
      name: 'chapters',
      component: Chapters
    }

  ]
});

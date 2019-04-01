import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Booklist from "./pages/booklist.vue";
import Category from "./pages/Category.vue";
import BookListDetails from "./components/booklistmain/bookListDetails.vue";
import Book from "./components/book/book.vue";
import Ranking from './pages/ranking.vue';
import Chapters from './components/chapters/chapters.vue';
import Search from './pages/search.vue';
import Bookshelf from './pages/bookshelf.vue';

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
      path:'/bookshelf',
      name:'bookshelf',
      component:Bookshelf
    },
    {
      path: '/search',
      name: 'search',
      component: Search
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

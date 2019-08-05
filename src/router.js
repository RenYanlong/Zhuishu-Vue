import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Booklist from "./pages/Booklist.vue";
import BookListDetails from "./pages/BookListDetails.vue";
import Book from "./pages/Book.vue";
import Chapters from './components/chapters/chapters.vue';
import Catemain from './pages/Catemain.vue';
import Rankmain from './pages/rankmain.vue';
import Comment from './pages/Comment.vue'

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: '/rankmain',
      name: 'rankmain',
      component: Rankmain
    },
    {
      path: "/catemain",
      name: "catemain",
      component: Catemain
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
      path: '/chapters',
      name: 'chapters',
      component: Chapters
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };

    }
  }
});

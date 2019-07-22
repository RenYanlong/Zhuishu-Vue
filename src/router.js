import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home.vue";
import Booklist from "./pages/booklist.vue";
import Category from "./pages/Category.vue";
import BookListDetails from "./pages/bookListDetails.vue";
import Book from "./pages/Book.vue";
import Ranking from './pages/ranking.vue';
import Chapters from './components/chapters/chapters.vue';
import Catemain from './pages/Catemain.vue';
import Rankmain from './pages/rankmain.vue';
import Male from './components/home/male.vue';
import Female from './components/home/female.vue';
import Press from './components/home/press.vue';

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          name: "male",
          component: Male
        },
        {
          path: "female",
          name: "female",
          component: Female
        },
        {
          path: "press",
          name: "press",
          component: Press
        },
        {
          path: "category",
          name: "category",
          component: Category
        },
        {
          path: 'ranking',
          name: 'ranking',
          component: Ranking
        }
      ]
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
    }
  ]
});

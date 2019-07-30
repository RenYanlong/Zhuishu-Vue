import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Booklist from "./pages/booklist.vue";
import BookListDetails from "./pages/bookListDetails.vue";
import Book from "./pages/Book.vue";
import Chapters from './components/chapters/chapters.vue';
import Catemain from './pages/Catemain.vue';
import Rankmain from './pages/rankmain.vue';

// import Male from './components/home/male.vue';
// import Female from './components/home/female.vue';
// import Press from './components/home/press.vue';

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
    }
  ]
});

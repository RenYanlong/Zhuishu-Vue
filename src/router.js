import Vue from 'vue'
import Router from 'vue-router'
//定义路由组件
import Shouye from './views/shouye.vue'
import Booklist from './views/booklist'
import Category from './views/Category'

Vue.use(Router)
//实例化路由对象
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/shouye',
    },
    {
      // 匹配到/shouye时，渲染shouye组件
      path: '/shouye',
      name: 'shouye',
      component: Shouye,
    },
    {
      path:'/category-info',
      name:'category-info',
      component:Category
    },
    {
      // 匹配到/booklist时，渲染booklist组件
      path: '/booklist',
      name: 'booklist',
      component: Booklist
    }
  ],
  linkActiveClass:'h'
})

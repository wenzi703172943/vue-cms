import VueRouter from 'vue-router'

//导入对应的路由组件
import homeContainer from '../components/home/homeContainer.vue'
import memberContainer from '../components/member/memberContainer.vue'
import searchContainer from '../components/search/searchContainer.vue'
import shopcarContainer from '../components/shopcar/shopcarContainer.vue'

let router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcar',component:searchContainer},
    {path:'/search',component:shopcarContainer}
  ],
  linkActiveClass:'mui-active'
})

export default router
import VueRouter from 'vue-router'

//导入首页对应的路由组件
import homeContainer from '../components/home/homeContainer.vue'
import memberContainer from '../components/member/memberContainer.vue'
import searchContainer from '../components/search/searchContainer.vue'
import shopcarContainer from '../components/shopcar/shopcarContainer.vue'

//导入新闻资讯对应的路由组件
import newsList from '../components/news/newsList.vue'
//导入新闻详情页路由组件
import newsInfo from '../components/news/newsInfo.vue'
let router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcar',component:searchContainer},
    {path:'/search',component:shopcarContainer},
    
    //新闻资讯
    {path:'/home/newslist',component:newsList},
    //新闻详情
    {path:'/home/newsinfo/:id',component:newsInfo}
  ],
  linkActiveClass:'mui-active'
})

export default router
//入口文件
// console.log('ok')

//导入Vue模块
import Vue from 'vue'

//导入app 根组件
import app from './App.vue'

//导入mint-ui 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入 mui-ui 样式
import '../lib/css/mui.css'
//导入 mui-ui中扩展的字体图标 样式
import '../lib/css/icons-extra.css'

//安装,注册 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的router路由模块
import router from './router/router.js'

//导入,注册 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置vue-resource 全局配置
Vue.http.options.root = "http://www.lovegf.cn:8899/"
Vue.http.options.emulateJSON = true

//导入格式化时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

//定义全局评论子组件
// import comment from './components/subcomponents/comment.vue'
//参数1: 组件名 决定了将来如何使用 参数2: 组件对象
// Vue.component('comment',comment)


let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

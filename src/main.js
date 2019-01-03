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

//导入路由
import router from './router/router'


let vm = new Vue({
  el: '#app',
  render: c => c(app)
})

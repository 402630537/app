//入口函数文件
import Vue from 'vue'

//按需导入MInt UI
import { Header, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//导入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css' //购物车图标样式在这个css文件中

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入app根组件
import app from './app.vue'


var vm = new Vue({
  el: '#app',
  render: c => c(app), //render渲染app主界面
  router    //路由挂载到vue上
})

import VueRouter from 'vue-router'

//引入路由
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopContainer from './components/ShopContainer.vue'
import SeachContainer from './components/SeachContainer.vue'

//创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopContainer},
    {path:'/serach',component:SeachContainer}
  ],
  linkActiveClass:'mui-active'
});

export default router


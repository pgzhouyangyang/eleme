import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'
//import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(VueLazyload,{
  loading:'../../static/images/load.gif'
})

//导入路由页面组件
import mine from '../pages/mine/mine.vue' //导入我的页面组件
import detail from '../pages/detail/detail.vue' //导入详情页面
import home from '../components/home.vue'
import find from '../pages/find/find.vue'

import check from '../pages/order/check.vue'

import total from '../pages/detail/total.vue'
import order from '../pages/order/order.vue'
import zero from '../pages/detail/zero.vue'
import coupon from '../pages/detail/coupon.vue'
import todayNew from '../pages/detail/todayNew.vue'
import food from '../pages/detail/food.vue'
import digital from '../pages/detail/digital.vue'
import house from '../pages/detail/house.vue'
import beauty from '../pages/detail/beauty.vue'
//天天特价及其二级路由
import sale from '../pages/detail/sale.vue'
import all from '../pages/detail/all.vue'
import brand from '../pages/detail/brand.vue'
import tea from '../pages/detail/tea.vue'
import supermarket from '../pages/detail/supermarket.vue'
import freshfruit from '../pages/detail/freshfruit.vue'
import flowermilk from '../pages/detail/flowermilk.vue'


import accountInfo from '../pages/mine/accountInfo.vue'//导入"我的"的账户页面
import myPrivilege from '../pages/mine/myPrivilege'//导入“我的”的优惠页面
import myScore from '../pages/mine/myScore'//导入“我的”我的积分页面
import myScoreMarket from '../pages/mine/myScoreMarket'//导入“我的”的积分商城页面

import HortFood from '../pages/find/hortFood'
import ProList1 from '../pages/find/hortShow1'
import ProList2 from '../pages/find/hortShow2'
//导入登录页
import login from '../pages/mine/login'

//首页分支路由
import homeShop from "../pages/home/homebranch/homeShop"      //首页商店搜索页
import homeSite from "../pages/home/homebranch/homeSite"      //首页地址选择
import homeFoods from "../pages/home/homebranch/homeFoods"    //首页轮播图跳转页
import shopShow from "../pages/home/homeShopshow/shopShow"    //首页店铺详情页
//首页商品展示下二级路由
import goods from "../pages/home/homeShopshow/shopshowChild/shopgoods/goods"
import score from "../pages/home/homeShopshow/shopshowChild/shopgoods/score"

//“我的”的优惠页面的二级路由
import money from '../pages/mine/children/money'
import paper from '../pages/mine/children/paper'

import wangbo from '../pages/homeDetail/wangbo'

var routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/order',
    component: order
  },
  {
  	path: "/check",
  	component: check
  },
  {
    path: '/mine',
    component: mine
  },//以下为详情页及详情页子页面得跳转路由
  {
    path:'/detail',
    component:detail
  },
  {
    path:'/zero',
    component:zero
  },
  {
    path:'/coupon',
    component:coupon
  },
  {
    path:'/todayNew',
    component:todayNew
  },
  {
    path:'/total',
    component:total
  },
  {
    path:'/food',
    component:food
  },
  {
    path:'/digital',
    component:digital
  },
  {
    path:'/house',
    component:house
  },
  {
    path:'/beauty',
    component:beauty
  },//天天特价路由
  {
    path:'/sale',
    component:sale,
    children:[
      {path:'',component:all},
      {path:'/all',component:all},
      {path:'/brand',component:brand},
      {path:'/tea',component:tea},
      {path:'/supermarket',component:supermarket},
      {path:'/freshfruit',component:freshfruit},
      {path:'/flowermilk',component:flowermilk},
    ]
  },
  //首页分支路由跳转
  {
  	path: "/homeShop",
  	component: homeShop
  },
  {
  	path: "/homeSite",
  	component: homeSite
  },
  {
  	path: "/homeFoods/:id&:flag",
  	component: homeFoods
  },
  {
  	path: "/shopShow/:id",
  	component: shopShow,
  	children: [
  		{
  			path: "",
  			redirect: "goods&:id"
  		},
  		{
  			path: "goods&:id",
  			component: goods
  		},
  		{
  			path: "wangbo",
  			component: wangbo
  		}
  	]
  },
  //以上
  {
    path: '/accountInfo',
    component: accountInfo
  },
  {
  	path:'/login',
  	component:login
  },
  {
  	path: '/myPrivilege',
  	component:myPrivilege,
  	children:[
  		{path:'',component:money},
  		{path:'money',component:money},
  		{path:'paper',component:paper}
  	]
  },
  {
    path: '/myScore',
    component: myScore
  },
  {
  	path:'/myScoreMarket',
  	component:myScoreMarket
  },
  {path:"/hortFood",component:HortFood,children:[
      {path:"",components:{
          a:ProList1
      }},
      {path:"proList/:id",components:{
          a:ProList1,
          b:ProList2
      }}
  ]},
  {
  	path:'/wangbo',
  	component:wangbo
  }
]

let router = new Router({
  mode: "history", //切换路径模式
  routes: routes
})

export default router;

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import detail from './pages/detail/detail'
import VueResource from "vue-resource"

//首页引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//引入Vuex
import Vuex from "vuex"
Vue.use(Vuex)
//创建Vuex实例
let store = new Vuex.Store({
	state: {
		//共享的数据由state定义
		price: [],
		//allcount: []
		sure:0
	},
	mutations: {
		ADD_PRICE(state, food) {
			if(food.count) {
				food.count ++
			}else {
				food.count = 1
				state.price.push(food)
			}
			console.log(state.price)
		},
		REDUCE_PRICE(state, food) {
			food.count --
			for(var i = 0; i < state.price.length; i++){
				if(state.price[i].specfoods[0].food_id == food.specfoods[0].food_id){
					if(food.count < 1)
					state.price.splice(i,1)
				}
			}
			console.log(state.price)
		},
		AREYOU_SURE(state){
			state.sure=1
		}
	},
	getters: {
		allGoods(state) {
			return state.price
		},
		getsure(state){
			return state.sure
		}
	}
})

import axios from 'axios'
Vue.prototype.axios =axios
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  router:router,//把创建出来的路由实例挂载进页面实例中
  store
})

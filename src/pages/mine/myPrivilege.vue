<template>
	<div class="">
		<header>
			<div class="iconfont" @click="back()">&#xe65d;</div>
			<p>我的优惠</p>
			<a href="https://h5.ele.me/exchangehongbao/"> 兑换红包</a>
		</header>
		<nav class="myPriviNav">
			<div>
				<router-link to="/myPrivilege/money">
					红包<span>0</span>个
				</router-link>
			</div>
			<div>
				<router-link to="/myPrivilege/paper">
					商家代金券<span>0</span>张
				</router-link>
				
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		methods:{
			back(){
				return history.back();
			}
		}
	}
</script>

<style scoped>
.iconfont {
	font-family:"iconfont" !important;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'iconfont';  /* project id 336787 */
  src: url('http://at.alicdn.com/t/font_wiszfkr3guo3l3di.eot');
  src: url('http://at.alicdn.com/t/font_wiszfkr3guo3l3di.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_wiszfkr3guo3l3di.woff') format('woff'),
  url('http://at.alicdn.com/t/font_wiszfkr3guo3l3di.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_wiszfkr3guo3l3di.svg#iconfont') format('svg');
}
header{
	background: rgb(0, 151, 255);
	width: 100%;
	height: 1.173333rem;
	line-height: 1.173333rem;
	color: white;
	font-size: .48rem;
	font-weight: 700;
	
	position: fixed;
	left: 0;
	top: 0;
	
	display: flex;
	justify-content: space-between;
}
header > div{
	width: 1.173333rem;
    height: 1.173333rem;
    text-align: center;
}
header > p{
	position: absolute;
	left: 50%;
	top: 0;
	
	/*transform: translateX(-50%);*/
	max-width: 50%;
	margin-left: -1rem;
}
header > a {
	color: white;
	font-size: .373333rem;
	margin-right: .4rem;
	
}
.myPriviNav{
	margin-top: 1.173333rem;
	background: #0097ff;
	font-size: .373333rem;
	border-bottom: 1px solid #eee;
	
	display: flex;
	
}
.myPriviNav > div > a{
	color: white;
	padding: 0 .906667rem;
	font-size: .373333rem;
	font-weight: 500;
	line-height: 1.066667rem;
}
.myPriviNav > div{
	flex-grow: 1;
	
	text-align: center;
}
</style>
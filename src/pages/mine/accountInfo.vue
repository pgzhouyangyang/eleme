<template>
	<div class="myAccount">
		<header>
			<div class="iconfont" @click="back()">&#xe65d;</div>
			<p>账户信息</p>
		</header>
		<ul class="mineInfo">
			<li>
				<span id="">
					头像
				</span>
				<span id="">
					<!--<input type="file" name="" id="" value="" />-->
					<img />
					<i class="iconfont">&#xe606;</i>
				</span>
			</li>
			<li>
				<span id="">
					用户名
				</span>
				<span id="">				
					<i class="username">446771d2d</i>
				</span>
			</li>
		</ul>
		<h2 class="acounttitle">账号绑定</h2>
		<ul class="accountInfo">
			<li>
				<span id="">
					<i class="iconfont accountphone">&#xe6b4;</i>
					手机
				</span>
				<span id="">
					
					<i class="username">13522223333</i>
					<i class="iconfont">&#xe606;</i>
				</span>
			</li>
		</ul>
		<h2 class="acounttitle">安全设置</h2>
		
		<ul class="accountInfo">
			<li>
				<span id="">
					登录密码
				</span>
				<span id="">
					
					<i class="username">未设置</i>
					<i class="iconfont">&#xe606;</i>
				</span>
			</li>
		</ul>
		<router-link class="accountBth" to='/login'>退出登录</router-link>
	</div>
</template>

<script>
	export default {
		methods:{
			back(){
				return history.back()
			}
		}
	}
</script>

<style scoped>
.myAccount{
	font-size: .373333rem;
}	

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

.mineInfo{
	margin-top: 1.573333rem;
	background: white;
}
.mineInfo > li {
	padding: .4rem .373333rem;
	border-bottom: 1px solid #ddd;
	font-size: .426667rem;
	font-weight: 700;
	
	display: flex;
	justify-content: space-between;	
	align-items: center;
}
.mineInfo > li > span > img{
	height: 1.2rem;
	width: 1.2rem;
	border: none;
	border-radius: 50%;
}
.username{
	color: #999;
}
.acounttitle{
	margin: .346667rem 0 0 .4rem;
	color: #666666;
	font-weight: 400;
}
.accountInfo{
	margin-top: .4rem;
	background-color: white;
}
.accountInfo > li {
	padding: .4rem .373333rem;
	border-bottom: 1px solid #ddd;
	font-size: .426667rem;
	font-weight: 700;
	
	display: flex;
	justify-content: space-between;	
	align-items: center;
}

.accountphone{
	background: #10aeff;
	color: white;
	margin-right: .133333rem;
}
.accountBth{
	padding: .293333rem 0;
	margin: .4rem auto;
	background: #d8584a;
	font-size: .453333rem;
	font-weight: 800;
	color: white;
	width: 90%;
	display: block;
	border: none;
	border-radius: .08rem;
	text-align: center;
}
</style>
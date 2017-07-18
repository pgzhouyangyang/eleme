<template>
	<div class="login">
		<header>
			<div class="iconfont" @click="back()">&#xe65d;</div>
			<p>登录</p>
			<a href="https://h5.ele.me/exchangehongbao/"> 密码登录</a>
		</header>
		
		<div class="loginContent">
			<form action="" class="loginForm">
				<section>
					<input type="tel" maxlength="11" placeholder="手机号"/>
					<button>获取验证码</button>
				</section>
				<section>
					<input type="text"placeholder="验证码" />
				</section>
			</form>
			
			<section>
				温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
				<a href="//h5.ele.me/service/agreement/" target="_blank">《用户服务协议》</a>
			</section>
			<router-link to="/mine" class="loginBtn">登录</router-link>
		</div>
		
		<div class="aboutUs">
			<span>关于我们</span>
		</div>
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
	font-weight: 400;
}

.loginContent{
	margin-top: 1.573333rem;
	max-width: 12rem;
	
}
.loginForm{
	border-top: 1px solid #ddd;
}

.loginForm > section{
	padding: 0 .426667rem;
	background: #fff;
	border-bottom: 1px solid #ddd;
	font-size: .4rem;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 1.2rem;
}
.loginForm > section>input{
	border: none;
	padding: .133333rem 0;
	flex-grow: 1;
	line-height: .533333rem;
	height: .8rem;
	color: #333;
}
.loginForm > section>button{
	width: 2.666667rem;
	height: .8rem;
	font-size: .373333rem;
	border-radius: .08rem;
	text-align: center;
	background: #ccc;
	color: #fff;
}
.loginContent > section{
	margin: .24rem auto -.266667rem;
	width: 9.2rem;
	color: #999;
	line-height: .426667rem;
	font-size: .32rem;
	
}
.loginContent > section > a{
	color: #2395FF;
	
}

.loginBtn{
	margin: .533333rem auto 0;
	display: block;
	height: 1.173333rem;
	line-height: 1.173333rem;
	border-radius: .053333rem;
	color: #fff;
	background: #00d762;
	text-align: center;
	font-size: .426667rem;
	width: 9.2rem;
}
.aboutUs{
	margin: .533333rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.aboutUs > span{
	font-size: .32rem;
	padding: 0 .133333rem;
	line-height: .586667rem;
	color: #999;
}
</style>
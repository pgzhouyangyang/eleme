<template>
	<div class="myScore">
		<header>
			<div class="iconfont" @click="back()">&#xe65d;</div>
			<p>我的积分</p>
		</header>
		<section class="myScorehead">
			<div class="myScoreheadWrap">
				<div class="myScoreheadcurrent">
					<span>当前积分</span>
					<router-link to="/home">积分说明</router-link>
					<p><span>300</span>分</p>
				</div>
				<router-link to="/home">积分兑换商品</router-link>
			</div>
		</section>
		<section class="myScorepoint">
			<div class="myScorepointTitle">
				最近30天积分记录
			</div>
			<div class="myScorepointContent">
				<ul>
					<li>
						<span>积分商城兑换礼品</span>
						<p>2017-5-30 <span>-99</span></p>
					</li>
				</ul>
			</div>
		</section>
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

.myScorehead{
	margin-top: 1.173333rem;
	background: #3190e8;
	padding: 0 .133333rem .32rem;
	
}
.myScoreheadWrap{
	padding: .4rem .266667rem;
	background: white;
	color: #999;
	font-size: .16rem;
}
.myScoreheadcurrent > span{
	font-size: .32rem;
}
.myScoreheadcurrent > a{
	color: #3199e8;
	font-size: .346667rem;
	float: right;
}
.myScoreheadcurrent > p {
	color: #6ac20b;
	margin: .266667rem 0;
	font-size: .32rem;
}
.myScoreheadcurrent > p > span {
	font-size: 1.2rem;
}

.myScoreheadWrap > a{
	background: #fe6d47;
	padding: .266667rem;
	font-size: .4rem;
	border-radius: .08rem;
	color: white;
	display: block;
	text-align: center;
}
.myScorepoint{
	
}
.myScorepointTitle{
	font-size: .373333rem;
	padding: .373333rem .4rem;
	color: #666;
}
.myScorepointContent{
	background: white;
}
.myScorepointContent > ul {
	padding: .4rem;
}
.myScorepointContent > ul > li > span{
	font-size: .426667rem;
	
}
.myScorepointContent > ul > li >p{
	margin-top: .133333rem;
	font-size: .32rem;
	color: #999;
}
.myScorepointContent > ul > li > p span {
	margin-top: -.373333rem;
	color: #f90;
	float: right;
	font-size: .426667rem;
}
</style>
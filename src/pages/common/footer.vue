<template>
	<div id="bottomNav" >
  		<!--设置路由锚点，to属性的值是跳转的路径-->
  		<router-link to="/home" class="iconfont"><span>&#xe639;</span><span>外卖</span></router-link>
  		<router-link to="/find" class="iconfont"><span>&#xe69c;</span><span>发现</span></router-link>
  		<router-link to="/order" class="iconfont"><span>&#xe69b;</span><span>订单</span></router-link>
  		<router-link to="/mine" class="iconfont"><span>&#xe69a;</span><span>我的</span></router-link>
  	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	
	#bottomNav{
		padding-top: .12rem;
		width: 100%;
		height: 1.333333rem;
		background-color: white;
		border-top:.0053333rem solid rgba(0,0,0,.1);
		
		position: fixed;
		bottom: 0;
		left: 0;
		
		display: flex;
		align-items: center;
		
		z-index: 999;
	}

	#bottomNav>a{
		text-align: center;
		text-decoration: none;
		width: 25%;
		font-size: .266667rem;
		
		display: flex;
		flex-direction: column;
		
	}
	#bottomNav>a>span:first-of-type{
		font-size: .533333rem;
	}
	
	.iconfont {
	  font-family:"iconfont" !important;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
		
	@font-face {
	  font-family: 'iconfont';  /* project id 336787 */
	  src: url('http://at.alicdn.com/t/font_4jzcwe2ka2359udi.eot');
	  src: url('http://at.alicdn.com/t/font_4jzcwe2ka2359udi.eot?#iefix') format('embedded-opentype'),
	  url('http://at.alicdn.com/t/font_4jzcwe2ka2359udi.woff') format('woff'),
	  url('http://at.alicdn.com/t/font_4jzcwe2ka2359udi.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_4jzcwe2ka2359udi.svg#iconfont') format('svg');
	}
	
	.router-link-active {
		color: #3190e8;
	}


	.router-link-active {
		color: #3190e8;
	}
	
</style>
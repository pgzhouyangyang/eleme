<template>
	<div id="mine">
		<header>
			<div class="iconfont" @click="back()">&#xe65d;</div>
			<p>我的</p>
		</header>
		<router-link class="mineInfo" to="/accountInfo">
			<span class="iconfont mineLogo">&#xe605;</span>
			<div class="myinfo">
				<p class="username">446771d2d</p>
				<p class="myphone"><span class="iconfont">&#xe6b4;</span><em>13522223333</em></p>
			</div>
			<router-link to="/accountInfo"class="iconfont myright" >&#xe606;</router-link>
		</router-link>
		
		
		<div class="mycheap">
			<router-link to="/myPrivilege" class="mycheapCard" >
				<p>
					<span>0</span>
					<i>个</i>
				</p>
				<p>优惠</p>
				
			</router-link>
			<router-link to="/myScore" class="mycheapScore" >
				<p>
					<span>300</span>
					<i>分</i>
				</p>
				<p>积分</p>
			</router-link>
		</div>
		<section class="myeleme">
			<router-link to="/order">
				<aside class="iconfont">&#xe601;</aside>
				<div >
					我的订单
					<span class="iconfont"> &#xe606;</span>
				</div>
			</router-link>
			<a href="http://elemecopy.applinzi.com">
				<aside class="iconfont">&#xe613;</aside>
				<div >
					积分商城
					<span class="iconfont">&#xe606; </span>
				</div>
			</a>
			<router-link to="/wangbo">
				<aside class="iconfont">&#xe602;</aside>
				<div >
					饿了么会员卡
					<span class="iconfont"> &#xe606;</span>
				</div>
			</router-link>
			
		</section>
		<section class="myeleme">
			<router-link to="/order">
				<aside class="iconfont">&#xe600;</aside>
				<div >
					服务中心
					<span class="iconfont"> &#xe606;</span>
				</div>
			</router-link>
			<router-link to="/order">
				<aside class="iconfont myservice">&#xe639;</aside>
				<div >
					下载饿了么APP
					<span class="iconfont">&#xe606; </span>
				</div>
			</router-link>
				
		</section>
		<bottom-nav></bottom-nav>
	</div>
	
</template>

<script>
	/*导入底部导航*/
	import bottomNav from '../common/footer.vue'

	export default {
	  components: {
	    bottomNav
	  },
	  methods:{
	  	back(){
	  		return history.back()
	  	}
	  }
	  
	}
	// !function(e,t){function i(){var t=n.getBoundingClientRect().width;t/m>540&&(t=540*m);var i=t/10;n.style.fontSize=i+"px",s.rem=e.rem=i}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=0,d=0,s=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(d=parseFloat(p[1]),m=parseInt(1/d))}else if(l){var c=l.getAttribute("content");if(c){var u=c.match(/initial\-dpr=([\d\.]+)/),f=c.match(/maximum\-dpr=([\d\.]+)/);u&&(m=parseFloat(u[1]),d=parseFloat((1/m).toFixed(2))),f&&(m=parseFloat(f[1]),d=parseFloat((1/m).toFixed(2)))}}if(!m&&!d){var v=e.navigator.appVersion.match(/android/gi),h=e.chrome,x=e.navigator.appVersion.match(/iphone|ipad/gi),b=e.devicePixelRatio,w=(v||x)&&h;m=x||w?b>=3&&(!m||m>=3)?3:b>=2&&(!m||m>=2)?2:1:1,d=1/m}if(n.setAttribute("data-dpr",m),!o)if(o=r.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var g=r.createElement("div");g.appendChild(o),r.write(g.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*m+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*m+"px"},!1),i(),s.dpr=e.dpr=m,s.refreshRem=i,s.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},s.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))
</script>

<style scoped>

#mine{
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
	
	max-width: 50%;
	margin-left: -.5rem;
}

.mineInfo{
	margin-top: 1.173333rem;;
	font-size: .48rem;
	background: #0097ff;
	color: #fff;
	padding: .666667rem .4rem;
	
	
	display: flex;
	align-items: center;
}
.mineLogo{
	width: 1.6rem;
	height: 1.6rem;
	line-height: 1.6rem;
	font-size: 1.6rem;
	background: #999;
	color: #fff;
	border-radius: 50%;
}
.myinfo{
	margin-left: .48rem;
	flex-grow: 1;
}
.myinfo > .username{
	font-size: .586667rem;
	font-weight: 400;
	margin-bottom: .213333rem;
}
.myinfo > .myphone{
	font-size: .373333rem;
}
.myphone > span{
	margin-right: .066667rem;
}
.myright{
	color: #fff;
}
.mycheap{
	width: 100%;
	height: 2.24rem;
	border-bottom: 1px solid #ddd;
	background: white;
	text-align: center;
	
	display: table;
	
}
.mycheap > .mycheapCard {
	display: table-cell;
	width: 33.33%;
	vertical-align: middle;
	border-right: 1px solid #ddd;
	font-size: .32rem;
}
.mycheapCard > p > span{
	color: rgb(255, 95, 62);
	padding: .453333rem 0 .293333rem;
	font-size: .693333rem;
	font-weight: 700;
	line-height: .693333rem;
}
.mycheapCard > p:last-of-type{
	margin-top: .133333rem;
}
.mycheap > .mycheapScore{
	display: table-cell;
	width: 33.33%;
	vertical-align: middle;
	font-size: .32rem;
}

.mycheapScore > p > span{
	color: rgb(106, 194, 11);
	padding: .453333rem 0 .293333rem;
	font-size: .693333rem;
	font-weight: 700;
	line-height: .693333rem;
}
.mycheapScore > p:last-of-type{
	margin-top: .133333rem;
}
.myeleme{
	margin-top: .266667rem;
	background: white;
	border-top:1px solid #ddd ;
	border-bottom: 1px solid #ddd;
	font-size: .453333rem;
	line-height: .453333rem;
}
.myeleme > a{
	display: flex;
	align-items: center;
	
	padding-left: .666667rem;
	
}
.myeleme > a > aside{
	margin:  0 .266667rem 0 -.266667rem;
}
.myeleme > a:first-of-type >aside{
	color: rgb(74, 165, 240);
}

.myeleme > a:nth-of-type(2) >aside{
	color: rgb(252, 123, 83);
}
.myeleme > a:last-of-type >aside{
	color: rgb(255, 198, 54);
}
.myeleme > a:nth-of-type(2) >.myservice{
	color: rgb(74, 165, 240);

}
.myeleme > a >div{
	padding: .333333rem .266667rem .333333rem 0;
	width: 100%;
	border-bottom: 1px solid #ddd;
	
	display: flex;
	justify-content: space-between;
	
}
</style>
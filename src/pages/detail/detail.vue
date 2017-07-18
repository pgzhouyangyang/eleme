<template>
<div id="lunbo">
	<router-link to:"http://www.baidu.com">百度一下你就知道</router-link>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for='item in alldata.swiper' :key="item"><img :src="item.img">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
		<!--<div v-for='item in alldata'><img :src='item.img'/></div>-->
	</div>
	<div id="score">
		<a class="credit">
			<i></i>
			<span>积分 <b>0</b></span>
		</a>
		<a>
			<i></i>
			<span></span>
		</a>
		<a class="credit his">
			<i></i>
			<span>兑换记录 </span>
		</a>
		<a>
			<i></i>
			<span></span>
		</a>
	</div>
	<div id="logos">
		<div>
			<router-link :to="item.item[2].url" v-for='item in alldata.menu' :key="item">
				<img :src='item.item[0].img'>
				<p>{{item.item[1].des}}</p>
			</router-link>

		</div>
	</div>
	<div id="free">
		<a>
			<img src="//yun.duiba.com.cn/images/201706/gk2u38c9p4.jpg" class='zero'>
		</a>
		<div>
			<a>
				<div>
					<img src="//yun.duiba.com.cn/images/201706/xddb0sz3xo.jpg" class='zero'>
				</div>
			</a>
			<a>
				<div>
					<img src="//yun.duiba.com.cn/images/201706/7aewlm3zxp.png" class='zero'>
				</div>
			</a>
		</div>
	</div>
	<div id="main" class="clearfix">
		<div id="main_header">大家都在兑</div>
		<div id="main_rewards">
			<a class="clearfix" v-for="item in alldata.rewardes" :key="item">
				<div class="rewards_des">
					<h3>{{item.item[0].name}}</h3>
					<span class="rewards_score">{{item.item[1].score}} <b>积分</b></span>
					<span class="rewards_draw">抽奖</span>
				</div>
				<div class="rewards_img">
					<img :src="item.item[2].img">
				</div>
			</a>
		</div>
	</div>
	<div id="des_footer">
		<p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
		<p>合作请联系：ejifen@ele.me</p>
	</div>
</div>
</template>

<script scoped>
import vue from 'vue'
import Swiper from 'swiper'

export default {
	mounted() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: true,
			loopAdditionalSlides:1,
			autoplay: 1000,
			observer: true,
			pagination: '.swiper-pagination'
		})
	},
	data() {
		return {
			alldata: [],
			datas: []
		}
	},
	created() {
		vue.http.get('../../../static/data/detail.json').then(data => {
			this.alldata = data.body
			console.log(this.alldata.rewardes)
		}, err => {
			console.log(err)
		})
	}

}
</script>

<style scoped>
@import "./swiper.css";
* {
	box-sizing: border-box
}

a {
	display: block
}

.swiper-slide>img {
	width: 100%;
}

#score {
	display: table;
	height: .38rem;
	width: 100%;
	padding: 0.1rem 0;
	background-color: #fff;
	margin-bottom: .08rem;
	box-sizing: border-box
}

.credit {
	border-right: 1px solid #e5e5e5;
	display: table-cell;
	text-align: center;
	width: 50%;
	box-sizing: border-box
}

.credit i {
	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAMAAAB+ITwmAAAAb1BMVEUAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7tw2nRgAAAAJHRSTlMAMNFvNgIP+u7IZPTmqCsX3L64lVlSR0IGhQqwmnIiIeCNiHWMmKFFAAAA90lEQVQ4y7WSx3bDIBAAsURRtdWb7dT5/29MHPGICBxy8VzYJ0bsLov4N+c6w6dsJ88YDBHW4xmGZDj5TB0MzlAtjQ5yqyuVdmlgFiGXkt6GuqIWMVKQe9STXaKKysnVI5BQiDgS0sfaWVXoInWMLsHyvRjsHb1z4LRXDPKozHniuOr9YPOjtCRaxFH1nkga2i2u9NhORuiWmLHChw0LqFVo3OHmPn9C72+HP67e5KPp1Q3unjEb8u1Pe/4YZBlexdLB+PvGMppwtFuOmW38WlG9iBCdUMp9Mg3ZORTcjnND3Pk2Y4ircmpd3VFkCX73ITLnbRDP4AvgBhnxd27pJAAAAABJRU5ErkJggg==');
	background-size: 100% 100%;
	display: inline-block;
	width: .17rem;
	height: .15rem;
	vertical-align: middle;
	box-sizing: border-box
}

.credit span {
	color: black;
	vertical-align: middle;
	font-size: .12rem;
}

.credit span b {
	font-weight: normal;
	color: #ff6000;
}

.his i {
	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAMAAAB+ITwmAAAASFBMVEUAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7suq4vdAAAAF3RSTlMAECCBQOGg8MBg61E79y4b5tjSakMwBJYmHaQAAACJSURBVDjLzdHdDsIgDIbhAmoVGOzX7/7vVEMiKbMzGg+25/iFpin9ZIQwqgkahlrzwMxAsi8AMw+zSPr1SxR9MyMuC3CugGgTIJLyAUPgO5n3JJ+ETEqysnMyXappI+mAaiMJrgp7bxRvRZSJvlH3IXHXwh3hRv8n1kjZPqUm8VB5kQSvFoG+9ADpOxYXD3z/zwAAAABJRU5ErkJggg==');
	background-size: 100% 100%
}

#logos {
	padding-left: 0.056rem;
	padding-right: 0.056rem;
	position: relative;
	background: #FFF;
	width: 100%;
	margin-bottom: .08rem;
	padding-top: .13rem;
	overflow: hidden;
}

#logos a {
	float: left;
	text-align: center;
	margin-bottom: .13rem;
	width: .772rem;
}

#logos a img {
	width: .38rem;
	height: .38rem;
	margin-bottom: .065rem;
	border-radius: 100%;
	max-width: 100%;
	vertical-align: middle;
	border: 0;
}

#logos a p {
	font-family: PingFangSC-Regular;
	font-size: .1rem;
	color: #666;
	letter-spacing: 0;
}

#free {
	width: 100%;
	margin: .042666666666666665rem 0;
	background: #fff;
	position: relative;
	border: solid #EEE;
	border-width: 1px 0;
	min-height: 1.0752rem;
}

#free>a {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 1.6042666666666667rem;
	height: 1.0666666666666667rem;
	overflow: hidden;
	border-right: 1px solid #EEE;
}

#free>div {
	padding-left: 1.6085333333333334rem;
	overflow: hidden;
}

#free>div div {
	width: 1.5957333333333332rem;
	height: .5333333333333333rem;
	border-bottom: 1px solid #EEE;
}

.zero {
	width: 100%;
	height: 100%;
	max-width: 100%;
	vertical-align: middle;
	border: 0;
}

#main {
	margin-bottom: .05rem;
}

#main_header {
	position: relative;
	height: .3rem;
	line-height: .3rem;
	padding-left: .12rem;
	background-color: #fff;
	font-size: .11rem;
	color: #666;
}

#main_rewards>a {
	float: left;
	position: relative;
	background: #fff;
	width: 50%;
	border-right: 1px solid #f5f5f5;
	border-top: 1px solid #f5f5f5;
	overflow: hidden;
}

.rewards_des {
	padding: .09rem .05rem 0rem .12rem;
	min-height: .49rem;
}

.rewards_des h3 {
	font-weight: 400;
	font-size: .12rem;
	line-height: 1.3;
	color: #333;
	text-align: left;
	margin-bottom: .05rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.rewards_des b {
	font-weight: normal;
	color: #000
}

.rewards_score {
	font-size: .11rem;
	position: relative;
	display: inline-block;
	vertical-align: top;
	color: #ff6000
}

.rewards_draw {
	font-size: .1rem;
	color: #fff;
	padding: .015rem .025rem;
	margin-left: .025rem;
	border-radius: .02rem;
	text-align: center;
	vertical-align: top;
	transform: scale(0.9);
	transform-origin: 0 0;
	display: inline-block;
	background-color: #f43632;
}

.rewards_img {
	width: 100%;
	padding: 0 .13rem .13rem .13rem;
}

.rewards_img>img {
	width: 100%;
	height: .833rem;
}

#des_footer {
	width: 100%;
	height: .36rem;
}

#des_footer>p:first-of-type {
	color: rgb(143, 132, 132);
	padding-top: .115rem;
	width: 100%;
	text-align: center;
	font-size: .1rem;
}

#des_footer>p:last-of-type {
	padding: 0.05rem;
	color: rgb(143, 132, 132);
	width: 100%;
	text-align: center;
	font-size: .1rem;
}
</style>


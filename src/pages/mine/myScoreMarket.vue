<template>
	
	<div class="myScoreMarket">
		<!--轮播图-->
		<section class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in allData">
						<img v-bind:src="item.image"/>
					</div>
				</div>
				<div class="swiper-pagination">
					
				</div>
			</div>
		</section>
		<section class="myScoreMarketNav">
			<a>
				<i class="iconfont">&#xe614;</i>
				<span >
					积分<em>300</em>
				</span>
			</a>
			<router-link to="/homeDetail">
				<i class="iconfont">&#xe694;</i>
				<span >
					兑换记录
				</span>
			</router-link>
		</section>
		
		<section class="littleNav">
			<div class="littleNavWrap">
				<a href="#" v-for="value in littleData">
					<img v-bind:src="value.logo"/>
					<p v-text="value.name"></p>
				</a>
			</div>
			
		</section>
		<section class="middleNav">
			<div class="middleNavWrap">
				<a href="#" v-for="i in middleData">
					<img v-bind:src="i.image"/>
				</a>
			</div>
		</section>
		
		<section class="items">
			<div class="itemTitle">
				大家都在兑
			</div>
			<div class="itemContent" v-for="k of itemData">
				<div class="itemContentTitle">
					<p v-text="k.title"></p>
					<span>
						{{k.credits}}<span>积分</span>
					</span>
					<i v-text="k.tagText" v-bind:style="{backgroundColor:k.tagColor,color:'white'}"></i>
				</div>
				<div class="itemContentImg">
					<img v-bind:src="k.image"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data(){
			return {
				allData:[],
				littleData:[],
				middleData:[],
				itemData:[]
			}
		},
		mounted(){
			var MySwiper = new Swiper('.swiper-container',{
				loop: true,
				autoplay: 1000,
				observer:true,
				pagination: '.swiper-pagination'
			})
		},
		created(){
			this.axios.get('static/data/minejson1.json').then(data=>{
//				console.log(data.data.list);
				this.allData = data.data.list;
			},err=>{
				console.log(err)
			});
			this.axios.get('static/data/minejson2.json').then(data=>{
//				console.log(data.data.list);
				this.littleData = data.data.list;
			},err=>{
				console.log(err)
			});
			this.axios.get('static/data/minejson3.json').then(data=>{
//				console.log(data.data.list);
				this.middleData = data.data.list
			},err=>{
				console.log(err)
				
			});
			this.axios.get('static/data/minejson4.json').then(data=>{
//				console.log(data.data.list);
				this.itemData = data.data.list;
			},err=>{
				console.log(err)
			})
			
		}
	}
</script>

<style scoped>
@import "../detail/swiper.css";
.swiper-slide>img{
	width: 100%;
}

.iconfont {
	font-family:"iconfont" !important;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'iconfont';  /* project id 336787 */
  src: url('http://at.alicdn.com/t/font_huo2glp6rvuw61or.eot');
  src: url('http://at.alicdn.com/t/font_huo2glp6rvuw61or.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_huo2glp6rvuw61or.woff') format('woff'),
  url('http://at.alicdn.com/t/font_huo2glp6rvuw61or.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_huo2glp6rvuw61or.svg#iconfont') format('svg');
}

.myScoreMarketNav{
	padding: .1rem 0;
	margin-bottom: .18rem;
	/*height: .58rem;*/
	background: white;
	display: table;
	width: 100%;
}

.myScoreMarketNav > a{
	display: table-cell;
	padding: .085rem 0;
	width: 50%;
	text-align: center;
	font-size: .43rem;
}
.myScoreMarketNav > a:first-of-type{
	border-right: 1px solid #e5e5e5;
}
.myScoreMarketNav > a > span > em{
	color: #ff6000 !important;
}

.littleNavWrap{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	
	background: white;
	margin-top: .32rem;
	padding: .32rem 0;
}
.littleNavWrap>a{
	text-align: center;
	width: 25%;
	margin-top: .32rem;
}
.littleNavWrap>a>img{
	border-radius: 50%;
}
.middleNav{
	margin-top: .32rem;
}
.middleNav:after{
	content: "";
	display: block;
	height: 0;
	clear: both;
	
}
.middleNavWrap > a > img{
	width: 50%;
	float: left;
	
}
.itemTitle{
	margin-top: .2rem;
	padding-left: .48rem;
	background: white;
	line-height: 1.173333rem;
}
.itemContent{
	float: left;
	width: 50%;
	background: white;
	border-right: 1px solid #ddd;
	border-top: 1px solid #ddd;
	box-sizing: border-box;
}

.itemContentTitle{
	padding: .20rem 0 0 .32rem;
	min-height: 1.3337rem;
}
.itemContentTitle > p{
	font-size: .43rem;
	font-weight: 400;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.itemContentTitle>span{
	color: #ff6000 !important;
}
.itemContentTitle>span>span{
	color: #333;
}
.itemContentTitle>i{
	padding: 0 .1rem;
	border-radius: .08rem;
}
.itemContentImg{
	display: flex;
	justify-content: center;
	
	margin-bottom: .32rem;
}
</style>
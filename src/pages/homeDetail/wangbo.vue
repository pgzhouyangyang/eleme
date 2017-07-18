<template>
	<!--以下是商家详情内的评价页-->
	<div class="homeRating">
		<section class="allRating">
			<div class="allRatingLeft">
				<strong>4.7</strong>
				<div>综合评价</div>
				<p>高于周边商家57.2%</p>
			</div>
			<div class="allRatingRight">
				<div>
					<span>服务态度</span>
					<span class="allStar iconfont">
						<span class="star" v-for="i in starNum">&#xe79a;</span>
						<span :style="starWidth(titleStar.service_score)" class="lightStar">							
							<span class=" yelStar" v-for="i in starNum">&#xe79a;</span>
						</span>	
					</span>
					<span class="allRatingScore" v-text="xiaoshu(titleStar.service_score)"></span>
				</div>
				<div>
					<span>菜品评价</span>
					<span class="allStar iconfont">
						<span class="star" v-for="i in starNum">&#xe79a;</span>
						<span :style="starWidth(titleStar.food_score)" class="lightStar">							
							<span class=" yelStar" v-for="i in starNum">&#xe79a;</span>
						</span>	
					</span>
					<span class="allRatingScore" v-text="xiaoshu(titleStar.food_score)"></span>
				</div>
				<div>
					<span>送达时间</span>
					<span>
						<span class="allRatingTime">29分钟</span>
					</span>
				</div>
			</div>
		</section>
		<section class="itemRating">
			<div class="itemRatingTitle">
				<ul>
					<li v-for=" (k,i) in tagData" v-text="k.name + '('+k.count+')'"  @click="isActi=i" :class="{tagActive:isActi==i,tagNormal:isActi!=i}"></li>
				</ul>
			</div>
			<ul class="itemRatingContent">
				<li v-for="j in allData">
					<div class="itemRatingContentWrap">
						<small v-text="j.rated_at"></small>
						<img src="../../../static/images/touxiang.jpeg"/>
						<div class="itemRatingContentItems">
							<h3 v-text="j.username"></h3>
							
<span class="allStar iconfont">
		<span class="star" v-for="i in starNum">&#xe79a;</span>
		<span :style="starWidth(j.rating_star)" class="lightStar">							
			<span class=" yelStar" v-for="i in starNum">&#xe79a;</span>
		</span>	
</span>						
							<div class="" v-text="j.rating_text">
								
							</div>
							<ul >
								<li v-for="h in j.item_ratings" v-show="h.image_hash"><img :src="insertStr(h.image_hash)"/></li>
							</ul>
							<div class="itemRatingTag" >
								<ul>
									<li v-for="h in j.item_ratings" v-text="h.food_name"></li>
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		data(){
			return {
				starNum: ["","","","",""],				
				allData:[],
				titleStar:"",
				tagData:[],
				isActi:0

			}
		},
		methods:{
			starWidth(width) {
	       		return "width:" + (width/5.5)*100 + "%;"
	       },
	       xiaoshu(num){
	       		if(num)
	       		return num.toFixed(1)
	       },
	       insertStr(str) {
	       	
//	       	'https://fuss10.elemecdn.com/9/dd/d85c38e71673abbf2f59e1a74afc1jpeg.jpeg?imageMogr/thumbnail/!142x142r/gravity/Center/crop/142x142/'
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = str.substring(3) + ".jpeg?imageMogr/thumbnail/!142x142r/gravity/Center/crop/142x142/";
	            	return s0 + s1 + s2 + s3;
				}
	        }
		},
		created(){
			this.axios.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings?has_content=true&offset=0&limit=10').then(data=>{
				this.allData = data.data
				console.log(data.data)
			},err=>{
				console.log(err)
			});
			this.axios.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings/scores').then(data=>{
				
				this.titleStar=data.data
				console.log(data.data)
			},err=>{
				console.log(err)
			});
			this.axios.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings/tags').then(data=>{
				
				this.tagData=data.data
				console.log(data.data)
			},err=>{
				console.log(err)
			});
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
    	font-family: 'iconfont';  /* project id 340623 */
    	src: url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.eot');
    	src: url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.eot?#iefix') format('embedded-opentype'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.woff') format('woff'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.ttf') format('truetype'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.svg#iconfont') format('svg');
	}


.allStar {
    	position: relative;
    	/*display: flex;*/
    }
    .star {
        margin: 0 1px;
    	width: .266667rem;
    	height: .266667rem;
    	font-size: .266667rem !important;
    	color: #ddd;
    }
    .lightStar {
    	position: absolute;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	/*width: 85%;*/
    	overflow: hidden;
    }
    .yelStar {
    	margin: 0 1px;
    	width: .266667rem;
    	height: .266667rem;
    	font-size: .266667rem !important;
    	color: #ffaa0c;
    }
	
.allRating{
	display: flex;
	padding: .4rem;
	margin-bottom: .266667rem;
	background: white;
}
.allRatingLeft{
	border-right: 1px solid #ddd;
	padding-right: .4rem;
	line-height: 1.5em;
}
.allRatingLeft > strong{
	line-height: 1em;
	font-size: .8rem;
	color: #f60;
	text-align: center;
	font-weight: 400;
	display: block;
}
.allRatingLeft>div{
	font-size: .36rem;
	text-align: center;
}

.allRatingLeft > p{
	font-size: .266667rem;
	color: #999;
	text-align: center;
}
.allRatingRight{
	display: flex;
	flex: 1;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
}
.allRatingRight > div{
	width: 80%;
	margin: .133333rem 0;
	
}

.allRatingScore{
	color: #f60;
	font-size: .373333rem;
	padding-left: .266667rem;
}
.allRatingRight > div> span> .allRatingTime{
	font-size: .266667rem;
	color: #999;
}
.itemRating{
	padding: .4rem .32rem;
	background: white;
}
.itemRatingTitle{
	padding-bottom: .4rem;
	border-bottom: 1px solid #ddd;
	
}
.tagNormal{
	display: inline-block;
	margin: .066667rem .133333rem;
	padding: .2rem;
	border-radius: .133333rem;
	background-color: #ebf5ff;
	color: #6d7885;
}
.tagActive{
	display: inline-block;
	margin: .066667rem .133333rem;
	padding: .2rem;
	border-radius: .133333rem;
	background-color: #3190e8;
	color: white;
}

.itemRatingContent > li {
	padding: .4rem 0;
	border-bottom: 1px solid #ddd;
}
.itemRatingContent > li>div{
	padding-left: 1.2rem;
	position: relative;
}
.itemRatingContent > li>div>small{
	position: absolute;
	top: .133333rem;
	right: 0;
	font-size: .32rem;
	color: #999;
}
.itemRatingContent > li>div>img{
	position: absolute;
	top: 0;
	left: 0;
	width: .8rem;
	height: .8rem;
	border-radius: 50%;
	
	
}
.itemRatingContent > li>div>div{
	font-size: .346667rem;
}
.itemRatingContent > li>div>div>h3{
	margin-bottom: .133333rem;
	color: #666;
	font-size: .346667rem;
	font-weight: 400;
	
	
}
.itemRatingContent > li>div>div>ul>li{
	margin: .133333rem;
	display: inline-block;
}
.itemRatingTag{
	font-size: ;
}
.itemRatingTag > ul > li{
	font-size: .293333rem;
	display: inline-block;
	border: 1px solid #ddd;
	padding: .106667rem .266667rem;
	margin: .093333rem;
	border-radius: .08rem;
	max-width: 1.6rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	
	color: #999
	
}
</style>
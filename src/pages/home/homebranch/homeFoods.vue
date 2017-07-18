<template>
	<div>
		<header>
			<div v-for="title of titleData" v-if="title.id == $route.params.id" class="kind">
				<div class="backBtn"><span @click="back()" class="iconfont">&#xe617;</span></div>
				<h1 v-text="title.name"></h1>
			</div>
		</header>
		<aside class="filter">
			<div class="filter-header">
				<div class="filter-nav" @click="flag=!flag">
					<span>分类</span>
					<svg class="icon" viewBox="0 0 72 32">
						<path d="M36 32l36-32h-72z"></path>
					</svg>
				</div>
				<div class="filter-nav">
					<span>排序</span>
					<svg class="icon" viewBox="0 0 72 32">
						<path d="M36 32l36-32h-72z"></path>
					</svg>
				</div>
				<div class="filter-nav">
					<span>筛选</span>
					<svg class="icon" viewBox="0 0 72 32">
						<path d="M36 32l36-32h-72z"></path>
					</svg>
				</div>
			</div>
			<section class="filter-extend filter-category" :class="{open:flag}">
				<div class="filter-scroller">
					<ul>
						<li v-for="i of typeData" @click="check(i)">
							<span v-text="i.name"></span>
							<span v-text="i.count" class="count"></span>
						</li>
					</ul>
					<ul>
						<li v-for="k of che.sub_categories">
							<img :src="sml(k.image_url)" alt="" />
							<span v-text="k.name"></span>
							<span v-text="k.count"></span>
						</li>
					</ul>
				</div>
			</section>
			<section class="filter-modal" :class="{open:flag}"></section>
		</aside>
		<ul class="shopList">
			<li v-for="item of allData" class="shopShow">
				<router-link :to="'/shopShow/' + item.id">
					<div class="shopImg">
						<img :src="insertStr(item.image_path)"/>
					</div>
					<div class="shopDetails">
						<section class="shopName">
							<h3 class="brandName">
								<span v-if="item.is_premium">品牌</span>
								<em v-text="item.name"></em>
							</h3>
							<div class="shopFav">
								<div v-for="icon of item.supports">
									<i v-text="icon.icon_name" class="fav"></i>
								</div>
							</div>
						</section>
						<section>
							<div>
								<span class="iconfont allStar">
									<span class="star" v-for="i in starNum">&#xe79a;</span>
									<span class="lightStar" :style="starWidth(item.rating)">
										<span class="yelStar" v-for="i in starNum">&#xe79a;</span>
									</span>
								</span>
								<span v-text="item.rating" class="grade"></span>
								<span v-text="'月售' + item.recent_order_num + '单'"></span>
							</div>
							<div class="delivery">
								<span v-for="icon of item.supports" v-if="icon.name=='准时达'" class="punctuality">准时达</span>
								<span v-if="item.delivery_mode" v-text="item.delivery_mode.text" class="bird"></span>
							</div>
						</section>
						<section>
							<div class="price">
								<span v-text="'¥' + item.float_minimum_order_amount + '起送'"></span>
								<span v-text="'配送费¥' + item.float_delivery_fee"></span>
								<span v-text="item.average_cost"></span>
							</div>
							<div class="times">
								<span v-text="count(item.distance)"></span>
								<span v-text="item.order_lead_time + '分钟'" class="needTime"></span>
							</div>
						</section>
					</div>
				</router-link>
			</li>
		</ul>
		<p class="more">等待加载更多...</p>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				allData: [],
				titleData: [],
				starNum: ["","","","",""],
				fgNum: this.$route.params.flag,
				flag: false,
				typeData: [],
				num: 20,
				che: {}
			}
		},
		methods: {
			check(obj) {
				this.che = obj
			},
			back() {
				history.back();
			},
			insertStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/";
	            	return s0 + s1 + s2 + s3;
				}
	        },
	        sml(str) {
	        	if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/thumbnail/!80x80r/gravity/Center/crop/80x80/" : s3 = str.substring(3) + ".jpeg?imageMogr/thumbnail/!80x80r/gravity/Center/crop/80x80/";
	            	return s0 + s1 + s2 + s3;
				}
	        },
	        count(num) {
	       		if(num >= 1000) {
	       			return (num/1000).toFixed(2) + "km"
	       		}else{
	       			return num + "m"
	       		}
	       	},
	       	starWidth(width) {
	       		return "width:" + (width/5.3)*100 + "%;"
	       	},
	       	flagNum(sum) {
	       		if(sum == "undefined"){
	       			return Math.ceil(Math.random()*10)
	       		}else{
	       			return sum
	       		}
	       	}
		},
		created() {
			this.axios.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&keyword=&offset=" + (this.flagNum(this.fgNum))*10 + "&limit=20&extras[]=activities").then(data=> {
				//console.log(data.data)
				this.allData = data.data
			},err=> {
				console.log(err)
			});
			this.axios.get("https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=40.07455&longitude=116.36403&templates[]=main_template").then(data=> {
				this.titleData = data.data[0].entries
				//console.log(data.data)
			},err=> {
				console.log(err)
			});
			this.axios.get("https://mainsite-restapi.ele.me/shopping/v2/restaurant/category?latitude=40.053357&longitude=116.330694").then(data=> {
				console.log(data.data)
				this.typeData = data.data
			},err=> {
				console.log(err)
			});
		},
		mounted(){  
            // 缓存指针  
            let _this = this;  
            // 设置一个开关来避免重负请求数据  
            let sw = true;  
            // 此处使用node做了代理  
            /*this.axios.get('http://https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=20&limit=20&extras[]=activities&terminal=h5')  
                .then(function(response){  
                    // console.log(JSON.parse(response.data).stories);  
                    // 将得到的数据放到vue中的data  
                    _this.articles = JSON.parse(response.data).stories;  
                })  
                .catch(function(error){  
                    console.log(error);  
                }); */ 
  
            // 注册scroll事件并监听  
            window.addEventListener('scroll',function(){  
                // console.log(document.documentElement.clientHeight+'-----------'+window.innerHeight); // 可视区域高度  
                // console.log(document.body.scrollTop); // 滚动高度  
                // console.log(document.body.offsetHeight); // 文档高度  
                // 判断是否滚动到底部  
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {  
                    // console.log(sw);  
                    // 如果开关打开则加载数据  
                    if(sw==true){  
                        // 将开关关闭  
                        sw = false;  
                        _this.axios.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=20&limit=' + _this.num + '&extras[]=activities&terminal=h5').then(function(response){  
                                console.log(response.data);
                                _this.num += 20
                                // 将新获取的数据push到vue中的data，就会反应到视图中了  
                                response.data.forEach(function(val,index){  
                                    _this.allData.push(val);
                                    // console.log(val);  
                                });  
                                // 数据更新完毕，将开关打开  
                                sw = true;  
                            }).catch(function(error){
                            	console.log(error)
                            })
                    }  
                }  
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
    	font-family: 'iconfont';  /* project id 339780 */
    	src: url('http://at.alicdn.com/t/font_397k9pbsx7irizfr.eot');
    	src: url('http://at.alicdn.com/t/font_397k9pbsx7irizfr.eot?#iefix') format('embedded-opentype'),
    	url('http://at.alicdn.com/t/font_397k9pbsx7irizfr.woff') format('woff'),
    	url('http://at.alicdn.com/t/font_397k9pbsx7irizfr.ttf') format('truetype'),
    	url('http://at.alicdn.com/t/font_397k9pbsx7irizfr.svg#iconfont') format('svg');
}
	.shopList {
    	background-color: #fff;
    	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==);
    	background-size: 100% auto;
    }
    .shopShow>a {
    	display: flex;
    	width: 100%;
    	height: 100%;
    }
    .shopShow {
    	display: flex;
    	justify-content: space-between;
    	/*position: relative;*/
        border-bottom: 1px solid #eee;
        background-color: #fff;
        color: #666;
        font-size: .293333rem;
    }
    section {
    	display: flex;
    }
    .shopImg {
    	position: relative;
        padding: .4rem .266667rem;
    }
    .shopImg>img {
    	position: relative;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: .053333rem;
    }
    .shopDetails {
    	flex-direction: column;
        padding: .4rem .266667rem .4rem 0;
        flex-grow: 1;
        /*display: flex;
        justify-content: space-between;*/
    }
    section {
    	display: flex;
    	align-items: center;
    	justify-content: space-between;
    }
    .brandName {
    	display: flex;
    	align-items: center;
        margin: 0;
        padding: 0;
        max-width: 5rem;
        height: .426667rem;
        color: #333;
        font-weight: 700;
        font-size: .4rem;
    }
    .brandName>span {
    	margin-right: .133333rem;
        padding: 0 .066667rem;
        height: .4rem;
        border-radius: .053333rem;
        background-color: #ffd930;
        color: #52250a;
        vertical-align: top;
        text-align: center;
        white-space: nowrap;
        font-weight: 700;
        font-size: .293333rem;
        line-height: .4rem;
    }
    .brandName>em {
    	overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shopFav {
    	justify-content: flex-end;
    	display: flex;
        font-size: .266667rem;
    }
    .fav {
    	margin-left: .066667rem;
        font-size: .266667rem;
        font-style: normal;
        line-height: 1;
        height: .293333rem;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
        border: 1px solid;
        border-radius: .04rem;
    	color: rgb(153, 153, 153);
        border-color: rgb(221, 221, 221);
    }
    .shopDetails>section:nth-child(2) {
    	margin-top: .2rem;
    }
    .shopDetails>section:nth-child(3) {
    	margin-top: .226667rem;
        line-height: .32rem;
    }
    .grade {
    	margin: 0 .106667rem;
        color: #ff6000;
    }
    .delivery {
    	display: flex;
    }
    .delivery>span {
    	padding: 0 .053333rem;
        border: 1px solid #44a5ff;
        border-radius: .053333rem;
        background-color: #fff;
        color: #2395ff;
        font-size: .266667rem;
        line-height: .346667rem;
    }
    .punctuality {
    	margin-right: .08rem;
    }
    .delivery>.bird {
    	background-color: #2395ff;
        color: #fff;
    }
    .price, .times {
    	display: flex;
    	align-content: center;
    }
    .price>span:nth-of-type(2) {
    	overflow: hidden;
        max-width: 2.666667rem;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price span+span:before {
    	margin: 0 .08rem;
        color: #ddd;
        content: "/";
    }
    .needTime {
    	color: #2395ff;
    }
    .times span+span:before {
    	margin: 0 .08rem;
        color: #ddd;
        content: "/";
    }
    header {
    	background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .kind {
    	display: flex;
    	align-items: center;
    	justify-content: space-between;
        width: 100%;
        height: 1.173333rem;
        color: #fff;
        font-size: .48rem;
/*        background: #2395ff;*/
    }
    .backBtn {
    	display: flex;
    	align-items: center;
    	justify-content: center;
        width: 1.173333rem;
        height: 1.173333rem;
    }
    .kind>h1 {
    	position: absolute;
	    top: 0;
	    left: 50%;
	    height: 1.173333rem;
	    max-width: 50%;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-weight: 700;
	    font-size: 1em;
	    line-height: 1.173333rem;
	    transform: translateX(-50%);
    }
    .filter {
    	position: relative;
        border-bottom: 1px solid #ddd;
        height: 1.066667rem;
        line-height: 1.04rem;
        z-index: 100;
    }
    .filter-header {
    	position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        z-index: 3;
        background-color: #fff;
    }
    .filter-nav {
        flex: 1;
        display: block;
        width: 0;
        text-align: center;
        color: #666;
        position: relative;
        font-size: .346667rem;
    }
    .filter-nav>.icon {
    	width: .24rem;
        height: .106667rem;
        margin-bottom: .053333rem;
        fill: #999;
        will-change: transform;
        transition: all .3s;
    }
    .allStar {
    	position: relative;
    	/*display: flex;*/
    }
    .star {
        margin: 0 1px;
    	width: .266667rem;
    	height: .266667rem;
    	font-size: .266667rem;
    	color: #ddd;
    }
    .lightStar {
    	position: absolute;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
/*    	width: 85%;*/
    	overflow: hidden;
    }
    .yelStar {
    	margin: 0 1px;
    	width: .266667rem;
    	height: .266667rem;
    	font-size: .266667rem;
    	color: #ffaa0c;
    }
    .more {
    	text-align: center;
    	background-color: #FFFFFF;
    	font-size: .33333rem;
    	padding: .5rem 0;
    }
    
    .filter-extend {
    	left: 0;
    	right: 0;
        top: 100%;
    	border-top: 1px solid #ddd;
    	position: absolute;
    	max-height: 0;
    	background-color: #fff;
    	transition: all .2s ease-in-out;
    	visibility: hidden;
    	overflow: auto;
    	opacity: 0;
    	z-index: 3;
    }
    .filter-category {
    	max-height: 1000%;
    }
    .filter-category .filter-scroller {
    	display: flex;
    	height: 10rem;
    	width: 100%;
	}
	.filter-category ul {
		flex: 3;
        display: block;
    	width: 0;
    	list-style: none;
    	margin: 0;
    	padding: 0;
    	overflow: auto;
	}
	.filter-category ul:first-child {
    	background-color: #fafafa;
    	flex: 2;
    	display: block;
    	width: 0;
	}
    .filter-category ul:nth-of-type(2) {
    	margin-left: .4rem;
    	padding-right: .133333rem;
	}
    .active {
    	background-color: #fff;
    }
    .filter-category ul:first-child li {
    	padding: 0 .133333rem 0 .266667rem;
	}
	.filter-category li {
    	position: relative;
    	line-height: 1.2rem;
	}
    .filter-modal {
    	position: fixed;
    	left: 0;
    	right: 0;
    	top: 0;
    	bottom: 0;
    	z-index: 1;
    	background: rgba(0,0,0,.2);
    	visibility: hidden;
    	opacity: 0;
    	transition: all .3s ease-in-out;
    }
    .count {
    	position: absolute;
    	right: .266667rem;
    	line-height: .373333rem;
    	top: 50%;
    	margin-top: -.186667rem;
    	border-radius: .266667rem;
    	border: .013333rem solid #eee;
    	background-color: #fff;
    	padding: 0 .133333rem;
    	font-size: .293333rem;
    }
    
    
    
    
    
    
    
    
    
    
    
    .open {
    	opacity: 1;
        visibility: visible;
    }
</style>
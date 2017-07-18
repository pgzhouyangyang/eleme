<template>
	<div>
		<h3 class="title">推荐商家</h3>
		<ul class="shopL">
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
	</div>
</template>

<script>
	export default{
		data() {
			return {
				allData: [],
				starNum: ["","","","",""],
				num: 20
			}
		},
		methods: {
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
	        count(num) {
	       		if(num >= 1000) {
	       			return (num/1000).toFixed(2) + "km"
	       		}else{
	       			return num + "m"
	       		}
	       	},
	       	starWidth(width) {
	       		return "width:" + (width/5.3)*100 + "%;"
	       	}
		},
		created() {
			this.$http.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=0&limit=20&extras[]=activities&terminal=h5").then(data=> {
				//console.log(data.data)
				this.allData = data.data
			},err=> {
				console.log(err)
			});
			/*this.$http.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=20&limit=20&extras[]=activities&terminal=h5").then(data=> {
				console.log(data)
			},err=> {
				console.log(err)
			})*/
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
    	font-family: 'iconfont';  /* project id 340623 */
    	src: url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.eot');
    	src: url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.eot?#iefix') format('embedded-opentype'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.woff') format('woff'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.ttf') format('truetype'),
    	url('http://at.alicdn.com/t/font_wsq4b4iq5gmk7qfr.svg#iconfont') format('svg');
	}
	.title {
		margin-top: .266667rem;
        line-height: .906667rem;
        font-weight: 600;
        border-top: 1px solid #eee;
        font-size: .4rem;
        padding-left: .4rem;
        border-bottom: 1px solid #eee;
        background-color: #fff;
	}
	.shopL {
		padding-bottom: 1.6rem;
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
    	/*display: flex;*/
    	/*justify-content: space-between;*/
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
</style>
<template>
	<div class="wrap">
		<div class="divmenu">
			<main>
				<ul class="menu">
					<li v-for="v of allData" :class="{clickLi:needV==v} " class="menuview" @click="needV=v">
						<a :href="'#'+v.name">
							<img :src="insertStr(v.icon_url)" v-if="v.icon_url" alt="" />
							<span class="buggg" v-show="myCount(v)>0" v-text="myCount(v)"></span>
							<span v-text="v.name"></span>
						</a>
					</li>

				</ul>
				<section class="menuRight">
					<div class="scroller">
						<dl v-for="v of allData" class="menuviewRight">
							<dt class="menushow" :id="v.name">
								<div class="menushowIcon">
									<span v-text="v.name" class="iconName"></span>
									<span v-text="v.description" class="iconDes"></span>
								</div>
							</dt>
							<dd v-for="item of v.foods" class="deli">
								<span class="foodImg">
									<img :src="imgStr(item.image_path)" alt="" />
								</span>
								<section class="foodInfo">
									<h3 class="goodname">
										<span v-text="item.name"></span>
									</h3>
									<p class="fooddescription">
										<span v-if="item.description" v-text="item.description"></span>
									</p>
									<p class="foodsales">
										<span v-text="'月售'+item.specfoods[0].recent_popularity+'份'"></span>
										<span v-text="'好评率'+item.satisfy_rate+'%'"></span>
									</p>
									<b v-text="'￥'+item.specfoods[0].price" class="foodprice"></b>
									<div class="btn">
										<span>
											<span @click="sub(item)" class="subbtn iconfont" v-show="item.count>0">&#xe600;</span>
											<span class="foodscount" v-show="item.count>0" v-text="item.count"></span>
											<span @click="add(item)" class="addbtn iconfont">&#xe62f;</span>
										</span>
									</div>
								</section>
							</dd>
						</dl>
					</div>
				</section>
			</main>
			<div>
				<footer>
					<div class="fotDivO">
						<div class="smldivO"></div>
						<div class="smldivT"></div>
					</div>
					<div class="fotDivT">
						<span class="smlspan yearafter" :attr-quantity="allc()"></span>
						<div class="spandiv">
							<p class="mon" v-text="'¥' + allP()"></p>
							<p class="fee" v-text="'配送费¥' + feeData"></p>
						</div>
						<router-link to="/check" class="okay">去结算</router-link>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				id: this.$route.params.id,
				allData: [],
				needV: "",
				//getAll: []
				priceNum: "",
				feeData: "5"
			}
		},
		created() {
			this.axios.get("https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=" + this.id).then(data=> {
				for(var i = 0;i<data.data.length;i++){
					for(var k=0;k<data.data[i].foods.length;k++){
						data.data[i].foods[k].count = 0
					}
				}
				this.allData = data.data
				//console.log(data.data)
				
			},err=> {
				console.log(err)
			});
			this.axios.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=0&limit=30&extras[]=activities&terminal=h5").then(data=> {
				for(var i = 0; i < data.data.lenght; i++) {
					if(data.data[i].id == this.id){
						//return data.data.[i]float_delivery_fee
						this.feeData = data.data[i].float_delivery_fee
					}
				}
			},err=> {
				console.log(err)
			})
		},
		computed: {
			allCount() {
				/*for(var value of this.$store.getters.allGoods) {
					if(value.count)
					return value.count
				}*/
				return this.$store.getters.allGoods
				//return this.$store.getters.allGoods
			},
			/*needCount() {
				if(this.item.){
					return this.item.count
				}else{
					this.item.count = 0 
					return 0
				}
				
			}*/
		},
		methods: {
			/*getneed(all) {
				this.getAll = all
				console.log(this.getAll)
			},*/
			/*countNum(obj) {
				for(var i = 0; i < this.allCount.length; i ++) {
					if(this.allCount[i].name == obj.name)
					return this.allCount[i].count
				}
				if(obj.count){
					return obj.count
				}else{
					obj.count=0
					return obj.count
				}
				
				
			},*/
			myCount(ned) {
				var mycount = 0;
				for(var value of ned.foods) {
					mycount += value.count
					//console.log(mycount)
				}
				return mycount
			},
			allP() {
				var allP = 0;
				for(var value of this.allCount){
					allP += value.count*value.specfoods[0].price
					//console.log(allP)
				}
				return allP
			},
			allc() {
				var allc = 0;
				for(var value of this.allCount){
					allc += value.count
					//console.log(allc)
				}
				return allc
			},
			add(item) {
				this.$store.commit("ADD_PRICE", item)
				//this.getAll.push(item)
				//console.log(item.count)
				//console.log(this.allCount)
				//console.log(this.allData);
			},
			sub(item) {
				this.$store.commit("REDUCE_PRICE", item)
				//this.getAll = item
			},
			insertStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/18x/";
	            	return s0 + s1 + s2 + s3;
				}
	        },
	        imgStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/";
	            	return s0 + s1 + s2 + s3;
				}
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
    	font-family: 'iconfont';  /* project id 341974 */
    	src: url('http://at.alicdn.com/t/font_gqe2ayqy458tcsor.eot');
    	src: url('http://at.alicdn.com/t/font_gqe2ayqy458tcsor.eot?#iefix') format('embedded-opentype'),
    	url('http://at.alicdn.com/t/font_gqe2ayqy458tcsor.woff') format('woff'),
    	url('http://at.alicdn.com/t/font_gqe2ayqy458tcsor.ttf') format('truetype'),
    	url('http://at.alicdn.com/t/font_gqe2ayqy458tcsor.svg#iconfont') format('svg');
	}
	.wrap {
		height: 13.1rem;
		box-sizing: border-box;
	}
	.divmenu {
		height: 100%;
    	padding-bottom: 1.28rem;
    	background-color: #fff;
    	box-sizing: inherit;
	}
	main {
		display: flex;
        height: 100%;
	}
	.menu {
		overflow-y: auto;
        height: 100%;
    	background-color: #f8f8f8;
    	width: 2.266667rem;
	}
	.menuview {
		position: relative;
    	padding: .466667rem .2rem;
    	border-bottom: 1px solid #ededed;
    	font-size: .346667rem;
    	color: #666;
	}
	.menuview>img {
		width: .24rem;
        height: .333333rem;
        max-width: 100%;
	}
	.clickLi {
		background-color: #fff;
        border-right-color: #fff;
		font-weight: bolder;
	}
	.clickLi:after {
		content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: .08rem;
        background-color: #3190e8;
	}
	.menuRight {
		position: relative;
    	height: 100%;
    	flex: 1;
    	display: block;
    	width: 0;
	}
	.scroller {
		height: 100%;
        overflow-y: auto;
	}
	.menushow {
		position: relative;
    padding: .2rem .266667rem;
    background-color: #f1f1f1;
	}
	.menushowIcon {
		display: flex;
		align-items: flex-end;
        overflow: hidden;
	}
	.iconName {
		margin-right: .133333rem;
    	font-weight: 700;
    	font-size: .373333rem;
    	color: #666;
    	flex: none;
	}
	.iconDes {
		flex: 1;
        display: block;
    	width: 0;
    	color: #999;
    	font-size: .266667rem;
    	white-space: nowrap;
    	overflow: hidden;
	}
	.deli {
		position: relative;
    	background-color: #fff;
    	margin: 0;
    	padding: .4rem .266667rem;
    	margin-bottom: 1px;
    	display: -webkit-box;
    	display: -ms-flexbox;
    	display: flex;
    	min-height: 2.933333rem;
    	box-sizing: border-box;
	}
	.deli:not(:last-child) {
		box-shadow: 0.4rem 0.013333rem 0 0 #ddd;
	}
	.foodImg {
		margin-right: 4%;
    	flex: 2;
    	display: block;
    	width: 0;
    	vertical-align: top;
	}
	.foodImg>img {
		width: 100%;
    	border-radius: .053333rem;
        max-width: 100%;
	}
	.foodInfo {
		position: relative;
    	flex: 8;
    	display: block;
    	width: 0;
    	padding-bottom: .666667rem;
	}
	.goodname {
		font-size: .4rem;
    	font-weight: 700;
    	line-height: 1.1;
    	overflow: hidden;
    	display: flex;
    	justify-content: space-between;
	}
	.goodname>span {
		vertical-align: middle;
	}
	.fooddescription {
		margin: .133333rem 0;
    	font-size: .253333rem;
    	color: #999;
	}
	.foodsales {
		margin: .173333rem 0;
    	color: #666;
    	font-size: .293333rem;
    	line-height: 1;
	}
	.foodsales>span {
		vertical-align: middle;
	}
	.foodsales>span:not(:first-child) {
		margin-left: .106667rem;
	}
	.foodprice {
		position: absolute;
    	left: 0;
    	bottom: 0;
    	font-weight: 700;
    	font-size: .426667rem;
    	line-height: .426667rem;
    	color: #f60;
	}
	.btn {
		position: absolute;
        right: 0;
    	bottom: -.066667rem;
	}
	.btn>span {
		display: inline-block;
        font-size: .346667rem;
        white-space: nowrap;
	}
	.subbtn {
		display: inline-block;
        padding: .093333rem;
    	vertical-align: middle;
    	text-decoration: none;
	}
	.addbtn {
		display: inline-block;
        padding: .093333rem;
    	vertical-align: middle;
    	text-decoration: none;
	}
	.addbtn, .subbtn {
		font-size: .566666rem;
		color: #3190e8;
	}
	.foodscount {
		text-align: center;
    	color: #666;
    	font-size: .373333rem;
    	min-width: .4rem;
    	max-width: 2em;
    	overflow: hidden;
    	display: inline-block;
    	vertical-align: middle;
	}
	footer {
		font-size: .426667rem;
	}
	.fotDivO {
		position: fixed;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	background-color: #fff;
    	transition: all .35s ease;
    	transform: translate3d(0,100%,0);
    	bottom: 1.28rem;
	}
	.smldivO {
		padding: 0 .333333rem;
        border-bottom: 1px solid #ddd;
    	background-color: #eceff1;
    	color: #666;
    	line-height: 1.066667rem;
	}
	.smldivT {
		overflow: auto;
        max-height: 8rem;
	}
	.fotDivT {
		position: fixed;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	display: flex;
    	align-items: center;
    	padding-left: 2.106667rem;
    	background-color: #3d3d3f;
    	height: 1.28rem;
    	opacity: .95;
	}
	.smlspan {
		position: absolute;
    	left: .32rem;
    	bottom: .2rem;
    	width: 1.333333rem;
    	height: 1.333333rem;
    	box-sizing: border-box;
    	border-radius: 100%;
    	background-color: #3190e8;
    	border: .133333rem solid #444;
    	box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    	will-change: transform;
	}
	.smlspan:before {
		position: absolute;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4xIiBtYXNrPSJ1cmwoI2MpIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
    	background-size: .6rem;
    	content: "";
	}
	.spandiv {
		flex: 1;
    	display: block;
    	width: 0;
	}
	.mon {
		font-size: .48rem;
        line-height: normal;
    	color: #fff;
	}
	.fee {
		color: #f5f5f5;
    	font-size: .266667rem;
	}
	.okay {
		height: 100%;
    	width: 2.8rem;
    	background-color: #4cd964;
    	color: #fff;
    	text-align: center;
    	text-decoration: none;
    	font-size: .4rem;
    	font-weight: 700;
    	line-height: 1.28rem;
	}
	.yearafter:after {
		position: absolute;
    	right: -.12rem;
    	top: -.133333rem;
    	line-height: 1;
    	background-color: #ff461d;
    	color: #fff;
   		border-radius: .32rem;
    	padding: .053333rem .133333rem;
    	content: attr(attr-quantity);
    	font-size: .266667rem;
	}
	.noafter:after {
		
	}
	.buggg {
		position: absolute;
    	right: .08rem;
    	top: .08rem;
    	color: #fff;
   		background-color: #ff461d;
    	border-radius: .2rem;
    	font-size: .266667rem;
    	font-weight: 700;
    	text-align: center;
    	min-width: .373333rem;
    	padding: 0 .106667rem;
    	line-height: .373333rem;
    	box-sizing: border-box;
	}
	.menuview>a {
		display: block;
		width: 100%;
		height: 100%;
		color: currentcolor;
	}
</style>
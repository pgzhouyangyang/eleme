<template>
	<div class="">
		<div v-for="item of allData" v-if="id == item.id" class="header">
			<div class="bgDiv" :style="'background-image:url('+ bgImg(item.image_path) +');'"></div>
			<nav>
				<span @click="back()" class="iconfont back">&#xe617;</span>
			</nav>
			<div class="imgName">
				<img :src="insertStr(item.image_path)" alt="" />
				<div class="name">
					<h2 v-text="item.name"></h2>
					<p class="moneyTime">
						<span v-if="item.delivery_mode" v-text="item.delivery_mode.text"></span>
						<span v-if="!item.delivery_mode">商家配送</span>
						<span v-text="item.order_lead_time + '分钟送达'"></span>
						<span v-text="'配送费¥' + item.float_delivery_fee"></span>
					</p>
					<div class="notice">
						<span>公告：</span>
						<span v-if="item.promotion_info" v-text="item.promotion_info"></span>
						<span v-else>欢迎光临，用餐高峰期请提前下单，谢谢。</span>
					</div>
				</div>
				<span class="iconfont next">&#xe675;</span>
			</div>
			<div class="newUser">
				<div class="newLeft">
					<i v-text="item.activities[0].icon_name"></i>
					<span v-text="item.activities[0].name" class="newPrice"></span>
				</div>
				<span v-text="item.activities.length + '个活动'" class="newNum"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				id: this.$route.params.id,
				allData: []
			}
		},
		methods: {
			insertStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/";
	            	return s0 + s1 + s2 + s3;
				}
	        },
	        bgImg(str) {
	        	if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!40p/blur/50x40/";
	            	return s0 + s1 + s2 + s3;
				}
	        },
	        back() {
				return history.back();
			},
		},
		created() {
			this.axios.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=0&limit=30&extras[]=activities&terminal=h5").then(data=> {
				this.allData = data.data
				console.log(data.data)
			},err=> {
				console.log(err)
			})
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
    	font-family: 'iconfont';  /* project id 341342 */
    	src: url('http://at.alicdn.com/t/font_cby9an6qeycfpqfr.eot');
    	src: url('http://at.alicdn.com/t/font_cby9an6qeycfpqfr.eot?#iefix') format('embedded-opentype'),
    	url('http://at.alicdn.com/t/font_cby9an6qeycfpqfr.woff') format('woff'),
    	url('http://at.alicdn.com/t/font_cby9an6qeycfpqfr.ttf') format('truetype'),
    	url('http://at.alicdn.com/t/font_cby9an6qeycfpqfr.svg#iconfont') format('svg');
	}
	.header {
		position: relative;
        padding-bottom: .8rem;
        color: #fff;
        font-size: .293333rem;
	}
	.bgDiv {
		position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #3190e8;
        background-size: cover;
        background-repeat: no-repeat;
	}
	.bgDiv:before {
		content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(119,103,137,.43);
	}
	nav {
		position: relative;
        padding: .106667rem .266667rem;
	}
	.back {
		width: .666667rem;
        height: .666667rem;
        font-size: .666667rem;
	}
	.imgName {
		position: relative;
        display: flex;
	}
	.imgName>img {
		width: 1.733333rem;
        height: 1.733333rem;
        border: 1px solid #fff;
        border-radius: .106667rem;
        margin: 0 .266667rem;
	}
	.name {
		flex: 1;
        display: block;
        width: 0;
        padding-right: .133333rem;
	}
	.name>h2 {
		margin: 0;
        font-size: .466667rem;
        line-height: .466667rem;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
	}
	.moneyTime {
		white-space: nowrap;
        height: .666667rem;
        line-height: .72rem;
	}
	.moneyTime>span:not(:last-of-type):after {
		content: " / ";
    	opacity: .5;
	}
	.moneyTime>span {
		line-height: .32rem;
	}
	.notice {
		height: .533333rem;
        line-height: .533333rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
	}
	.next {
		position: absolute;
        top: 50%;
		font-size: .555555rem;
        transform: translateY(-50%);
        right: .133333rem;
        height: .333333rem;
        width: .666667rem;
	}
	.newUser {
		position: absolute;
        left: .266667rem;
        right: .346667rem;
        bottom: .133333rem;
	}
	.newLeft {
		line-height: .426667rem;
    	display: flex;
    	font-size: .266667rem;
        align-items: center;
        padding-right: 1.28rem;
	}
	.newLeft>i {
		margin-right: .133333rem;
    	font-size: .266667rem;
    	font-style: normal;
    	line-height: 1;
    	height: .293333rem;
    	display: inline-block;
    	box-sizing: border-box;
    	text-align: center;
    	border: 1px solid;
    	border-radius: .04rem;
        background-color: rgb(112, 188, 70);
    	color: rgb(255, 255, 255);
    	border-color: rgb(112, 188, 70);
	}
	.newPrice {
		margin-top: -1px;
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 1;
    	display: block;
    	width: 0;
	}
	.newNum {
		position: absolute;
        top: 0;
        right: 0;
	}
</style>
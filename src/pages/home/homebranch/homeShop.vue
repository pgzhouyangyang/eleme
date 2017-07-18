<template>
	<div class="wrap">
		<form class="searchHeader">
			<div class="arrowLeft"><span @click="back()" class="iconfont">&#xe617;</span></div>
			<input type="text" placeholder="请输入商品名称" class="headerInput" v-model="needValue" />
			<span class="iconfont noBtn" v-if="needValue" @click="noneValue()">&#xe62c;</span>
		</form>
		<div class="hotWord">
			<h3>热门搜索</h3>
			<section class="hot">
				<span v-for="item of allData" v-text="item.word" class="hotRecom"></span>
			</section>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				allData: [],
				needValue: ""
			}
		},
		methods: {
			back() {
				return history.back();
			},
			noneValue() {
				this.needValue = ""
			}
		},
		created() {
			this.axios.get("https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?geohash=wx4ezt20sfbg&latitude=40.06312&longitude=116.34542").then(data=> {
				//console.log(data.data)
				this.allData = data.data
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
        font-family: 'iconfont';  /* project id 339483 */
        src: url('http://at.alicdn.com/t/font_oo5x9did1q9tfbt9.eot');
        src: url('http://at.alicdn.com/t/font_oo5x9did1q9tfbt9.eot?#iefix') format('embedded-opentype'),
        url('http://at.alicdn.com/t/font_oo5x9did1q9tfbt9.woff') format('woff'),
        url('http://at.alicdn.com/t/font_oo5x9did1q9tfbt9.ttf') format('truetype'),
        url('http://at.alicdn.com/t/font_oo5x9did1q9tfbt9.svg#iconfont') format('svg');
    }
    .iconfont {
    	text-align: center;
    	font-size: .6rem;
    	color: #999;
    }
    .searchHeader {
    	display: flex;
    	padding: .293333rem;
   		position: relative;
        z-index: 101;
        background-color: #fff;
        box-sizing: border-box;
    }
    .arrowLeft {
    	width: .933333rem;
    	height: .933333rem;
    	padding: .133333rem .133333rem .133333rem 0;
    	box-sizing: border-box;
    }
    .headerInput {
    	border: none;
    	flex-grow: 1;
        border-radius: .4rem;
        background-color: #f8f8f8;
        padding: .173333rem .4rem;
        font-size: .4rem;
    }
    .hotWord {
    	margin-top: .4rem;
    }
    .hotWord>h3 {
    	display: flex;
    	justify-content: space-between;
        font-size: .426667rem;
        padding: .2rem .333333rem;
        color: #666;
        font-weight: 700;
    }
    .hot {
    	padding: 0 .333333rem .333333rem;
    }
    .hotRecom {
    	display: inline-block;
        border-radius: .066667rem;
        padding: .2rem .266667rem;
        font-size: .373333rem;
        margin-right: .333333rem;
        margin-top: .333333rem;
        color: #666;
        background-color: #f7f7f7;
    }
    .wrap {
    	position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
    	background-color: #fff;
    }
    .searchHeader>.noBtn {
    	font-size: .166666rem;
    	color: mediumblue;
    	position: absolute;
    	right: .666666rem;
    	bottom: .633333rem;
    }
</style>
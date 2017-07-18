<template>
	<div class="wrap"><!-- v-if="show"-->
		<form class="selSite">
			<div class="backBtn"><span @click="back()" class="iconfont">&#xe617;</span></div>
			<p class="site">选择地址</p>
			<input type="text" placeholder="请输入地址" class="input" v-model="needValue" />
			<span class="iconfont noBtn" @click="noneValue()" v-if="needValue">&#xe604;</span>
		</form>
		<section class="noneWord" v-if="needValue">
			<div class="showNone">
				<img src="https://fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif" />
				<h3>没有搜索结果</h3>
				<p>换个关键字试试</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				needValue: "",
//				show: true,
			}
		},
		methods: {
			back() {
//				this.show = !this.show;
				history.back();
			},
			noneValue() {
				this.needValue = ""
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
        font-family: 'iconfont';  /* project id 339780 */
        src: url('http://at.alicdn.com/t/font_7rjbok7dd7w7mn29.eot');
        src: url('http://at.alicdn.com/t/font_7rjbok7dd7w7mn29.eot?#iefix') format('embedded-opentype'),
        url('http://at.alicdn.com/t/font_7rjbok7dd7w7mn29.woff') format('woff'),
        url('http://at.alicdn.com/t/font_7rjbok7dd7w7mn29.ttf') format('truetype'),
        url('http://at.alicdn.com/t/font_7rjbok7dd7w7mn29.svg#iconfont') format('svg');
    }
    .wrap {
    	position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        overflow: auto;
        background-color: #f4f4f4;
    }
    .selSite {
    	position: fixed;
        width: 100%;
        color: #fff;
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
        text-align: center;
        font-size: .32rem;
        padding-bottom: .32rem;
    }
    .site {
    	line-height: 1.173333rem;
        font-size: .48rem;
    }
    .backBtn {
    	position: absolute;
        left: .333333rem;
        top: .333333rem;
        width: .533333rem;
        height: .533333rem;
    }
    .iconfont {
    	font-size: .533333rem;
    }
    .input {
    	margin-top: .133333rem;
        width: 90%;
        height: .733333rem;
        border-radius: .733333rem;
        padding: 0 .48rem;
        font-size: .346667rem;
        box-sizing: border-box;
        border: none;
    }
    .noneWord {
    	padding-top: 6.35rem;
    }
    .showNone {
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	justify-content: center;
    }
    .showNone>img {
    	width: 5.333333rem;
    }
    .showNone>h3 {
    	margin: .333333rem 0 .266667rem;
        color: #6a6a6a;
        font-weight: 400;
        font-size: .453333rem;
    }
    .showNone>p {
    	margin: 0 0 .333333rem;
        color: #999;
        font-size: .306667rem;
    }
    .selSite>.noBtn {
    	font-size: .188888rem;
    	color: mediumblue;
    	position: absolute;
    	right: 1rem;
    	bottom: .566666rem;
    }

</style>
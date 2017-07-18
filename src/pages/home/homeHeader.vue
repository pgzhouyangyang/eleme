<template>
	<header>
		<div class="siteWeather">
			<router-link to="/homeSite">
				<div class="site">
					<span class="iconfont loc">&#xe632;</span>
					<span class="mySite">米粒儿宝儿童乐园</span>
					<span class="iconfont down">&#xe615;</span>
				</div>
			</router-link>
			<div class="weather">
				<div>
					<p v-text="weatherData.temperature+'°'" class="temper"></p>
					<p v-text="weatherData.description"></p>
				</div>
				<img :src="insertStr(weatherData.image_hash)"/>
			</div>
		</div>
		
		<router-link to="/homeShop">
			<input type="text" value="搜索商家、商品" class="input" />
		</router-link>
		
		<div class="recomFoods">
			<router-link to="/homeFoods/15&1">
				<a href="javascript:;" v-for="item of recomData" v-text="item.word"></a>
			</router-link>
		</div>
	</header>
</template>

<script>
	export default{
		data() {
			return {
				weatherData: [],
				recomData: [],
			}
		},
		methods: {
			insertStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/";
	            	return s0 + s1 + s2 + s3;
				}
	        }
		},
		created() {
			this.$http.get("https://mainsite-restapi.ele.me/bgs/weather/current?latitude=40.06312&longitude=116.34542").then(data=> {
				this.weatherData = data.body
			},err=> {
				console.log(err)
			});
			this.$http.get("https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=40.06312&longitude=116.34542").then(data=> {
				this.recomData = data.body
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
	  font-family: 'iconfont';  /* project id 337169 */
	  src: url('http://at.alicdn.com/t/font_2dwqeamtnl1bgldi.eot');
	  src: url('http://at.alicdn.com/t/font_2dwqeamtnl1bgldi.eot?#iefix') format('embedded-opentype'),
	  url('http://at.alicdn.com/t/font_2dwqeamtnl1bgldi.woff') format('woff'),
	  url('http://at.alicdn.com/t/font_2dwqeamtnl1bgldi.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_2dwqeamtnl1bgldi.svg#iconfont') format('svg');
	}
	
	/*homeHeader样式*/
	header {
		padding: .266667rem .373333rem;
    	background-color: #0096ff;
    	color: #fff;
    	height: 3.253333rem;
    	box-sizing: border-box;
	}
	.siteWeather, .site {
		display: flex;
		align-items: center;
	}
	.siteWeather {
		justify-content: space-between;
        height: .92rem;
	}
	.siteWeather>a {
		width: 80%;
		color: #fff;
	}
    .site {
		width: 65%;
	}
	.loc {
		font-size: .413333rem;
	}
	.down {
		font-size: .186667rem;
	}
	.mySite {
		margin: 0 .133333rem;
        font-size: .48rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
	}
	.weather {
		display: flex;
		align-items: center;
		text-align: right;
	}
	.temper {
		font-size: .373333rem;
	}
	.weather>img {
		margin-left: .106667rem;
        width: .733333rem;
        height: .733333rem;
	}
	
	.input {
		display: block;
        margin: .2rem 0;
        width: 100%;
        height: .96rem;
        text-align: center;
        border-radius: .96rem;
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
        color: #333;
        font-size: .346667rem;
        border: none;
	}
	
	.recomFoods {
		align-items: center;
        white-space: nowrap;
        overflow-x: auto;
	}
	.recomFoods a:not(:last-child) {
        margin-right: .4rem;
    }
    .recomFoods a {
    	color: currentColor;
    }
</style>
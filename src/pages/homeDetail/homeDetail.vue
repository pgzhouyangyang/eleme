<template>
	<!--https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=0&limit=20&extras[]=activities&terminal=h5-->
	
	
	<!--
		首页
	https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.070786&longitude=116.336267&offset=20&limit=20&extras[]=activities&terminal=h5
		
		详情页
	https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=183853
	
		评价
	https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings?has_content=true&offset=0&limit=10	
	https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings?has_content=true&tag_name=%E5%85%A8%E9%83%A8&offset=10&limit=10
	
	评分	
	https://mainsite-restapi.ele.me/ugc/v2/restaurants/183853/ratings/scores
	评价的标签
	https://mainsite-restapi.ele.me/ugc/v2/restaurants/721136/ratings/tags
	
	-->
	<div class="homeDetail">
		
	</div>
</template>

<script>
	export default {
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
		created(){
			this.axios.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.070786&longitude=116.336267&offset=20&limit=20&extras[]=activities&terminal=h5').then(data=>{
				console.log('首页数据')
				console.log(data.data)
			},err=>{
				console.log(err)
			})
			this.axios.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=183853').then(data=>{
				console.log(data.data)
			},err=>{
				console.log(err)
			})
		}
	}
	
	
	
</script>

<style scoped>
</style>
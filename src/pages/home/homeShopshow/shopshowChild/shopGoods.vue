<template>
	<div>
		<div class="goods">
			<router-link :to="'/shopShow/' + id + '/goods&' + id">
				<div class="left">
					<span>商品</span>
				</div>
			</router-link>
			<router-link :to="'/shopShow/' + id + '/wangbo'">
				<div class="right">
					<span>评价</span>
				</div>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				id: this.$route.params.id
			}
		}
	}
</script>

<style scoped>
	.goods {
		height: 1.2rem;
		line-height: 1.2rem;
        display: flex;
        background-color: #fff;
        color: #666;
	}
	.goods>a {
		display: flex;
		flex: 1;
	}
	.left, .right {
		position: relative;
    	flex: 1;
    	display: block;
    	width: 0;
    	text-align: center;
    	font-size: .373333rem;
    	border-bottom: 1px solid #ddd;
	}
	.left>span, .right>span {
		position: relative;
	}
	
	.router-link-active {
		color: #3190e8 !important;
	}
	.router-link-active span:after {
		content: "";
        position: absolute;
        bottom: -.16rem;
        left: -.066667rem;
        right: -.066667rem;
        height: .053333rem;
        background-color: #3190e8;
        border-radius: .04rem;
	}
</style>
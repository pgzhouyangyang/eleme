<template>
	<div class="paper">
		<img src="https://github.elemecdn.com/eleme/fe-static/master/media/empty/error-service.png"/>
		<h3>无法使用代金券</h3>
		<p>非客户端或客户端版本过低</p>
		<button>下载或升级客户端</button>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.paper{
	position: absolute;
	top: 80%;
	width: 100%;
	transform: translateY(80%);
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.paper>img{
	height: 2.266667rem;
	width: 4rem;
}
.paper>h3{
	margin: .333333rem 0 .266667rem;
	color: #6a6a6a;
	font-size: .453333rem;
	font-weight: 400;
}
.paper>p{
	font-size: .306667rem;
	font-weight: 400;
	margin: 0 0 .333333rem;
	color: #999;
}
.paper>button{
	width: 3.2rem;
	background-color: #56d176;
	padding: .266667rem 0;
	border-radius: .053333rem;
	color: white;
}
</style>
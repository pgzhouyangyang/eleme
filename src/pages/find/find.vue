<template>
	<div class="">
		<find-header></find-header>
		<find-mine></find-mine>
		<bottom-nav></bottom-nav>
	</div>
</template>

<script>
	import bottomNav from '../common/footer.vue'
	import findHeader from './find_header.vue'
	import findMine from './find_mine.vue'
	export default {
		components:{
			findHeader,
			findMine,
			bottomNav
		}
	}
</script>

<style>
	.find-header{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display:flex;
		align-items: center;
		height:1.173rem;
		background: rgb(0, 151, 255);
		color: #fff;
		line-height: 1.173rem;
    	z-index: 8844;
		font-size: 0.48rem;
	}
	.header-back{
		width: 1.173rem;
		text-align: center;
	}
	.header-title{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		max-width: 50%;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-weight: 700;
	    font-size: 1em;
		font-weight: 700;
	    line-height: 1.173333rem;
	}
	.entry{
		margin-bottom: 0.28rem;
	}
	.parts{
		border-top: 1px solid #eee;
		margin-top: 1.173rem;
	}
	.list3{
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.list3 .list3_router{
		width: 50%;
		margin-left: 50%;
		padding: .64rem .4rem;
	    height: 2.306667rem;
		border-bottom: 1px solid #ededed;
		box-sizing: border-box;
	}
	.list3 .list3_router:first-of-type{
		position: absolute;
		margin-left:0;
		padding: 0.4rem;
		padding-top: 0.64rem;
		border-right: 1px solid #ededed;
		height: 4.613333rem
	}

	.list3 .list3_router img{
		margin-top: -3%;
		width: 1.2rem;
		float: right;
	}
	.list3 .list3_router:first-of-type img{
		width: 2rem;
	    margin: .56rem .693333rem 0;
	    position: absolute;
	    bottom: .64rem;
	}
	.list3_router .title{
		line-height: 1.2;
		font-size: .48rem;
		margin-bottom: .16rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.list3_router .tips{
		line-height: 1.2;
	    font-size: .32rem;
	    color: #999;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.sub-pic-hash{
		height: 2.306667rem;
	}
	.sub-pic-hash img{
		width: 100%;
		height: 100%;
	}
	.pro-list{
		margin-bottom: .28rem;
	    background: #fff;
	    border-top: 1px solid #eee;
	    border-bottom: .013333rem solid #eee;
		line-height: 1.2;
	}
	.activity-header{
		padding-top: .52rem;
	    text-align: center;
	    font-size: .48rem;
	    font-weight: 700;
	    color: #333;
	}
	.activity-header .line{
		display: inline-block;
	    margin: .213333rem .093333rem .173333rem;
	    border: 1px solid #333;
	    width: .4rem;
	    height: 0;
	    position: relative;
	}
	.activity-header .line:after{
		position: absolute;
	    top: -.066667rem;
	    content: "";
	    background: #333;
	    height: .133333rem;
	    width: .133333rem;
	    border-radius: 50%;
	}
	.activity-header .left:after{
		right: -.066667rem;
	}
	.activity-header .right:after{
		left: -.066667rem;
	}
	.sub-title{
		font-size: .293333rem;
	    color: #999;
	    text-align: center;
	    padding-bottom: .213333rem;
	}
	.activity-body{
		display: flex;
		padding: .32rem 0 .4rem .4rem;
    	white-space: nowrap;

	}
	.discover-food{
		position: relative;
		width: 2.96rem;
	   	margin-right: .16rem;
	}
	.discover-food>img{
		width: 100%;
	    margin-bottom: .253333rem;
	}
	.food-name{
		font-size: .346667rem;
	    color: #333;
	    margin-bottom: .133333rem;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mine{
		padding-bottom: 1.333333rem
	}
	.food-info{
		height: .64rem;
    	line-height: .64rem;
	}
	.food-info .price{
		font-size: .346667rem;
	    height: .48rem;
	    line-height: .48rem;
	    color: #ff6000;
	    margin-right: .093333rem;
	    max-width: 1.333333rem;
	    display: inline-block;
	    vertical-align: middle;
	}
	.org-price{
		font-size: .293333rem;
	    color: #aaa;
	    max-width: 1.066667rem;
	    display: inline-block;
	    vertical-align: middle;
		text-decoration: line-through;
	}
	.discount{
		position: absolute;
		top: 0;
		left: 0;
		font-size: .293333rem;
		color: #fff;
		background: #413d3c;
		padding: .066667rem;
	}
	.more{
		display: block;
		font-size: .346667rem;
	    color: #999;
	    text-align: center;
	    padding: 0 0 .48rem;
	}
</style>

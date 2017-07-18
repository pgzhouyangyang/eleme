<template>
	<div class="container" >
		<div class="main">
			<header>
				<span></span>
				<h4>订单</h4>
			</header>
			<section v-if="anyway==0">
				<img src="../../../static/images/error-load.png">
				<h3>近三个月无外卖订单</h3>
			</section>
			<div class="order" v-if="anyway>0">
				<a class="ordercard" v-for="">
					<div class="ordercard-body">
						<div class="ordercard-img">
							<img :src="bgImg(pri(list[0]).image_path)">
						</div>
						<div class="ordercard-content" >
							<div class="ordercard-content-head">
								<div class="title">
									<span class="name">
										{{pri(list[0]).name}}
									</span>
									<span class="status">
										订单已完成
									</span>
								</div>
								<p class="datetime">27分钟前</p>
							</div>
							<div class="ordercard-content-detail" v-for="(details,index) of list" v-if="index==0">
								<span class="name">{{details.name}}等</span>
								<span class="price">￥{{(sum()+5)}}</span>
							</div>
						</div>
					</div>
					<router-link to="/check" class="ordercard-bottom">
						<button class="cardone">再来一单</button>
					</router-link>
				</a>
			</div>
		</div>
		<bar></bar>
	</div>
</template>

<script>
import bar from "../common/footer"
export default {
	data() {
        return {
            allData:[]
        }
    },
	components: {
		bar
	},
	computed:{
		list(){
		return this.$store.getters.allGoods
		},
        anyway(){
            return this.$store.getters.getsure
        }
	},
	created(){
        this.$http.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=40.06312&longitude=116.34542&offset=0&limit=30&extras[]=activities&terminal=h5").then(data=>{this.allData=data.body
        },err=>{console.log(err)}
        )
    },
    methods: {
        sum(){
            var allprice =0
            for(var value of this.list){
                allprice+=value.count*value.specfoods[0].price
                }
            return allprice
        },
        pri(obj){
			console.log(obj)
            for(var i =0;i<this.allData.length;i++){
                if(this.allData[i].id==obj.restaurant_id){
                console.log(this.allData[i])
                return this.allData[i]
				}
				
            }
        },
        details(){
            for(var value of this.list){
                return value
            }
        },
        bgImg(str) {
			if(str) {
				var s0 = "//fuss10.elemecdn.com/";
				var s1 = str.substring(0,1) + "/";
				var s2 = str.substring(1,3) + "/";
				var s3 = "";
				str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png" : s3 = str.substring(3) + ".jpeg";
				return s0 + s1 + s2 + s3;
				////fuss10.elemecdn.com/5/b1/b6a7e7d294eda56685c9043d8427djpeg.jpeg
			}
	    }
    }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400;
}
header{
	position: relative;
	background: rgb(0, 151, 255);
    z-index: 8844;
	/*position: fixed;*/
    top: 0;
    left: 0;
	width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
}
h4{
	text-align: center;
	line-height: 1.173333rem;
}
section{
	margin-top: 2.666667rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/*display: none;*/
}
img{
	display: block;
	width: 4rem;
	height: 2.66667rem;
	max-width: 100%;
}
h3{
	margin: .333333rem 0 .266667rem;
    color: #6a6a6a;
    font-weight: 400;
    font-size: .453333rem;
}
section button{
	padding: .266667rem 0;
    width: 3.2rem;
    border: none;
    border-radius: .053333rem;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 1.2em;
    font-family: inherit;
}
.order{
		margin-bottom: .266667rem;
}
.ordercard{
	display: block;
    margin-top: .266667rem;
    background-color: #fff;
    padding: .373333rem 0 0 .4rem;
	outline: 0;
    color: inherit;
    text-decoration: none;
}
.ordercard-body{
	display: flex;	
}
.ordercard-img{
	padding-right: .266667rem;
    flex: none;
}
.ordercard-img img{
	border-radius: .053333rem;
    border: 1px solid #eee;
    width: .853333rem;
    height: .853333rem;
	max-width: 100%;
}
.ordercard-content{
	flex: 1;
	width: 0;
}
.ordercard-content-head{
	border-bottom: 1px solid #eee;
    padding-right: .346667rem;
    padding-bottom: .266667rem;
}
.ordercard-content-head .title{
	justify-content: space-between;
	display: flex;
    align-items: center;
}
.ordercard-content-head .title .name{
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	font-size: .426667rem;
    line-height: 1.5em;
    color: #333;
	max-width: 10em;
}
.ordercard-content-head .status{
	font-size: .346667rem;
    text-align: right;
    color: #333;
    max-width: 10em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.datetime{
	font-size: .293333rem;
    color: #999;
}
.ordercard-content-detail{
	display: flex;
	justify-content: space-between;
    padding: .4rem .346667rem .4rem 0;
}
.ordercard-content-detail .name{
	font-size: .346667rem;
    color: #666;
    display: flex;
    align-items: center;
}
.ordercard-content-detail .price{
	flex-basis: 1.6rem;
    text-align: right;
    font-size: .346667rem;
    color: #333;
    font-weight: 700;
}
.ordercard-bottom{
	display: flex;
	border-top: 1px solid #eee;
    padding: .266667rem .426667rem;
	justify-content: flex-end;
}
.ordercard-bottom .cardone{
	padding: .133333rem .266667rem;
    border: 1px solid #3190e8;
    border-radius: .053333rem;
    background-color: transparent;
    outline: none;
    font-size: .346667rem;
    color: #3190e8;
    margin-left: .2rem;
}
.ordercard-bottom .cardtwo{
	padding: .133333rem .266667rem;
    border: 1px solid #3190e8;
    border-radius: .053333rem;
    background-color: transparent;
    outline: none;
    font-size: .346667rem;
    color: #3190e8;
    margin-left: .2rem;	
	color: #ff6000;
    border-color: #ff6000;
}
</style>
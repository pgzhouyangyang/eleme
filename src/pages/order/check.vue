<template>
    <div class="check">
        <header class="check-head">
            <span class="head-left" onclick="history.back()">
             <img src="../../../static/images/left.png">
            </span>
            <h1 class="head-center">确认订单</h1>
        </header>
        <div class="check-main">
            <section class="adress">
                <div class="icon" >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 42"><path fill="#3190E8" fill-rule="evenodd" d="M14.548 40.592c.147.134 1.153.957 2.452.964 1.3.006 2.322-.855 2.458-.979C24.168 36.303 34 26.28 34 17.079 34 7.647 26.389 0 17 0S0 7.647 0 17.08c-.066 9.21 9.825 19.248 14.548 23.512zM17 24.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572z"/></svg>
                </div>
                <div>
                    X先生 1888888888 <br/>
                    北京市昌平区育新物美大卖场
                </div>
            </section>
            <section class="get">
                <div class="time">
                    <span>送达时间</span>
                </div>
                <div class="expect">
                    <p>尽快送达|预计11:36</p>
                </div>
            </section>
            <section class="pay">
                <div class="way">
                    <span class="one">支付方式</span>
                    <span class="two">在线支付</span>
                </div>
                <div class="redbeg">
                    <span class="one">红包</span>
                    <span class="two">暂时只在饿了么App中支持</span>
                </div>
            </section>
            <section class="details">
                <h3 class="shop">
                    <img  :src="bgImg(pri(list[0]).image_path)" > 
                    <span>{{pri(list[0]).name}}</span>
                </h3>
                <ul class="foodlist">
                    <li v-for="details of list">
                        <span class="name">{{details.name}}</span>
                        <span class="count">×&nbsp{{details.count}}</span>
                        <span class="price">￥{{details.specfoods[0].price}}</span>
                    </li>
                </ul>
                <div class="sendprice" >
                    <span class="send">配送费</span>
                    <span class="price" >￥{{pri(details).float_delivery_fee}}</span>
                </div>
                <div class="total">
                    <div><span>{{'订单'+'￥'+(sum()+pri(details).float_delivery_fee)}}</span></div>
                    <span>待支付 ￥{{(sum()+pri(details).float_delivery_fee)}}</span>
                </div>
            </section>
            <div class="last">
                <section class="options">
                    <a>
                        <div class="lastcommon">
                            <span>订单备注</span>
                            <span>口味、偏好等</span>
                        </div>
                    </a>
                    <a>
                        <div class="lastcommon two">
                            <span>发票抬头</span>
                            <span>商家暂时不支持开发票</span>
                        </div>
                    </a>
                </section>
            </div>
            <footer>
                <span>待支付 ￥{{(sum()+pri(details).float_delivery_fee)}}</span>
                <button @click="su()">确认下单</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allData:[],
            sure:0

        }
    },
	computed:{
		list(){
		return this.$store.getters.allGoods
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
            for(var i =0;i<this.allData.length;i++){
                if(this.allData[i].id==obj.restaurant_id)
                console.log(this.allData[i])
                return this.allData[i]
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
	        },
        su(){
            this.$store.commit("AREYOU_SURE")
        }
    }
    }   
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: 400;
}
.check{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
header{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
}
.head-left{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
}
.head-left img{
    margin-right: .133333rem;
    width: .506667rem;
    height: .506667rem;
    vertical-align: middle;
    max-width: 100%;
}
.head-center{
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    transform: translateX(-50%);
}
.check-main{
    font-size: .426667rem;
    color: #333;
    padding-bottom: 1.413333rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.adress{
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff url(../../../static/images/bottom.png) repeat-x 0 100%;
}
.icon{
    margin:.1rem .2rem 0 .2rem; 
}
svg{
    width:.466667rem;
    height:.466667rem;
}
.get{
    margin-bottom: .266667rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 0;
    border-left: .133333rem solid #3190e8;
    padding: .266667rem .4rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}
.time{
    font-weight: 700;
}
.expect{
    flex: 1;
    display: block;
    width: 0;
    text-align: right;
    color: #3190e8;
}
.pay{
    margin-bottom: .266667rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}
.way{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}
.way .one{
    font-size: .426667rem;
    color: #333;
}
.way .two{
    display: flex;
    align-items: center;
    color: #999;
    font-size: .346667rem;
    max-width: 6.933333rem;
}
.redbeg{
    display: flex;
    align-items: center;    
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}
.redbeg .one{
    font-size: .426667rem;
    color: #333;
}
.redbeg .two{
    display: flex;
    align-items: center;
    color: #999;
    font-size: .346667rem;
    max-width: 6.933333rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.details{
    margin-bottom: .266667rem;  
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
}
.details h3{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.details img{
    margin-right: .133333rem;
    width: .506667rem;
    height: .506667rem;
    vertical-align: middle;
}
.shop{
    padding: .266667rem .4rem;
    border-bottom: .013333rem solid #eee;
    display: block;
    font-size: 1.17em;
}
.foodlist{
    padding: .2rem .4rem;
    color: #666;
    font-size: .346667rem;
    border-bottom: .013333rem solid #eee;
    list-style: none;
}
.foodlist li{
    display: flex;
    align-items: center;
    width: 100%;
    font-size: .373333rem;
    color: inherit;
    padding: .2rem 0;
}
.foodlist .name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 9;
    display: block;
    width: 0;
    font-size: .373333rem;
    color: inherit;
}
.foodlist .count{
    flex: 1;
    display: block;
    width: 0;
    text-align: right;
    color: #999;
    font-size: .373333rem;
}
.foodlist .price{
    flex: 2;
    display: block;
    width: 0;
    text-align: right;
    font-size: .373333rem;
    color: inherit;
}
.sendprice{
    padding: .266667rem .4rem;
    font-size: .32rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666;
}
.send{
    font-size: .32rem;
    color: #666;
}
.price{
    font-size: .32rem;
    color: #666;
}
.total{
    padding: .266667rem .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .346667rem;
    color: #666;
}
.total>div{
    font-size: .346667rem;
    color: #666;
}
.total>span{
    font-size: .346667rem;
    color: #666;
}
.last{
    font-size: .426667rem;
    color: #333;
}
.last .options{
    border-top: 0;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: .013333rem solid #eee;
    font-size: .426667rem;
    color: #333;
}
a{
    font-size: .373333rem;
    outline: 0;
    color: inherit;
    text-decoration: none;
}
a .lastcommon{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .24rem .346667rem .28rem 0;
    font-size: .426667rem;
    color: #333;
    margin-left: .386667rem;
    border-bottom: .013333rem solid #eee;
}

a .two{
    color: #bbb;
}
footer{
    height: 1.173333rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
    font-size: .426667rem;
    color: #333;
}
footer>span{
    color: #fff;
    font-size: .48rem;
    line-height: 1.173333rem;
    padding-left: .266667rem;
}
footer>button{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #2395ff;
    min-width: 2.8rem;
    padding: 0 .133333rem;
    border: none;
    color: #fff;
    font-size: .453333rem;
}

</style>
<template lang="html">
    <div class="SwitchTab-wrapper">
        <section v-for="item of footList" class="FoodItem_1">
            <div class="FoodList_1" v-for="f of item.foods">
                <router-link :to="'/shopShow/1194151'">
                <img :src="imgStr(f.image_hash,200,200)">
                <h4 class="name">{{f.name}}</h4>
                <div class="restaurant_name">{{f.restaurant_name}}</div>
                <div class="price">
                    <div>
                        <i>￥</i>{{f.price}}
                    </div>
                    <ul>
                        <li v-for="rec of f.rec_reasons">
                            {{rec}}
                        </li>
                    </ul>
                </div>
                </router-link>
            </div>

            <div class="FoodList_2" v-if="item.restaurant">
                <div class="restaurant_img">
                    <img :src="imgStr(item.restaurant.image_path)">

                </div>
                <div class="restaurant_dir">
                    <div class="name_dir">
                        <h3>{{item.restaurant.name}}{{id}}</h3>
                        <ul>
                            <li v-for="a of item.restaurant.supports">
                                <span>
                                    {{a.icon_name}}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="ShopItem-Iajkd">
                        <div class="ShopItem-2wfmg">
                            <div class="Rating-139B7">
                                <div class="Rating-1YOIx">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-for="b of 5">
                                        <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#eee;stroke:#eee;stroke-width:1;fill-rule:nonzero"/>
                                    </svg>
                                </div>
                                <div class="Rating-2siS3"  :style="{width:item.restaurant.rating/5*100+'%'}">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-for="c of 5">
                                        <polygon points="10,0 16,18 1,6 19,6 4,18" style="fill:#ffaa0c;stroke:#ffaa0c;stroke-width:1;fill-rule:nonzero"/>
                                    </svg>
                                </div>
                            </div>
                            <span class="ShopItem-ySipR">{{item.restaurant.rating}}</span>
                            <span>月售{{item.restaurant.rating_count}}单</span>
                        </div>
                        <ul class="ShopItem-ax7Ig">
                            <li class="ShopItem-3waaq" v-if="item.restaurant.delivery_mode.text=='蜂鸟专送'">准时达</li>
                            <li class="ShopItem-2r_yT">{{item.restaurant.delivery_mode.text}}</li>
                        </ul>
                    </div>
                    <div class="ShopItem-Iajkd1">
                        <div class="ShopItem-ax7Ig ShopItem-3KTr6">
                            <span>￥{{item.restaurant.float_minimum_order_amount}}起送</span>|
                            <span>配送费￥{{item.restaurant.float_delivery_fee}}</span>
                        </div>
                        <div class="ShopItem-3KTr6">
                            <span v-if="item.restaurant.distance>1000">
                                {{item.restaurant.distance/1000|number}}km
                            </span>
                            <span v-if="item.restaurant.distance<1000">
                                {{item.restaurant.distance}}m
                            </span> |
                            <span class="ShopItem-tkrEr">{{item.restaurant.order_lead_time}}分钟</span>
                        </div>
                    </div>
                    <div class="ShopItem-footer">
                        <div class="Activity-JTpeM" v-for="(c,index) of item.restaurant.activities" v-show="index<num">
                            <span class="Activity-2tiNI">{{c.icon_name}}</span>
                            <span class="Activity-3Ztac">{{c.description}}</span>
                        </div>
                        <span class="Activity-UNQ_H" v-if="item.restaurant.activities.length>=3" @click="show()">{{item.restaurant.activities.length}}个
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10" height="5" :style="{'transform':tran}">
                                <polygon points="0,0 10,0 5,5" style="fill:#999;stroke:#999;stroke-width:1;fill-rule:nonzero"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            footList:[],
            num:2,
            tran:"",
            count:0
            // id:this.$route.params.id
        }
    },
    methods:{
        show(){
            if (this.num==2) {
                this.num=100;
                this.tran="rotate(180deg)";
            }else{
                this.num=2;
                this.tran=""
            }
        },
        imgStr(str,width,height) {
            if(str&&width&&height) {
                var s0 = "//fuss10.elemecdn.com/";
                var s1 = str.substring(0,1) + "/";
                var s2 = str.substring(1,3) + "/";
                var s3 = "";
                str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!"+width+"x"+height+"r/gravity/Center/crop/"+width+"x"+height+"/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!"+width+"x"+height+"r/gravity/Center/crop/"+width+"x"+height+"/";
                return s0 + s1 + s2 + s3;
            }else{
                var s0 = "http://fuss10.elemecdn.com/";
                var s1 = str.substring(0,1) + "/";
                var s2 = str.substring(1,3) + "/";
                var s3 = "";
                str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/";
                return s0 + s1 + s2 + s3;
            }
        }
    },
    created(){
        this.axios.get("https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=39.90469&longitude=116.407173&offset=0&limit=10&columns=2&request_id=65d72c94-00fc-41e4-9a90-80e4204fa9bb&tag_id="+this.id+"&extras=%5B%22activities%22%5D").then(data=>{
            console.log(data.data);
            this.footList=data.data
        });
    },
    filters:{
        number(str){
            var n=str.toString().split("").indexOf(".")
            return str.toString().split("").slice(0,n+3).join("")
        }
    },
    mounted(){
        window.onscroll=()=>{
            var winH=$(window).height();
            var scrollTop=$(window).scrollTop();
            var top=$("body").height();
            if (winH+scrollTop>=top) {
                this.count+=10
                this.axios.get("https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=39.90469&longitude=116.407173&offset="+this.count+"&limit=10&columns=2&request_id=65d72c94-00fc-41e4-9a90-80e4204fa9bb&tag_id="+this.id+"&extras=%5B%22activities%22%5D").then(data=>{
                    data.data.map(item=>{
                        this.footList.push(item)
                    })
                });
            }
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        }
    },
    watch:{
        id(curVal, oldVal){
            $(window).scrollTop(0)
            this.axios.get("https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=39.90469&longitude=116.407173&offset=0&limit=10&columns=2&request_id=65d72c94-00fc-41e4-9a90-80e4204fa9bb&tag_id="+curVal+"&extras=%5B%22activities%22%5D").then(data=>{
                console.log(data.data);
                this.footList=data.data
            });
        }
    }
}
</script>
<style lang="css">
    .FoodItem_1{
        display: flex;
        border-bottom: 1px solid #f3f3f3;
        background: #fff;
        margin-bottom: .2rem;
        justify-content: space-between;

    }
    .FoodList_1{
        padding: .266667rem;
        width: 50%;
        height: 5.573333rem;
        box-sizing: border-box;
        border-left: 1px solid #f3f3f3;
    }
    .FoodList_1>a>img{
        width: 4.466667rem;
        height: 3.066667rem;
    }
    .FoodList_1 .name{
        margin-top: .2rem;
        color: #333;
        font-size: .4rem;
        line-height: .533333rem;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .FoodList_1 .restaurant_name{
        color: #999;
        font-size: .293333rem;
        line-height: .426667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .FoodList_1 .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .2rem;
        line-height: .533333rem;

    }
    .FoodList_1 .price>div{
        color: #ff6000;
        font-weight: 700;
        font-size: .48rem;
    }
    .FoodList_1 .price>div>i{
        margin-right: .04rem;
        font-weight: 400;
        font-style: normal;
        font-size: .293333rem;
    }
    .FoodList_1 .price>ul{
        display: flex;
    }
    .FoodList_1 .price>ul>li{
        margin-left: .133333rem;
        padding: 0 .08rem;
        height: .4rem;
        border: 1px solid #ff5400;
        border-radius: .053333rem;
        color: #ff5400;
        font-size: .24rem;
        line-height: .373333rem;
    }
    .FoodList_2{
        flex:1 1;
        padding: .4rem .266667rem;
        display: flex;
    }
    .restaurant_img{
        width: 1.733333rem;
        height: 1.733333rem;
        position: relative;
        flex: 0 0 auto;
    }
    .restaurant_img>img{
        width: 100%;
        height: 100%;
    }
    .restaurant_dir{
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        overflow: hidden;
        margin-left: .266667rem;
    }
    .name_dir{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .name_dir>h3{
        overflow: hidden;
        height: .56rem;
        color: #333;
        font-weight: 700;
        font-size: .426667rem;
        line-height: .56rem;
    }
    .name_dir>ul{
        display: flex;
    }
    .name_dir>ul>li{
        margin-left: .08rem;
        width: .32rem;
        height: .32rem;
        border: 1px solid #ddd;
        border-radius: .053333rem;
        color: #999;
        text-align: center;
        font-size: .266667rem;
        line-height: .293333rem;
    }
    .ShopItem-Iajkd{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .16rem 0 .24rem;
    }
    .ShopItem-2wfmg{
        height: .346667rem;
        color: #666;
        font-size: .293333rem;
        line-height: .346667rem;
        display: flex;
        align-items: center;
    }
    .Rating-139B7{
        position: relative;
        overflow: hidden;
    }
    .Rating-139B7 svg{
        display: block;
        flex: 0 0 1em;
        margin: 0 1px;
        width: 1em;
        height: 1em;
    }
    .Rating-1YOIx{
        display: flex;
    }
    .Rating-2siS3{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .ShopItem-ySipR{
        margin: 0 .16rem 0 .106667rem;
        color: #ff5339;
    }
    .ShopItem-ax7Ig{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .ShopItem-3waaq{
        border-color: #44a5ff;
        background: #fff;
        color: #2395ff;
        padding: 0 .053333rem;
        height: .346667rem;
        border: 1px solid;
        border-radius: .053333rem;
        text-align: center;
        font-size: .266667rem;
        line-height: .32rem;
    }
    .ShopItem-2r_yT{
        margin-left: .106667rem;
        border-color: #2395ff;
        background: #2395ff;
        color: #fff;
        padding: 0 .053333rem;
        height: .346667rem;
        border: 1px solid;
        border-radius: .053333rem;
        text-align: center;
        font-size: .266667rem;
        line-height: .32rem;
    }
    .ShopItem-Iajkd1{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ShopItem-3KTr6{
        color: #666;
        font-size: .293333rem;
    }
    .ShopItem-tkrEr{
        color: #2395ff;
    }
    .ShopItem-footer{
        position: relative;
        margin-top: .213333rem;
        padding-top: .24rem;
        border-top: 1px dashed #e6e6e6;
        padding-right: 1.066667rem;
    }
    .Activity-JTpeM{
        display: flex;
        margin-bottom: .133333rem;
        height: .346667rem;
    }
    .Activity-2tiNI{
        flex-shrink: 0;
        display: block;
        margin-right: .173333rem;
        width: .346667rem;
        height: .346667rem;
        border-radius: .053333rem;
        color: #fff;
        text-align: center;
        font-size: .266667rem;
        line-height: .346667rem;
        background: rgb(240, 115, 115);
    }
    .Activity-3Ztac{
        overflow: hidden;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .293333rem;
        line-height: .346667rem;
    }
    .Activity-UNQ_H{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: .32rem;
        width: 1.066667rem;
        height: .666667rem;
        color: #999;
        font-size: .266667rem;
        line-height: .346667rem;
    }
    .Activity-UNQ_H svg{
        display: block;
        margin-left: .093333rem;
        width: .16rem;
        height: .08rem;
        transition: all 0.3s;
        transform-origin: center;

    }
</style>

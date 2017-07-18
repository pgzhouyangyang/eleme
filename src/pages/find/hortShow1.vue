<template lang="html">
    <div class="SwitchTab-wrapper">
        <section class="tab-list-item" v-for="item of footList">
            <!-- <router-link :to="'/shopShow/1194151'"> -->
            <header class="hortfood-header">
                <div class="title">
                    <img :src="imgStr(item.restaurant.image_path,220,220)" alt="">
                    <h3>{{item.restaurant.name}}</h3>
                </div>
                <span class="fee">¥{{item.restaurant.float_minimum_order_amount}}起送 / 费送费¥{{item.restaurant.float_delivery_fee}}</span>
            </header>
            <ul class="shopList">
                <li class="shopList-item" v-for="f of item.foods">
                    <router-link :to="'/shopShow/1194151'">
                        <img :src="imgStr(f.image_hash,220,220)" alt="">
                        <div class="">
                            <p v-text="f.name" class="name"></p>
                            <p v-text="'￥'+f.price" class="price"></p>
                            <p class="look">去看看</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <!-- </router-link> -->
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            footList:[],
            count:0
        }
    },
    methods:{
        get(pag){
            this.axios.get("https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=39.90469&longitude=116.407173&offset="+pag+"&limit=10&columns=2&request_id=b23fc467-8ac1-4616-914d-534b1bb9ddda&tag_id=-1&extras=%5B%22activities%22%5D").then(data=>{
                // console.log(data.data);
                data.data.map((item,index)=>{
                    this.footList.push(item)
                });
            });
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
        this.get(this.count);
        window.onscroll=()=>{
            var winH = $(window).height();
            var scrollTop=$(window).scrollTop();
            var top=$(".SwitchTab-wrapper")[0].offsetHeight;
            console.log(winH); // 1334
            console.log(top);  // 5285
            console.log(scrollTop);  // 4079

             if (winH+scrollTop-top>=128) {
                this.count+=10;
                console.log(1);
             this.get(this.count)
            }
        }
    },
    mounted(){

    }
}
</script>

<style lang="css">
    .tab-list-item{
        width:9.733333rem;
        margin: 0 auto;
        margin-bottom: 0.2rem;
        padding: 0 .24rem .333333rem;
        box-sizing: border-box;
        border-radius: .16rem;
        background: #fff;
        box-shadow: 0 .026667rem .053333rem 0 rgba(0,0,0,.1);
    }
    .hortfood-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 1.146667rem;
    }
    .hortfood-header .title{
        display: flex;
        flex:0 1 auto;
    }
    .hortfood-header .fee{
        flex-shrink: 0;
        display: block;
        color: #999;
        font-size: .293333rem;
    }
    .hortfood-header .title img{
        flex-shrink: 0;
        display: block;
        overflow: hidden;
        width: .56rem;
        height: .56rem;
        border-radius: 50%;
    }
    .hortfood-header .title h3{
        overflow: hidden;
        margin-left: .24rem;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 700;
        font-size: .373333rem;
    }
    .shopList{
        display: flex;
    }
    .shopList-item{
        width: 2.933333rem;
        margin-left: .226667rem;


    }
    .shopList .shopList-item:first-of-type{
        margin-left:0;
    }
    .shopList-item>a{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .shopList-item>a>img{
        width: 100%;
    }
    .shopList-item>a>div{
        flex-grow:1;
        display: flex;
        flex-direction: column;
    }
    .shopList-item .name{
        flex-grow: 1;
        overflow: hidden;
        margin: .2rem 0 .08rem;
        max-height: .906667rem;
        color: #333;
        font-size: .346667rem;
        line-height: .453333rem;
    }
    .shopList-item .price{
        color: #ff6000;
        font-weight: 700;
        font-size: .32rem;
        line-height: .48rem;
    }
    .shopList-item .look{
        margin: .186667rem auto 0;
        width: 2.666667rem;
        height: .746667rem;
        border: 1px solid #f44e4b;
        border-radius: .08rem;
        color: #f44e4b;
        text-align: center;
        font-size: .32rem;
        line-height: .72rem;
    }
</style>

<template lang="html">
    <div class="hort-wapper">
            <ul class="nav-wapper">
                <li v-for="(item,index) of hortData" class="nav-item" @click="num(item,index,item.id)">
                    <router-link :to="'/hortFood/proList/'+item.id" :class="{active:isClass==index}">{{item.name}}</router-link>
                </li>
            </ul>
        <router-view name="a" v-if="count==1"></router-view>
        <router-view name="b" v-if="count==0"></router-view>
    </div>

</template>

<script>

export default {
    data(){
        return{
            hortData:[],
            count:1,
            isClass:0,
            footList:[]
        }

    },
    created(){
        this.axios.get("https://mainsite-restapi.ele.me/hotfood/v1/guess/banner?latitude=39.90469&longitude=116.407173&request_id=b23fc467-8ac1-4616-914d-534b1bb9ddda").then(data=>{
            // console.log(data.data.tags);
            this.hortData=data.data.tags
        })
    },
    methods:{
        num(item,index,id){
            if (item.id==-1) {
                this.count=1;
            }else{
                this.count=0;
            };
            this.isClass=index;
        // console.log(this.count);
        }
    }

}
</script>

<style lang="css">
    .hort-wapper{
        padding-top: 1.506667rem;
    }
    .nav-wapper{
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        height: 1.306667rem;
        background-color: #fff;
        text-align: center;
        display: flex;
        padding: 0 .133333rem;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        box-shadow: 0 .026667rem .053333rem 0 rgba(0,0,0,.05);
        z-index: 999;
    }
    .nav-item{
        flex:1 0 ;
        padding: .333333rem .133333rem;
        width: 2.346667rem;
        color: #333;
        font-size: .346667rem;
    }
    .nav-item>a{
        display: block;
        overflow: hidden;
        width: 2.08rem;
        border: 1px solid #ddd;
        border-radius: 1.333333rem;
        text-align: center;
        line-height: .64rem;
    }
    .nav-item .active{
        color: #ff5339;
        font-weight: 700;
        border: 1px solid #ff5339;
    }
</style>

<template lang="html">
    <div class="mine">
        <section class="pro-list" v-for="(item,index) of findData">
            <div class="activity-header">
                <span class="line left"></span>
                {{item.title}}
                <span class="line right"></span>
            </div>
            <p v-text="item.description" class="sub-title"></p>
            <div class="activity-body">
                <div class="discover-food" v-for="p of item.foods">
                    <img :src="p.image_url" alt="">
                    <div>
                        <p v-text="p.name" class="food-name"></p>
                        <p class="food-info">
                            <span class="price" v-if="p.price">￥{{p.price}}</span>

                            <span class="price" v-else="p.price">{{p.points_required}}<span>积分</span>
                            </span>

                            <span class="org-price" v-if="p.original_price"><span>￥</span>{{p.original_price}}</span>
                        </p>
                    </div>
                    <span class="discount" v-if="p.discount_rate">{{p.discount_rate*10}}折</span>
                    <span class="discount" v-else="p.corner_marker">{{p.corner_marker}}</span>
                </div>
            </div>
            <!-- <div class="more" @click="ss(item)">查看更多


            </div> -->
            <router-link :to="item.url" class="more" v-if="index!=2">查看更多</router-link>
            <a :href="item.url" class="more" style="display:block" v-if="index==2">查看更多</a>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            findData:[]
        }
    },
    created(){
        this.axios.get("static/data/find.json").then(data=>{
            console.log(data.data);
            this.findData=data.data
        })
    }
}
</script>

<style lang="css">
</style>

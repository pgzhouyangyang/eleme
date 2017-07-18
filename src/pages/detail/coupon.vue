<template>
<div>
    <div v-for="item in alldata" :key="item">
    <a :href="item.url"  id="rewards_list">
        <img :src="item.logo" ref="img"></img>
        <div>
            <h3>{{item.title}}</h3>
            <p>
                <span>{{item.credits}}</span>
            </p>
        </div>
        <button ref="btn" class="btn">{{item.recommendText}}</button>
    </a>
    </div>
    <div id="footer">
        <span>
            没有更多了！
        </span>
    </div>
</div>
</template>

<script>
import vue from 'vue'
import jquery from "./jquery-2.2.3.js"
export default {
    name: 'name',
    data: function() {
        return {
            alldata: []
        }
    },

    created() {
        vue.http.get('../../../static/data/coupon.json').then(data => {
            this.alldata = data.body.data.items
            console.log(this.alldata)
        }, err => {
            console.log(err)
        })

    },
    
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    font-size: .12em;
    line-height: 1.3;
}

#rewards_list {
    background-color: #fff;
    overflow: hidden;
    position: relative;
    display: block;
    padding: .1rem;
    background-position: 3.02rem 50%;
    background-size: .08rem;
    border-bottom: 1px solid #f1f1f1
}

#rewards_list>* {
    float: left
}

#rewards_list>img {
    width: 1.1rem;
    height: .68rem;
    margin-right: .125rem;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
}

#rewards_list h3 {
    font-size: .14rem;
    font-weight: 400;
    overflow: hidden;
    width: 1.25rem;
    margin-top: .115rem;
    margin-bottom: .175rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#rewards_list span {
    font-size: .12rem;
    vertical-align: middle;
    display: inline-block;
    color: #ff6000
}

#rewards_list button {
    color: #ff6000;
    border-color: #ff6000;
    background-color: #fff;
    font-size: .12rem;
    float: right;
    height: .23rem;
    margin-top: .225rem;
    padding: 0 .06rem;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: .04rem;
}
#footer{
    font-size: .14rem;
    padding: .05rem 0;
    text-align: center;
    color: #999;
}
</style>
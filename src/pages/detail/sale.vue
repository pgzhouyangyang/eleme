<template>
    <div>
        <header>
            <img src="https://fuss10.elemecdn.com/6/d5/de7613f554b5db1380f266097504bjpeg.jpeg?imageMogr/format/webp/thumbnail/!750x350r/gravity/Center/crop/750x350/">
        </header>
        <div class="nav-wrap">
            <div id="nav">
                <ul>
                    <li>
                        <router-link to="/all">全部</router-link>
                    </li>
                    <li>
                        <router-link to="/brand">大牌特惠</router-link>
                    </li>
                    <li>
                        <router-link to="/tea">下午茶贵不贵</router-link>
                    </li>
                    <li>
                        <router-link to="/supermarket">商超百货</router-link>
                    </li>
                    <li>
                        <router-link to="/freshfruit">水果生鲜</router-link>
                    </li>
                    <li>
                        <router-link to="/flowermilk">鲜花奶茶</router-link>
                    </li>
                </ul>
        </div>
        <router-view></router-view>
        </div>
    </div>
</template>

<script>


import vue from 'vue'

export default {
    name: 'name',
    data: function() {	
        return {}
    },
    methods: {},
    
}
</script>

<style scoped>

html{
    font-size: 75px
}
header{
    /*position: relative;*/
    height: 4.666667rem;
}
header a{
    float: left
}
.nav-wrap{
    position: relative;
    height:20rem;
    text-align: center;

}
#nav{
    /*position: relative;*/
    width: 100%;
    height: 1.186667rem;
    border-bottom: 1px solid #ededed;
    background: #fff;
    overflow: hidden;
    position: -webkit-sticky;
    position: sticky;
    z-index: 100000;
    top:0;
}
#nav ul{
    padding: 0 .133333rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    
    
}
#nav li{
    display: inline-block;
    overflow: hidden;
    margin: 0 .133333rem;
    padding: .266667rem 0;
    height: 1.173333rem;
}
</style>
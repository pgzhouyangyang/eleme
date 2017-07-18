<template>
<div>
    <div id="sale_wrapper" v-for="item in alldata" :key="item">
        <div>
            <header>
                <img :src="insertStr(item.foods[0].image_path)">
                <div class="discount">{{mutiply(item.foods[0].discount_rate)}}折</div>
                <div class="shop">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
                    </svg>
                    <h4>{{item.foods[0].restaurant_name}}</h4>
                </div>
            </header>
            <h3>{{item.foods[0].name}}</h3>
            <footer>
                <div class="price">
                    <i>￥</i>
                    <span>{{item.foods[0].price}}</span>
                    <del>{{item.foods[0].original_price}}</del>
                </div>
                <button>抢</button>
            </footer>
           
        </div>
    </div>

</div>
</template>

<script>
import vue from 'vue'
export default {
    name: 'name',
    data: function() {
        return {
            alldata: [],

        }
    },
    methods: {
        insertStr(str) {
           if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = "";
	            	str.substring(str.length-3) == "png" ? s3 = str.substring(3) + ".png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" : s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/";
	            	return s0 + s1 + s2 + s3;
				}
        },
        mutiply(str) {
            if (str) {
                return Number(str) * 10
            }
        }
    },
    created() {
        vue.http.get('../../../static/data/freshfruit.json').then(data => {
            this.alldata = data.body
            console.log(this.alldata[0].foods[0].image_path)
        }, err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>
#sale_wrapper {
    margin: 0 .133333rem .666667rem;
    width: 4.6rem;
    float: left
}

header {
    position: relative;
    height: 4.6rem;
    color: #fff;
}

header img {
    display: block;
    width: 4.6rem;
    height: 4.6rem;
}

.discount {
    position: absolute;
    top: 0;
    left: 0;
    padding: .026667rem .066667rem;
    background: rgba(0, 0, 0, .7);
    font-weight: 400;
    font-size: .293333rem;
}

.shop {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    -webkit-box-align: end;
    align-items: flex-end;
    padding: 0 .186667rem;
    width: 4.6rem;
    height: 1.466667rem;
    background-image: linear-gradient(-180deg, transparent, rgba(0, 0, 0, .8));
    font-size: .266667rem;
    line-height: .666667rem;
}

svg {
    display: block;
    -webkit-box-flex: 0;
    flex: 0 0 0.226667rem;
    margin: 0 .093333rem .213333rem 0;
    width: .226667rem;
    height: .226667rem;
    fill: #fff;
    font-size: .266667rem;
    line-height: .666667rem;
}

h3 {
    overflow: hidden;
    height: .866667rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: .373333rem;
    line-height: .866667rem;
}

footer {
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: .64rem;
    padding: 0 .066667rem;
}

.price {
    display: flex;
    -webkit-box-align: baseline;
    align-items: baseline;
    font-size: .426667rem;
}

i {
    font-size: .65em;
    margin-right: .04rem;
    font-style: normal;
    color: #ff6000
}
.price span{
    font-weight: 700;
    color: #ff6000;
    font-size: 1em;
}
.price del{
    color: #999;
    font-size: .65em;
}
footer button{
    width: 1.066667rem;
    height: .64rem;
    border-radius: .053333rem;
    background: #f94843;
    color: #fff;
    font-weight: 700;
    font-size: .4rem;
    line-height: .64rem;
}
</style>
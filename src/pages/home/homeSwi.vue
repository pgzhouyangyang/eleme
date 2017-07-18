<template>
	<div> 
	        <swiper :options="swiperOption"  ref="mySwiper">
	            <!-- 这部分放你要渲染的那些内容 -->
	            <swiper-slide v-for="item of allData" :key="item">
	            	<router-link :to="'/homeFoods/' + item.id + '&' + item.business_flag">
		            	<img :src="insertStr(item.image_hash)" class="" />
						<p v-text="item.name" class=""></p>
					</router-link>
	            </swiper-slide>
	            <!-- 这是轮播的小圆点 -->
	            <div class="swiper-pagination" slot="pagination"></div>
	        </swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		components: {
            swiper,  
            swiperSlide  
        },
		data() {
			return {
				allData:[],
				swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 4,
                slidesPerGroup: 4,
                slidesPerColumn: 2,
                centeredSlides: false,
                slidesPerColumnFill: 'row',
                paginationClickable: true,
                spaceBetween: 0,
//              loop: true,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    }  
                }
			}
		},
		methods: {
			insertStr(str) {
				if(str) {
					var s0 = "//fuss10.elemecdn.com/";
	            	var s1 = str.substring(0,1) + "/";
	            	var s2 = str.substring(1,3) + "/";
	            	var s3 = str.substring(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";
	            	return s0 + s1 + s2 + s3;
				}
	        }
		},
		created() {
			this.$http.get("https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=40.07455&longitude=116.36403&templates[]=main_template").then(data=> {
				this.allData = data.body[0].entries
				//console.log(data.data[0].entries)
			},err=> {
				console.log(err)
			})
		},  
        //定义这个sweiper对象  
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            this.swiper.slideTo(0, 0, false);  
        }
	} 

</script>

<style scoped>
	.swiper-container {
		border-bottom: 1px solid #eee;
        background-color: #fff;
        min-height: 4.72rem;
        text-align: center;
        /*box-sizing: border-box;*/
	}
	.swiper-wrapper {
		min-height: 4.72rem;
    	/*background-color: #fff;*/
	}
	.swiper-slide {
		/*position: relative;*/
    	float: left;
    	margin-top: .293333rem;
    	width: 25%;
    	height: 2rem;
    	box-sizing: border-box;
	}
	.swiper-slide>a>img {
		/*position: relative;*/
    	/*display: inline-block;*/
    	width: 1.2rem;
    	height: 1.2rem;
	}
	.swiper-slide>a>p {
    	margin-top: .133333rem;
    	color: #666;
    	font-size: .32rem;
	}
</style>
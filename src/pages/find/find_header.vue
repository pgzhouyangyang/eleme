<template lang="html">
    <div class="discover">
        <header class="find-header">
            <div class="header-back">&lt;</div>
            <h1 class="header-title">发现</h1>
        </header>
        <section class="parts">
            <div class="entry list3">
                <div class="list3_router" v-for="item of findData[1]">
                    <img :src="imgStr(item.main_pic_hash)" alt="">
                    <p v-text="item.title" class="title" :style="{'color':item.title_color}"></p>
                    <p v-text="item.subtitle" class="tips"></p>
                </div>
            </div>
            <div class="entry">
                <div class="sub-pic-hash" v-for="item of findData[2]">
                    <img :src="imgStr(item.sub_pic_hash)" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            findData:[]
        }
    },
    created() {
        this.axios.get("https://mainsite-restapi.ele.me/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173").then(data=>{
            console.log(data.data);
            this.findData=data.data
        });
    },
    methods:{
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
    }
}
</script>

<style lang="css">
</style>

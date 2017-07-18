<template> 
	<div id="home"> 
		<home-header></home-header> 
		<home-swi></home-swi> 
		<home-recom></home-recom> 
		<bottom-nav></bottom-nav>
	</div> 
</template> 
 
<script> 
	import HomeHeader from "../pages/home/homeHeader" 
	import HomeSwi from "../pages/home/homeSwi" 
	import HomeRecom from "../pages/home/homeRecom" 
	import bottomNav from '../pages/common/footer.vue'
	export default{ 
		components: { 
		HomeSwi, 
		HomeHeader, 
		HomeRecom,
		bottomNav
		} 
	} 
</script> 
  
<style scoped> 
	#home {
		font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        line-height: 1.2;
	}
	h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        font-weight: 400;
    }
</style> 
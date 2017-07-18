<template>
	<div>
		<shop-header></shop-header>
		<shop-goods></shop-goods>
	</div>
</template>

<script>
	import ShopHeader from "./shopshowChild/shopHeader"
	import ShopGoods from "./shopshowChild/shopGoods"
	export default{
		components: {
			ShopHeader,
			ShopGoods
		}
	}
</script>

<style scoped>
	
</style>


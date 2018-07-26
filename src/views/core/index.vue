<template>
	<div id="core">123</div>
</template>

<script>
	export default {
		name: 'core',
		data() {
			return {}
		},
		mounted() {
			console.log(this.$route.query); //获取路由明文传参值
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
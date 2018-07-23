<template>
	<div id="login">
		<div class="title">模拟明文传参</div>
		<button class="btn" @click="loginBtn">进入系统</button>
	</div>
</template>

<script>
	//路由本页面跳转页面及传参
	export default {
		name: 'login',
		methods: {
			loginBtn() {
				this.$router.push({
					path: '/home',
					query: {
						name: "admin",
						pw: "123456"
					}
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.title{
		
	}
	
	.btn{
		
	}
</style>
<template>
	<div id="login">
		<div class="title">欢迎使用 vue+axios+vuex+router 前端框架</div>
		<div class="nav">
			<i class="icon iconfont icon-icon_tianqi_qing" />
			<i class="icon iconfont icon-icon_tianqi_xue" />
			<i class="icon iconfont icon-icon_tianqi_yin" />
			<i class="icon iconfont icon-icon_tianqi_yu" />
			<i class="icon iconfont icon-icon_tianqi_bingbao" />
			<i class="icon iconfont icon-icon_tianqi_duoyun" />
			<div class="btn" @click="enter">进入系统</div>
		</div>
	</div>
</template>

<script>
	import { setLocalStorage } from '@/assets/js/utils';

	export default {
		name: 'login',
		methods: {
			enter() {
				setLocalStorage("api_token", "api&token&value"); // 如果注销此行将无法跳转页面，因为在middleware中已经设置了token验证检查
				this.$router.push({
					path: '/core'
				})
			}
		},
		props: {},
		data() {
			return {};
		},
		mounted() {},
		components: {},
		filters: {},
		watch: {},
		computed: {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.title {
		text-align: center;
		font-size: 46px;
		font-weight: bold;
		margin-top: 200px;
	}
	
	.nav {
		display: flex;
		margin-top: 50px;
		justify-content: center;
		align-items: center;
		i {
			font-size: 50px;
		}
	}
	
	.btn {
		min-width: 140px;
		text-align: center;
		font-size: 24px;
		cursor: pointer;
		border-radius: 30px;
		background-color: #009688;
		color: white;
		width: fit-content;
		padding: 10px;
		margin-top: 0px;
	}
</style>
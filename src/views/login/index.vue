<template>
	<div id="login">
		<div class="title">欢迎使用 vue-web-project 前端框架</div>
		<div class="nav">
			<i class="icon iconfont icon-icon_tianqi_qing" />
			<i class="icon iconfont icon-icon_tianqi_xue" />
			<i class="icon iconfont icon-icon_tianqi_yin" />
			<i class="icon iconfont icon-icon_tianqi_yu" />
			<i class="icon iconfont icon-icon_tianqi_bingbao" />
			<i class="icon iconfont icon-icon_tianqi_duoyun" />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'login',
		methods: {},
		props: {},
		data() {
			return {};
		},
		mounted() {
			//			let param = {};
			//			this.$store.dispatch("getJson", param).then((json) => {
			//				console.log(json);
			//			}, (error) => {
			//				console.log(error);
			//			});
		},
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
</style>
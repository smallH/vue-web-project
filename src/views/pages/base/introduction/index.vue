<template>
	<div id="introduction">
		<div class="bground">
			<div class="title">概述</div>
			<div class="line"></div>
			<div class="content">vue-web框架是在vue脚骨架基础上优化的web前端开发框架。其中新增了包括如各浏览器默认样式差异重置、开发环境代理服务、token管理、iconfont图标管理、vuex服务管理、接口请求标准化、ie浏览器兼容es6语法等实例及功能。vue-web框架可以模块化、标准化、规范化实现前端开发。本官网中的Demo均只展示核心代码功能，想查看完整源代码请下载框架阅读。</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'introduction',
		data() {
			return {}
		},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#introduction {
		padding: 30px;
	}
	
	.bground {
		width: 100%;
		height: 100%;
		min-height: 500px;
		background-color: #fff;
		border-radius: 5px;
		.title {
			font-size: 36px;
		}
		.line {
			margin-top: 20px;
			border-bottom: solid 1px #E4E4E4;
		}
		.content {
			margin-top: 10px;
		}
	}
</style>
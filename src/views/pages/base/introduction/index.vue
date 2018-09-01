<template>
	<div id="introduction">
		<div class="bground">
			<div class="title">概述</div>
			<div class="line"></div>
			<div class="content">VueYu 框架是经过实际项目操作实践，在Vue脚手架基础上迭代开发的前端框架。目的在于让前端团队能迅速投入到商业Web项目开发。除脚手架基本功能外，还包括商业web项目应用中如各浏览器默认样式差异重置与兼容、开发环境代理服务、token管理、iconfont图标管理、vuex服务管理、接口请求标准化格式制定、ie浏览器兼容es6语法等实例及功能。VueYu框架可以模块化、团队化地投入到前端开发中，适用于敏捷开发、也适用于立项制开发。本网站中的Demo均只展示核心代码功能，想查看完整源代码请下载框架阅读学习。（本API界面即用VueYu框架开发）</div>
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
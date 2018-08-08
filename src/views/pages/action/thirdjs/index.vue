<template>
	<div id="thirdjs">
		<div class="bground">
			<div class="title">其它文件引用</div>
			<div class="line"></div>
			<div class="content">
				<div>第三方库引用是指对第三方提供的js库的引用，一些特殊的库需要手动导入.css文件，如wow.js。静态资源的引用是指对比较少变化或比较大的资源的引用，通常放到框架根目录的static文件夹内，在服务器中，往往会将此类资源放在CDN服务器中。</div>
				<div class="code-title">第三方库引用Demo：</div>
				<div class="wow flash">页面刷新，文字闪烁特效</div>
				<div class="code-title">核心代码：</div>
				<div class="md">
					<pre><code>import 'wowjs/css/libs/animate.css'
	import WowJS from 'wowjs'
	
	var wow = new WowJS.WOW({
		animateClass: 'animated',
		offset: 100,
		callback: function(box) {}
	});
	wow.init();</code></pre>
				</div>
				<div class="code-title">静态资源引用Demo：</div>
				<div>
					<img :src="imgUrl" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'wowjs/css/libs/animate.css'
	import WowJS from 'wowjs'

	export default {
		name: 'thirdjs',
		data() {
			return {
				imgUrl: 'static/logo.png'
			}
		},
		methods: {},
		mounted() {
			var wow = new WowJS.WOW({
				animateClass: 'animated',
				offset: 100,
				callback: function(box) {}
			});
			wow.init();
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#thirdjs {
		padding: 30px;
	}
	
	.code-title {
		margin-top: 10px;
		font-weight: bold;
	}
	
	.md {
		color: white;
		background-color: black;
		padding: 10px;
		margin-top: 10px;
		border-radius: 3px;
		font-size: 16px;
		width: 1000px;
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
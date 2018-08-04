<template>
	<div id="jsonserver">
		<div class="bground">
			<div class="title">json-server</div>
			<div class="line"></div>
			<div class="content">
				<div>json-server可以直接把一个json文件或模拟生成一组json数据托管成一个具备全RESTful风格的API，并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器，主要作用在于模拟前端json数据来源。在本框架根目录mock文件夹中，已配置了一个mockGetJson测试接口，启动命令即可。</div>
				<div class="code-title">package.json启动配置：</div>
				<div class="md">
					<pre><code>"mock": "nodemon --watch mock --exec json-server mock/db.js --routes mock/router/routes.json --host 127.17.5.117 --port 3000"</code></pre>
				</div>
				<div class="code-title">启动命令：</div>
				<div class="md">
					<pre><code>$ npm run mock</code></pre>
				</div>
				<div class="code-title">获得一个json数据地址：</div>
				<div class="md">
					<pre><code>http://127.17.5.117:3000/mockGetJson</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jsonserver',
		data() {
			return {}
		},
		methods: {},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#jsonserver {
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
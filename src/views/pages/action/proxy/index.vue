<template>
	<div id="proxy">
		<div class="bground">
			<div class="title">服务代理</div>
			<div class="line"></div>
			<div class="content">
				<div>服务代理是指通过访问本地域名即可有权限访问非同域下的服务器。服务代理常用于开发环境中，正常的开发环境下一般基于前后端分离，前端和后端往往不在同一个服务器下进行开发，此时使用服务代理可以将前端请求模拟成同一服务器下实现，在正式部署时就无需再修改请求接口的域名地址。</div>
				<div class="code-title">在启动json-server的基础上，config/index.js文件中服务代理配置项proxyTable配置如下：</div>
				<div class="md">
					<pre><code>dev: {
		...
		proxyTable: {
			'/api': {
				target: 'http://127.17.5.117:3000',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				},
				onProxyReq(proxyReq, req, res) {
					proxyReq.setHeader('Referer', 'http://127.17.5.117:3000');
					proxyReq.setHeader('Origin', 'http://127.17.5.117:3000');
				},
				onProxyRes(proxyRes, req, res) {
					proxyRes.headers['Access-Control-Request-Origin'] = '*';
					proxyRes.headers['Access-Control-Request-Headers'] = '*';
				}
			}
		},
		...
	},</code></pre>
				</div>
				<div class="code-title">有了服务代理，访问本地域名http://127.0.0.1/api/即可访问到非同域的http://127.17.5.117:3000服务：</div>
				<div class="md">
					<pre><code>let path = "http://127.0.0.1/api/mockGetJson";
	this.$http.get(path).then(function(resp) {
		console.log(resp.data);
	}).catch(error => {
		console.log(error);
	});</code></pre>
				</div>
				<div class="code-title">其中this.$http定义为：</div>
				<div class="md">
					<pre><code>Vue.prototype.$http = axios;</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'proxy',
		data() {
			return {}
		},
		methods: {},
		mounted() {
			let path = "http://127.0.0.1/api/mockGetJson";
			this.$http.get(path).then(function(resp) {
				console.log(resp.data);
			}).catch(error => {
				console.log(error);
			});
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#proxy {
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
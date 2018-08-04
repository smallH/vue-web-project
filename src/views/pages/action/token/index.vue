<template>
	<div id="tokencheck">
		<div class="bground">
			<div class="title">token验证</div>
			<div class="line"></div>
			<div class="content">
				<div>token验证，首次登录时从服务端中获取，主要应用于检测用户打开某页面时是否已经登录或是否有权限请求服务，当未登录或无权限时，则返回登录界面或提示相应语句。获取token值后一般存储于本地缓存中，有一定的时效性，每次访问服务端时，会附带在请求链接的Headers中一并传输。本框架token处理相关代码封装在src/assets/js/middleware.js文件中。</div>
				<div class="code-title">核心代码：</div>
				<div class="md">
					<pre><code>// 添加一个请求拦截器
	axios.interceptors.request.use(
		function(config) {
			// 判断localStorage中是否存在api_token
			let apiToken = '';
			try {
				let token = store.state.app.apiToken; //检测app模块状态栏是否有token
				if(token) {
					apiToken = token;
				} else if(getLocalStorage('api_token')) {
					apiToken = getLocalStorage('api_token'); // 从本地缓存中获取token，若无则为空
					store.commit('API_TOKEN', apiToken); //发送推送，将此token添加到状态值中
				}
			} catch(e) {}
			if(apiToken) {
				config.headers['API-TOKEN'] = `${apiToken}`; //  存在将api_token写入 request header
			}
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);</code></pre>
				</div>

				<div class="md">
					<pre><code>/**
 * router 路由
 * store 状态管理
 * */
export const SetRouterTransition = function(router, store) {
	/* 页面跳转前 */
	router.beforeEach((to, from, next) => {
		if(to.meta.needToken) {
			if(store.state.app.apiToken || getLocalStorage('api_token')) {
				next();
			} else {
				// 若无token值直接返回登录页
				next({
					path: '/',
					query: {
						redirect: to.fullPath
					}
				})
			}
		} else {
			next();
		}
	});

	/* 页面跳转后 */
	router.afterEach((transition) => {
		let title = transition.meta.pageTitle;
	});
}</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tokencheck',
		data() {
			return {}
		},
		methods: {},
		mounted() {}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	#tokencheck {
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
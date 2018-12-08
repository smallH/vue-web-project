<template>
	<div id="tokencheck">
		<div class="bground">
			<div class="title">axios配置与token验证</div>
			<div class="line"></div>
			<div class="content">
				<div>token验证，是指应用于检测用户打开某页面时是否已经登录或是否有权限打开的验证服务。当token验证失败时，返回登录界面或提示相应语句。获取token值后一般存储在本地缓存中，有一定的时效性，每次向服务端请求数据时，会配置在请求链接的Headers中，通过请求拦截添加，相关代码封装在root/src/assets/js/middleware.js。初始token可在登录时从服务端获取，通过store.commit('API_TOKEN', apiToken)存储至vuex的app.apiToken状态中</div>
				<div class="code-title">axios配置：</div>
				<div class="md">
					<pre v-highlightjs><code class="javascript">// middleware.js
export const SetAxiosConfig = function(router, store) {
	Vue.prototype.$http = axios;
	let _prefix = '';

	if(process.env.NODE_ENV == 'production') {
		_prefix = `${process.env.HOST}/api`
	} else {
		_prefix = '/api'
	}

	axios.defaults.baseURL = _prefix;

	// 请求拦截，在请求头部加入token
	axios.interceptors.request.use(
		function(config) {
			let apiToken = '';
			try {
				// .app.apiToken状态值配置于vuex/modules/app
				let token = store.state.app.apiToken; 
				if(token) {
					apiToken = token;
				} else if(getLocalStorage('api_token')) {
					apiToken = getLocalStorage('api_token');
					store.commit('API_TOKEN', apiToken);
				}
			} catch(e) {
				throw new Error(e.toString());
			}
			if(apiToken) {
				//  存在将api_token写入请求头部"API-TOKEN"中，该值可根据前后端协商制定
				config.headers['API-TOKEN'] = `${apiToken}`; 
			}
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	// 接收请求拦截
	axios.interceptors.response.use(function(response) {
		return response;
	}, function(error) {
		if(error.response) {
			switch(error.response.status) {
				case 404:
					break;
				default:
					return Promise.reject(error.response.data)
					break;
			}
		}
	});
}

// main.js
import {SetAxiosConfig} from '@/assets/js/middleware';
import router from './router';
import store from './vuex/store';

SetAxiosConfig(router, store);</code></pre>
				</div>

				<div class="md">
					<pre v-highlightjs><code class="javascript">// 路由访问拦截，验证token
export const SetRouterTransition = function(router, store) {
	// 页面跳转前 
	router.beforeEach((to, from, next) => {
		// meta.needToken为路由中配置的项，决定该页面是否需要验证
		if(to.meta.needToken) {
			if(store.state.app.apiToken || getLocalStorage('api_token')) {
				next();
			} else {
				// 若无token值直接返回首页
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

	// 页面跳转后
	router.afterEach((transition) => {
		let title = transition.name;
		document.title = title;
	});
}
					
// main.js
import {SetRouterTransition} from '@/assets/js/middleware';
import router from './router';
import store from './vuex/store';

SetRouterTransition(router, store);</code></pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tokencheck',
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
		margin-top: 10px;
		font-size: 16px;
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
import Vue from 'vue';
import axios from 'axios'
import moment from 'moment';
import * as filters from '@/filters';
import { getLocalStorage } from '@/assets/js/utils';

// 设置moment
export const SetMomentConfig = function() {
	moment.locale('zh-cn');
}

// 设置过滤
export const SetFilter = function() {
	Object.keys(filters).forEach(key => {
		Vue.filter(key, filters[key]);
	});
}

// 设置Axios配置
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

// 路由访问拦截，验证token
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
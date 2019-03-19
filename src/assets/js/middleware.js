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

// Axios配置，网络请求时验证token
export const SetAxiosConfig = function(router, store) {
	Vue.prototype.$axios = axios;
	let _prefix = '';

	if(process.env.NODE_ENV == 'production') {
		_prefix = `${process.env.HOST}/api`
	} else {
		_prefix = '/api'
	}

	axios.defaults.baseURL = _prefix;

	// 请求拦截，在头部加入token
	axios.interceptors.request.use(
		function(config) {
			let headertoken = '';
			let token = store.state.app.token;
			if(token) {
				headertoken = token;
			} else if(getLocalStorage('token')) {
				headertoken = getLocalStorage('token');
				store.commit('TOKEN', headertoken);
			}
			if(headertoken) {
				// 存在将token写入请求头部"TOKEN"
				config.headers['TOKEN'] = `${headertoken}`;
			}
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	// 请求结果
	axios.interceptors.response.use(function(response) {
		return response;
	}, function(error) {
		if(error.response) {
			switch(error.response.state) {
				case 411:
					// 如411错误为没有token值
					// 返回处理状态和信息的Promise对象
					break;
				case 412:
					// 如412错误为入参不正确
					// 返回处理状态和信息的Promise对象
					break;
				default:
					return Promise.reject(error.response.data)
					break;
			}
		}
	});
}

// Router跳转页面时，验证token
export const SetRouterTransition = function(router, store) {
	/* router before */
	router.beforeEach((to, from, next) => {
		// check this router need auth
		debugger;
		if(to.meta.requireAuth) {
			if(store.state.app.token || getLocalStorage('api_token')) {
				next();
			} else {
				alert('没有找到模拟TOKEN值')
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

	/* router after */
	router.afterEach((transition) => {
		let title = transition.name;
		document.title = title;
	});
}
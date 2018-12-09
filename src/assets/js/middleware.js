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
			let token = '';
			try {
				let token = store.state.app.token;
				if(token) {
					token = token;
				} else if(getLocalStorage('token')) {
					token = getLocalStorage('token');
					store.commit('TOKEN', token);
				} else {
					throw new Error("没有token值");
				}
			} catch(e) {
				return Promise.reject(error);
			}
			if(token) {
				// 存在将token写入请求头部"TOKEN"
				config.headers['TOKEN'] = `${token}`;
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
				case 411:
					// 返回错误码411信息
					break;
				case 412:
					// 返回错误码412信息
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
	/* router before */
	router.beforeEach((to, from, next) => {
		// check this router need auth
		if(to.meta.requireAuth) {
			if(store.state.app.token || getLocalStorage('api_token')) {
				next();
			} else {
				next({path: '/', query: {redirect: to.fullPath}})
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
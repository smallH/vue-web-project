//中间间，用于对第三方类库按业务需求进行封装或配置
import axios from 'axios'
import moment from 'moment';
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '@/assets/js/utils';

/**
 * 设置moment库
 * */
export const SetMomentConfig = function() {
	moment.locale('zh-cn');
}

/**
 * router 路由
 * store 状态管理
 * */
export const SetAxiosConfig = function(router, store) {
	let _prefix = '';

	if(process.env.NODE_ENV == 'production') {
		_prefix = `${process.env.HOST}/api`
	} else {
		_prefix = '/api'
	}

	axios.defaults.baseURL = _prefix;

	// 添加一个请求拦截器
	axios.interceptors.request.use(function(config) {
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
		});

	//回复拦截器
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

/**
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
}
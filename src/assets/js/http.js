import vue from 'vue';
import axios from 'axios';

/**
 * get请求  查询
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const _get = ({
	url,
	query
}, commit) => {
	if(commit) commit('START_LOADING');
	return axios({
		method: 'get',
		url,
		params: { ...query
		} // get 请求时带的参数
	}).then((res) => {
		if(commit) commit('FINISH_LOADING');
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		if(commit) commit('FINISH_LOADING');
		// 临时处理网关异常
		if(err && err.exception && err.exception.indexOf('ZuulException') !== -1) {
			alert('服务器正忙，请稍后再试');
		}
		return Promise.reject(err.message || err.data);
	});
};

/**
 * post请求  查询
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const _post = ({
	url,
	query
}, commit) => {
	if(commit) commit('START_LOADING');

	return axios({
		method: 'post',
		url,
		data: { ...query
		} // post 请求时带的参数
	}).then((res) => {
		if(commit) commit('FINISH_LOADING');
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		if(commit) commit('FINISH_LOADING');
		// 临时处理网关异常
		if(err && err.exception && err.exception.indexOf('ZuulException') !== -1) {
			alert('服务器正忙，请稍后再试');
		}
		return Promise.reject(err.message || err.data);
	});
};

/**
 * delete请求  查询
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const _delete = ({
	url,
	query
}, commit) => {
	if(commit) commit('START_LOADING');

	return axios({
		method: 'delete',
		url,
		data: { ...query
		} // delete 请求时带的参数
	}).then((res) => {
		if(commit) commit('FINISH_LOADING');
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		if(commit) commit('FINISH_LOADING');
		// 临时处理网关异常
		if(err && err.exception && err.exception.indexOf('ZuulException') !== -1) {
			alert('服务器正忙，请稍后再试');
		}
		return Promise.reject(err.message || err.data);
	});
};

/**
 * put请求  增加，
 * 当用于更新操作时，需传递包含sql记录的全部字段的对象，否则缺少的属性该字段将在数据库置空。
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const _put = ({
	url,
	query
}, commit) => {
	if(commit) commit('START_LOADING');

	return axios({
		method: 'put',
		url,
		data: { ...query
		} // put 请求时带的参数
	}).then((res) => {
		if(commit) commit('FINISH_LOADING');
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		if(commit) commit('FINISH_LOADING');
		// 临时处理网关异常
		if(err && err.exception && err.exception.indexOf('ZuulException') !== -1) {
			alert('服务器正忙，请稍后再试');
		}
		return Promise.reject(err.message || err.data);
	});
};

/**
 * patch请求  更新
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
export const _patch = ({
	url,
	query
}, commit) => {
	if(commit) commit('START_LOADING');

	return axios({
		method: 'patch',
		url,
		data: { ...query
		} // put 请求时带的参数
	}).then((res) => {
		if(commit) commit('FINISH_LOADING');
		if(res.status >= 200 && res.status < 300) {
			return res.data
		}
		return Promise.reject(res);
	}, (err) => {
		if(commit) commit('FINISH_LOADING');
		// 临时处理网关异常
		if(err && err.exception && err.exception.indexOf('ZuulException') !== -1) {
			alert('服务器正忙，请稍后再试');
		}
		return Promise.reject(err.message || err.data);
	});
};
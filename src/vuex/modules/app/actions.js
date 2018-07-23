import { _get, _post, _delete, _put } from "@/assets/js/http";

let _prefix = ``; // 请求前缀

//通过vuex请求后端模拟的IMockOrder接口数据 ， 参数是(content, value)，即上下文和值对象
export const getIMockOrder = ({
	commit
}, query) => {
	const url = `${_prefix}/imock_order`;
	return _get({
			url,
			query
		}, commit)
		.then(json => {
			return Promise.resolve(json);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

//新增
export const request_post = ({
	commit
}, body) => {
	const url = `${_prefix}/interface`;
	return _post({
			url,
			body
		}, commit)
		.then(json => {
			return Promise.resolve(json.data);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

//删除
export const request_delect = ({
	commit
}, query) => {
	let url = `${_prefix}/interface/${query.id}`;

	return _delete({
			url
		}, commit)
		.then(json => {
			return Promise.resolve(json.data);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

//更新
export const request_put = ({
	commit
}, body) => {
	const url = `${_prefix}/interface/${body.id}`;
	return _put({
			url,
			body
		}, commit)
		.then((json) => {
			return Promise.resolve(json);
		})
		.catch((error) => {
			return Promise.reject(error);
		})
};

//查询
export const request_get = ({
	commit
}, query) => {
	const url = `${_prefix}/interface`;
	return _get({
			url,
			query
		}, commit)
		.then(json => {
			return Promise.resolve(json);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};
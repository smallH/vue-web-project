import { _get, _post, _delete, _put } from "@/assets/js/http";

let _prefix = ``; // 前缀

//异步请求json-server模拟的json数据包
export const getJson = ({
	commit
}, query) => {
	const url = `${_prefix}/mockGetJson`;
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
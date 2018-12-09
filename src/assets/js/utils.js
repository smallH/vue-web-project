// 存储localStorage
export const setLocalStorage = (name, content) => {
	if(!name) return;
	if(typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
};

// 获取localStorage
export const getLocalStorage = name => {
	if(!name) return;
	try {
		let value = window.localStorage.getItem(name);
		if(value) {
			return value;
		} else {
			return '';
		}
	} catch(e) {
		return '';
	}
};

// 删除localStorage
export const removeLocalStorage = name => {
	if(!name) return;
	window.localStorage.removeItem(name);
};

// 获取字符串长度
export const strlen = (str) => {
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		//单字节加1
		if((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
			len++;
		} else {
			len += 2;
		}
	}
	return len;
};
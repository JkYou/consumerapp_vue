
// 存储localStorage时设置前缀
const storePrefix = 'ST_';

// 存储localStorage
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(storePrefix + name, content);
}
// 获取localStorage
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(storePrefix + name);
}

// 删除localStorage
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(storePrefix + name);
}

export const debounce = (fn, delay, timeout) => {
  console.log(timeout)
	var timer = null;
	var last = new Date().getTime();
	delay = delay || 300;
	timeout = timeout || 300;
	return () => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, delay);
		if (new Date().getTime() > last + timeout) {
			fn.apply(this, [].slice.call(Array, arguments));
			last = new Date().getTime();
			clearTimeout(timer);
		}
	}
}

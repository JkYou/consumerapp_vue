//页面类型
export const INDEX_PAGE = 'INDEX';
export const CAR_PAGE = 'CAR';
export const USER_PAGE = 'USER';


// 图片根路径
export const staticPath = 'http://statics.zhuishushenqi.com';

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
export const  getTaoCode=(url,text) => {
    if(!url || !text){return;}
    let params = new URLSearchParams();
        params.append("url", url);
        params.append("text", text);
    this.axios.post('/getTaoCode',params).then(res => JSON.parse(res.data).tbk_tpwd_create_response.data.model ).catch(e => {
       console.info(e);
    })
}

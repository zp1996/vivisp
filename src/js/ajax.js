function obj2str (obj) {
	const keys = Object.keys(obj),
		len = keys.length;
	var str = "";
	for (let i = 0; i < len; i++) {
		str += keys[i] + '=' + obj[keys[i]] + '&';
	}
	return str.substring(0, str.length - 1);
}
function handler (resolve, reject) {
	if (this.readyState !== 4) {
		return void 0;
	}
	if (this.status >= 200 && this.status < 300 || this.status === 304) {
		resolve(this.response);
	} else {
		reject();
	}
}
const Ajax = {
	post: (url, data) => {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("post", url);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(obj2str(data));
			xhr.onreadystatechange = function () {
				handler.call(this, resolve, reject);
			}
		});
	},
};
export default Ajax;
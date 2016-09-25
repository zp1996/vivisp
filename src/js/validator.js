import pattern from "./pattern";
import $ from "./lsgo";
import Ajax from "./ajax";

const clicks = ["checkbox", "radio", "select"];

function Validator (obj) {
	return new Validator.prototype.init(obj);
}	

const p = Validator.prototype;

Validator.getValue = function (ele, type) {
	return type === "checkbox" ? Number(ele.get(0).checked) : ele.val();
};
p.init = function (obj) {
	this.data = {};
	this.flag = {};
	this.init.call(this, obj);
};
p.init.prototype.init = function (obj) {
	var cache = {};
	for (let key in obj) {
		let ele = $(obj[key]),	
			type = ele.attr("type");
		cache[key] = Validator.getValue(ele, type);
		Object.defineProperty(this.data, key, {
			get: function () {
				return cache[key];
			},
			set: function (val) {
				cache[key] = val;
			}
		});
		if (clicks.indexOf(type) === -1) {
			this.flag[key] = false;
			ele.get(0).onchange = () => {
				let val = Validator.getValue(ele, type);
				if (pattern[key](val)) {
					this.flag[key] = true;
					this.data[key] = val;
				} else {
					this.flag[key] = false;
					console.log("error");
				}
			};
		} else {
			ele.get(0).onclick = () => {
				this.data[key] = Validator.getValue(ele, type);
				console.log(cache);
			};
		}
	}
};
// 利用ajax提交数据
p.submit = function (url) {
	for (let k in this.flag) {
		if (!flag) {
			return void 0;
		}
	}
	Ajax.post(url, this.data);
};

export default Validator;
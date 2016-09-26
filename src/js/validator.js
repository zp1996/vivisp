import pattern from "./pattern";
import $ from "./lsgo";
import Ajax from "./ajax";

const clicks = ["checkbox", "radio", "select"],
	cache = {};

function Validator (obj) {
	if (!(this instanceof Validator)) {
		return new Validator(obj);
	}
	this.data = {};
	this.flag = {};
	this.eles = {};
	this.init.call(this, obj);
}	

Validator.getValue = function (ele, type) {
	return type === "checkbox" ? Number(ele.get(0).checked) : ele.val();
};
const p = Validator.prototype;
p.init = function (obj) {
	for (let key in obj) {
		let ele = $(obj[key].ele),	
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
		this.eles[key] = ele.get(0);
		if (clicks.indexOf(type) === -1) {
			this.flag[key] = false;
			ele.get(0).onchange = function () {
				var errorHandle = null;
				return () => {
					let val = Validator.getValue(ele, type);
					if (pattern[key](val)) {
						this.flag[key] = true;
						this.data[key] = val;
						errorHandle && errorHandle.normal();
					} else {
						this.flag[key] = false;
						errorHandle = errorHandle || hasError(ele, obj[key].text);
						errorHandle.throwError();
					}
				};
			}.bind(this)();
		} else {
			ele.get(0).onclick = () => {
				this.data[key] = Validator.getValue(ele, type);
			};
		}
	}
};
// 利用ajax提交数据
p.submit = function (url) {
	for (let k in this.flag) {
		if (!this.flag[k]) {
			this.eles[k].onchange();
			return void 0;
		}
	}
	return Ajax.post(url, cache);
};
function hasError (ele, text) {
	var p = ele.parent().find(".attention");
	return {
		throwError: () => {
			ele.addClass("error");
			p.text(text);
		},
		normal: () => {
			p.text("");
			ele.removeClass("error");
		}
	}
}
export default Validator;
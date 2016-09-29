import Validator from "./validator";
import $ from "./lsgo";

const validate = Validator({
	email: {
		ele: "#email",
		text: "请正确输入邮箱格式"
	},
	password: {
		ele: "#password",
		text: "请正确输入密码格式"
	},
	auto: {
		ele: "#auto-login"
	}
});
const mask = {
	show: () => {
		$("#mask").css({ display: "block" });		
	},
	hide: () => {
		$("#mask").css({ display: "none" });		
	}
};
var flag = false;
$("#sign-in").get(0).onclick = function () {
	if (flag) return void 0;
	var submit = validate.submit("./login");
	if (submit) {
		mask.show();
		(() => {
			flag = true;
			submit.then((res) => {
									flag = false;
									res = JSON.parse(res);
									if (res.flag) {
										return window.location.href = "./";
									}
									mask.hide();
									validate.eles[res.ele].throwError(res.msg);
								}, () => {
									flag = false;
									console.log(1.12);
								});
		})();
	}
};

import Validator from "./validator";
import $ from "./lsgo";
import layer from "./layer";

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
var flag = false;
$("#sign-in").get(0).onclick = function () {
	if (flag) return void 0;
	var submit = validate.submit("./login")
	submit && (() => {
		flag = true;
		submit.then((res) => {
								flag = false;
								res = JSON.parse(res);
								if (res.flag) {
									window.location.href = "./";
								}
								console.log(res.msg);
							}, () => {
								flag = false;
								console.log(1.12);
							});
	})();
};

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
$("#sign-in").get(0).onclick = function () {
	validate.submit("./login")
					.then((res) => {
						res = JSON.parse(res);
						console.log(res);
					}, () => {
						console.log(1.12);
					});
};

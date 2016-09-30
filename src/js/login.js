import Validator from "./validator";
import $ from "./lsgo";
import submit from "./userutil";

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
submit(validate, "userlogin");


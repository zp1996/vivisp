import Validator from "./validator";
import $ from "./lsgo";
import submit from "./userutil";

const validate = Validator({
	username: {
		ele: "#username",
		text: "请正确输入用户名"
	},
	email: {
		ele: "#email",
		text: "请正确输入邮箱格式"
	},
	password: {
		ele: "#password",
		text: "请正确输入密码格式",
		resure: true
	},
	resure: {
		ele: "#repassword",
		text: "两次输入密码不一致"
	}
});
submit(validate, "usersignup");

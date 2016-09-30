import $ from "./lsgo";
const patterns = {
	email: /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i,
	password: /^\S{6,16}$/,
	username: /^(?:[\u4e00-\u9fa5]|[\w]){2,18}$/
};
function burnTest (key) {
	return (text) => {
		return patterns[key].test(text);
	};
}

export default {
	email: burnTest("email"),
	password: burnTest("password"),
	username: burnTest("username"),
	resure:	(text, ele) => {
		ele = $(`#${ele.substring(2)}`);
		return ele.val() === text;
	}
};
import $ from "./lsgo";
import patterns from "./regexp";
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
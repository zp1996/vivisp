const patterns = {
	email: /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i,
	password: /^\S{6,16}$/
};
function burnTest (key) {
	return (text) => {
		return patterns[key].test(text);
	};
}
export default {
	email: burnTest("email"),
	password: burnTest("password")
};
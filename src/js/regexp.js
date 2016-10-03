const patterns = {
	email: /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i,
	password: /^\S{6,16}$/,
	username: /^(?:[\u4e00-\u9fa5]|[\w]){2,18}$/,
	repeat: /index:\s{1}([a-z]+)\_[0-9]\sdup/
};
module.exports = patterns;
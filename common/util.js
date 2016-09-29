const jade = require("jade"),
	crypto = require("crypto");

// 页面渲染
exports.render = (path, data, status) => {
	status = status || 200;
	data.pretty = true;
	return (req, res) => {
		data.login = req.session && req.session.uid;	
		const html = jade.renderFile(path, data);
		res.status(status).end(html);
	};
};
// 密码加密
exports.encrypt = (text) => {
	return crypto.createHash("md5").update(String(text)).digest("hex");
};

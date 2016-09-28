const jade = require("jade"),
	crypto = require("crypto"),
	md5 = crypto.createHash("md5");

exports.render = (path, data, status) => {
	status = status || 200;
	data.pretty = true;
	return (req, res) => {
		data.login = req.session && req.session.uid;	
		const html = jade.renderFile(path, data);
		res.status(status).end(html);
	};
};
exports.md5 = (text) => {
	text = String(text);
	return md5.update(text).digest("hex");
};
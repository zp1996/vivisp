const jade = require("jade");

exports.render = (path, data, status) => {
	status = status || 200;
	data.pretty = true;
	return (req, res) => {	
		const html = jade.renderFile(path, data);
		res.status(status).end(html);
	};
};
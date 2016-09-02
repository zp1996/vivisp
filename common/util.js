const jade = require("jade");

exports.render = (path, data) => {
	return (req, res) => {
		const html = jade.renderFile(path, data);
		res.end(html);
	};
};
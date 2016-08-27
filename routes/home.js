const jade = require("jade");
module.exports = function (app) {
	app.get('/', (req, res) => {
		const html = jade.renderFile("./views/home/index.jade", {
			title: "lsgo-cli",
			welcome: "Hello World",
			pretty: true
		});
		res.end(html);
	});
};
const util = require("../common/util"),
	fs = require("fs");

exports.show = util.render("./views/home/index.jade", {
	title: "lsgo-cli anthor is zp",
	welcome: "Hello World",
	pretty: true
});

exports.error = (req, res) => {
	fs.readFile("./views/404.html", (error, data) => {
		if (error) {
			res.status(500).end("Server error");
		} else {
		 	res.status(200).end(data);
		}
	});
};
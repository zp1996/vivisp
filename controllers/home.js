const util = require("../common/util"),
	fs = require("fs");

exports.show = util.render("./views/home/index.jade", {
	title: "",
	welcome: "Hello World"
});

exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
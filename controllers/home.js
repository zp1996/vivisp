const util = require("../common/util");

exports.show = util.render("./views/home/index.jade", {
	title: "",
	js: ["home.bundle.js"]
});

exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
const util = require("../common/util"),
	fs = require("fs");

exports.show = util.render("./views/home/index.jade", {
	title: "",
	welcome: "Hello World",
	login: undefined,
	js: ["home.bundle.js"]
});

exports.login = util.render("./views/home/login.jade", {
	title: "登录-",
	js: ["login.bundle.js"]
});


exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
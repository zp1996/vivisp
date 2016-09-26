const util = require("../common/util"),
	fs = require("fs"),
	student = require("../models/student"),
	week = 7 * 24 * 3600 * 1000;

function setCookie (res, obj) {
	res.cookie('user', {
		uid: obj['_id'],
		token: `${obj['password']}`
	}, {
		expires: obj["auto"] ? new Date(Date.now() + week) : 0
	});
}

exports.show = util.render("./views/home/index.jade", {
	title: "",
	welcome: "Hello World",
	login: undefined,
	js: ["home.bundle.js"]
});

exports.login = function (req, res) {
	if (req.session && req.session.user) {
		return res.redirect("./");
	} 
	util.render("./views/home/login.jade", {
		title: "登录-",
		js: ["login.bundle.js"]
	})(req, res);
};

exports.signin = function (req, res) {
	student.findByEmail(req.body.email);
	res.json({msg: "successed"});
};

exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
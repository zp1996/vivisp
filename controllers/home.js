const util = require("../common/util"),
	fs = require("fs"),
	student = require("../models/student"),
	week = 7 * 24 * 3600 * 1000;

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
	const password = req.body.password,
		email = req.body.email;
	student.findByEmail(email, (err, data) => {
		if (err) {
			return res.json({msg: "服务器繁忙,请您稍后再试", flag: 0});
		}
		if (!data) {
			return res.json({msg: "该用户不存在,抓紧去注册吧", flag: 0});
		}
		if (data.password === util.md5(password)) {
			return res.json({msg: "登录成功了", flag: 1});
		}
	});
};

exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
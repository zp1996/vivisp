const util = require("../common/util"),
	fs = require("fs"),
	student = require("../models/student"),
	week = 7 * 24 * 3600 * 1000;

exports.show = util.render("./views/home/index.jade", {
	title: "",
	js: ["home.bundle.js"]
});

exports.login = function (req, res) {
	if (req.session && req.session.user) {
		return res.redirect("./");
	} 
	util.render("./views/home/login.jade", {
		title: "登录-",
		js: ["login.bundle.js"],
		need: true
	})(req, res);
};

const handles = {
	valnull: (req, res) => {
		return res.json({msg: "该用户不存在,抓紧去注册吧", flag: 0, ele: "email"});
	},
	valfalse: (req, res) => {
		return res.json({msg: "密码错误", flag: 0, ele: "password"});
	},
	valtrue: (req, res, id) => {
		req.session.uid = id;
		req.session.save((err) => {
			if (!err) {
				return res.json({msg: "登录成功了", flag: 1});
			}								
		});
	}
};
exports.signin = function (req, res) {
	const password = req.body.password,
		email = req.body.email;
	student.findByEmail("1179258516@qq.com", (err, data) => {
		if (err) {
			return res.json({msg: "服务器繁忙,请您稍后再试", flag: 0});
		}
		var id = data && data["_id"];
		data = `val${data ? data.password === util.encrypt(password) : 
									data}`;
		return handles[data](req, res, id);
	});
};

exports.error = util.render("./views/404.jade", {
	title: "404-"
}, 404);
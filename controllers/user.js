const util = require("../common/util"),
	student = require("../models/student"),
	week = 7 * 24 * 3600 * 1000;

exports.login = function (req, res) {
	util.render("./views/user/login.jade", {
		title: "登录-",
		js: ["login.bundle.js"],
		need: true
	})(req, res);
};

exports.signup = function (req, res) {
	util.render("./views/user/signup.jade", {
		title: "注册-",
		js: ["signup.bundle.js"],
		need: true
	})(req, res);
};

const handles = {
	valnull: (req, res) => {
		return res.json({msg: "该邮箱未注册,抓紧去注册吧", flag: 0, ele: "email"});
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
	student.findByEmail(email, (err, data) => {
		if (err) {
			return res.json({msg: "服务器繁忙,请您再次点击登录", flag: 0, error: 1});
		}
		var id = data && data["_id"];
		data = `val${data ? data.password === util.encrypt(password) : 
									data}`;
		return handles[data](req, res, id);
	});
};
exports.newsignup = function (req, res) {
	// const password = req.body.password,
	// 	email = req.body.email;
	// student.findByEmail(email, (err, data) => {
	// 	if (err) {
			return res.json({msg: "服务器繁忙,请您再次点击登录", flag: 0, error: 1});
	// 	}
	// 	var id = data && data["_id"];
	// 	data = `val${data ? data.password === util.encrypt(password) : 
	// 								data}`;
	// 	return handles[data](req, res, id);
	// });
};
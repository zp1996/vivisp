const util = require("../common/util"),
	student = require("../models/student"),
	patterns = require("../src/js/regexp"),
	conf = require("../conf").config,
	week = 7 * 24 * 3600 * 1000;

exports.login = function (req, res) {
	util.render("./views/user/login.jade", {
		title: "登录-",
		js: ["login.bundle.js"],
		need: true,
		val: "登录"
	})(req, res);
};

exports.signup = function (req, res) {
	util.render("./views/user/signup.jade", {
		title: "注册-",
		js: ["signup.bundle.js"],
		need: true,
		val: "注册"
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
// 验证管道
function ValidatorPipe (parr, varr) {
	var res = "";
	parr.every((val, i) => {
		res = patterns[val].test(varr[i]) ? res : val;
		return res;
	});
	return res;
}
const attention = {
	username: "用户名",
	password: "密码",
	email: "邮箱"
};
exports.newsignup = function (req, res) {
	const username = req.body.username,
		password = req.body.password,
		email = req.body.email,
		data = {
			username: username,
			email: email,
			password: password
		},
		flag = ValidatorPipe(["username", "password", "email"],
												 [username, password, email]);
	if (flag) {
		return res.json({msg: `${attention[flag]}输入有错，请您按照提示方式填写`, ele: flag, flag: 0});
	}
	new student({
		username: username,
		password: util.encrypt(password),
		email: email
	}).save((err) => {
		if (!err) {
			return exports.signin(req, res);	
		}
		const ele = err.errmsg.match(patterns.repeat)[1];
		return res.json({
			msg: `${attention[ele]}已被占用，请您换一个${attention[ele]}`,
			ele: ele,
			flag: 0
		});
	});
};
exports.exit = function (req, res) {
	delete req.session['uid'];
	res.redirect("./");
};
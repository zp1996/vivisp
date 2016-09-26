const Student = require("../models/student");
module.exports = (req, res, next) => {
	if (!req.cookies.user) {
		return next();
	}
	const uid = req.cookies.user.uid,
		data = student.findById(uid);
	console.log(data);
	next();
};
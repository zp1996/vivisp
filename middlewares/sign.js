module.exports = (req, res, next) => {
	if (req.session.uid) {
		return res.redirect("./");
	}	
	next();
};
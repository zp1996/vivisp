const express = require("express"),
	home = require("./controllers/home"),
	router = express.Router();
// 首页
router.get('/', home.show);
// 404 not Found
router.use(home.error);

module.exports = router;
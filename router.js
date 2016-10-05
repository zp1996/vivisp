const express = require("express"),
	home = require("./controllers/home"),
	user = require("./controllers/user"),
	sign = require("./common/sign"),
	router = express.Router();
// 首页
router.get('/', home.show);
// 用户相关
router.use("/user*", sign);
router.get("/userlogin", user.login);
router.post("/userlogin", user.signin);
router.get("/usersignup", user.signup);
router.post("/usersignup", user.newsignup);
router.get("/out", user.exit);
// 404 not Found
router.use(home.error);

module.exports = router;
const path = require("path"),
	express = require("express"),
	router = require("./router"),
	bodyparser = require("body-parser"),
	mongoose = require("mongoose"),
	session = require("express-session"),
	RedisStore = require("connect-redis")(session),
	app = new express(),
	options = require("./conf").redis;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/vivisp");

app.set("port", process.env.PORT || 2015);

app.use(express.static(path.join(__dirname, "build/")));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(session({
	store: new RedisStore(options),
	secret: "zp1996"
}));

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
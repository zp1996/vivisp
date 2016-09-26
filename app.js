const path = require("path"),
	express = require("express"),
	router = require("./router"),
	bodyparser = require("body-parser"),
	cookieparser = require("cookie-parser"),
	mongoose = require("mongoose"),
	app = new express();

mongoose.connect("mongodb://localhost/vivisp");

app.set("port", process.env.PORT || 2015);

app.use(express.static(path.join(__dirname, "build/")));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cookieparser());

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
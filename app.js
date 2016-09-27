const path = require("path"),
	express = require("express"),
	router = require("./router"),
	bodyparser = require("body-parser"),
	mongoose = require("mongoose"),
	session = require("express-session"),
	app = new express();

mongoose.connect("mongodb://localhost/vivisp");

app.set("port", process.env.PORT || 2015);

app.use(express.static(path.join(__dirname, "build/")));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(session({
	secret: "keyboard"
}));

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
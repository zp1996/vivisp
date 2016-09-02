const path = require("path"),
	express = require("express"),
	router = require("./router"),
	app = new express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "build")));

app.use(router);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
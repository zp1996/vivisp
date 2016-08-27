const path = require("path"),
	express = require("express"),
	homeRoutes = require("./routes/home"),
	app = new express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "build")));

homeRoutes(app);

app.listen(app.get("port"), () => {
	console.log(`listen on port ${app.get("port")}`);
});
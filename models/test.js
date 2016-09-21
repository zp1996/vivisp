const mongoose = require("mongoose"),
	StudentSchema = require("../schemas/student"),
	db = mongoose.connection,
	Student = mongoose.model("Student", StudentSchema);

mongoose.connect("mongodb://localhost/vivisp");

db.on("error", () => {
	console.log("error");
});

db.once("open", () => {
	console.log("1");
});

var entity = new Student({
	username: "zp1996",
	password: "961227",
	email: "1179258516@qq.com",
});

Student.fetch((err, students) => {
	if (err) {
		console.log(err);
		return void 0;
	}
	console.log(students);
});
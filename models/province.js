const mongoose = require("mongoose"),
	province = require("../province.json");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/vivisp");

const ProvinceSchema = new mongoose.Schema({
	pcode: {type:String, unique: true},
	pname: {type:String, unique: true}
});

ProvinceSchema.statics = {
	fetch: function (cb) {
		return this
			.find({})
			.exec(cb);
	}
};

const Province = mongoose.model("Province", ProvinceSchema),
	keys = Object.keys(province),
	num = keys.length;

var current = 0;

keys.forEach(val => {
	new Province({
		pcode: val,
		pname: province[val]
	}).save((err) => {
		if (err) throw err;
		current++;
		if (current === num) {
			console.log("all success");
		}
	})
});


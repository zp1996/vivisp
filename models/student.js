const mongoose = require("mongoose"),
	conf = require("../conf").config;

const StudentSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: String,
	email: {type:String, unique: true},
	usex: String,
	uimage: String,
	createTime: Date,
	updateTime: Date
});

// 保存数据前更新其时间
StudentSchema.pre("save", function (next) {
	if (this.isNew) {
		const random = Math.floor(Math.random() * (+conf.images) + 1);
		this.createTime = this.updateTime = Date.now();
		this.uimage = `default${random}.jpg`;
	} else {
		this.updateTime = Date.now();
	}
	next();
});

StudentSchema.statics = {
	fetch: function (cb) {
		return this
			.find({})
			.sort("updateTime")
			.exec(cb);
	},
	findById: function (id, cb) {
		return this
			.findOne({_id: id})
			.exec(cb);
	},
	findByEmail: function (email, cb) {
		return this
			.findOne({email: email})
			.exec(cb);
	}
};
module.exports = mongoose.model("Student", StudentSchema);
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	createTime: Date,
	updateTime: Date
});

// 保存数据前更新其时间
StudentSchema.pre("save", (next) => {
	if (this.isNew) {
		this.createTime = this.updateTime = Date.now();
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
	}
};

module.exports = StudentSchema;
const week = 7 * 24 * 3600;
exports.config = {
	images: 6,
	redis: {
		host: "127.0.0.1",
		port: 6379,
		password: '',
		ttl: week
	}
};
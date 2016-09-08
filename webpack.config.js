const webpack = require("webpack");

module.exports = {
	entry: [
		"./src/js/entry.js",
	],
	output: {
		path: `${__dirname}/build/js`,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ["babel?presets[]=es2015"]
			},
			{
				test: /\.less$/,
				loaders: ["style", "css", "less"]
			}
		]
	}
};
const webpack = require("webpack"),
	path = "./src/js/";
module.exports = {
	entry: {
		home: `${path}home.js`,
		login: `${path}login.js`,
		signup: `${path}signup.js`,
		vendor: ["./src/js/lsgo.js", "./src/js/util.js"]
	},
	output: {
		path: `${__dirname}/build/js`,
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ["babel?presets[]=es2015"]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})	
	]
};
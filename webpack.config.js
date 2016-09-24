const webpack = require("webpack");

module.exports = {
	entry: {
		home: "./src/js/home.js",
		vendor: ["./src/js/lsgo.js"]
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
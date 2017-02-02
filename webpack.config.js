module.exports = {
	devtool: 'eval-source-map',
	entry: "./index.js",
	output: {
		path: __dirname+"/dist/",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.sass$/,
			loader: "json"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.scss$/,
			loader: 'style!css!sass'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}, {
			test: /\.html$/,
			loader: 'html',
			query: {
				minimize: true
			}
		}]
	},
}
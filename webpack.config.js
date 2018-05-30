module.exports = {
	entry: './src/index.web.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/public/build',
		publicPath: '/build'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']	},
			{ test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] }
		]
	},
	devServer: {
		host: process.env.IP,
		public: process.env.C9_HOSTNAME,
		contentBase: 'public',
		historyApiFallback: true
	}
};
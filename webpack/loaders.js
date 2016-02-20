module.exports=[
	{test: /\.ts(x?)$/, loader: 'ng-annotate!ts-loader'},
	{
		test  : /\.css$/,
		loader: 'style-loader!css-loader'
	},
	{
		test  : /\.scss$/,
		loader: 'style!css!sass'
	}, {
		test   : /\.html$/,
		exclude: /node_modules/,
		loader : 'html'
	}, {
		test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: 'url-loader?limit=10000&minetype=application/font-woff'
	}, {
		test  : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: 'file-loader'
	}, {
		test   : '\.jpg$',
		exclude: /node_modules/,
		loader : 'file'
	}, {
		test   : '\.png$',
		exclude: /node_modules/,
		loader : 'url'
	}
];

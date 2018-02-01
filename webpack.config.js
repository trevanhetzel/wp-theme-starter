const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		app: ['./js/app.ts', './css/style.scss']
	},
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	plugins: [
		new UglifyJSPlugin(),
		new ExtractTextPlugin('style.css')
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader'
						}, {
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								map: true,
								plugins: [require('autoprefixer')({
									browsers: [
										'Explorer >= 10',
										'last 2 versions'
									]
								})]
							}
						}, {
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								sourceComments: true,
								outputStyle: "compressed",
								precision: 8
							}
						}
					]
				})
			}
		]
	}
};

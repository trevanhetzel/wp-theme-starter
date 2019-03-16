const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: ['./js/app.js', './css/style.scss'],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [require('autoprefixer')({
								browsers: [
									'Explorer >= 10',
									'last 2 versions'
								]
							})]
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	optimization: {
		minimizer: [
			new UglifyJSPlugin(),
			new OptimizeCSSAssetsPlugin({
				cssProcessor: require('cssnano'),
				cssProcessorPluginOptions: {
					preset: ['default', {
						discardComments: { removeAll: true }
					}]
				}
			})
		]
	}
};

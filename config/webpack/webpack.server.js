const webpack = require('webpack')
const path = require('path')
const paths = require('../paths/paths.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		vendor: paths.appIndexReact,
	},
	mode: 'development',
	module: {
		rules: [
			// Bable Loader
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.scss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: './src/helpers/renderr.js' }),
	],

	devServer: {
		compress: true,
        overlay: true,
        hot:true,
		stats: {
			colors: true,
		},
		port: 3000,
	},
	output: {
		filename: 'bundle.js',
		path: paths.appBuildPath,
	},
}

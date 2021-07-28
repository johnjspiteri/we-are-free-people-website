// import { Configuration } from 'webpack';
// import { join, resolve } from 'path';
// import { AngularCompilerPlugin } from '@ngtools/webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CopyPlugin from 'copy-webpack-plugin';
// import ESLintPlugin from 'eslint-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
//
// const config: Configuration = {
// 	mode: 'production',
// 	target: 'web',
// 	devtool: 'source-map',
// 	context: join(__dirname, '../..'),
// 	entry: {
// 		main: [
// 			'./source/main.production.ts',
// 			'./source/styles/map.styl'
// 		]
// 	},
// 	module: {
// 		rules: [{
// 			test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
// 			include: [join(__dirname, '../../source')],
// 			exclude: [
// 				join(__dirname, '../../node_modules'),
// 				join(__dirname, '../../source/client/images'),
// 				join(__dirname, '../../source/client/styles'),
// 				join(__dirname, '../../source/client/industry/auto/used-car/website/explore/theme-a/theme'),
// 				join(__dirname, '../../source/client/industry/auto/used-car/website/explore/theme-b/theme'),
// 				join(__dirname, '../../source/client/industry/legal/family/website/explore/theme-a/theme'),
// 				join(__dirname, '../../source/client/industry/legal/family/website/explore/theme-b/theme'),
// 			],
// 			use: '@ngtools/webpack',
// 		}, {
// 			test: /\.styl$/,
// 			include: [
// 				join(__dirname, '../../source/styles')
// 			],
// 			exclude: [
// 				join(__dirname, '../../node_modules'),
// 				join(__dirname, '../../source/client'),
// 				join(__dirname, '../../source/images')
// 			],
// 			use: [{
// 				loader: 'style-loader',
// 			}, {
// 				loader: 'css-loader',
// 			}, {
// 				loader: 'stylus-loader',
// 				options: {
// 					sourceMap: false,
// 					webpackImporter: false,
// 					stylusOptions: {
// 						resolveURL: true,
// 						lineNumbers: false,
// 						compress: true,
// 					}
// 				}
// 			}]
// 		}]
// 	},
// 	resolve: {
// 		extensions: ['.ts', '.js', '.json', '.html', '.css', '.styl']
// 	},
// 	optimization: {
// 		splitChunks: {
// 			chunks: 'async',
// 			minSize: 20000,
// 			// minRemainingSize: 0,
// 			maxSize: 100000,
// 			minChunks: 1,
// 			maxAsyncRequests: 30,
// 			maxInitialRequests: 30,
// 			automaticNameDelimiter: '.',
// 			// enforceSizeThreshold: 50000,
// 			cacheGroups: {
// 				source: {
// 					test: /[\\/]source[\\/]/,
// 					priority: -10,
// 					reuseExistingChunk: true
// 				},
// 				core: {
// 					test: resolve(__dirname, '../../node_modules/@angular/core'),
// 					priority: -10,
// 					reuseExistingChunk: true
// 				},
// 				fortawesome: {
// 					test: resolve(__dirname, '../../node_modules/@fortawesome'),
// 					priority: -10,
// 					reuseExistingChunk: true
// 				},
// 				// vendors: {
// 				// 	test: resolve(__dirname, 'node_modules'),
// 				// 	priority: -10,
// 				// 	reuseExistingChunk: true
// 				// },
// 				styles: {
// 					test: /\.css$/,
// 					priority: -10,
// 					reuseExistingChunk: true
// 				},
// 				default: {
// 					minChunks: 2,
// 					priority: -20,
// 					reuseExistingChunk: true
// 				}
// 			}
// 		},
// 		runtimeChunk: {
// 			name: 'runtime'
// 		}
// 	},
// 	output: {
// 		path: join(__dirname, '../../production'),
// 		filename: '[name].bundle.js',
// 		chunkFilename: '[name].[id].bundle.js'
// 	},
// 	performance: {
// 		hints: 'warning',
// 	},
// 	plugins: [
// 		new CopyPlugin({
// 			patterns: [{
// 				from: 'source/images',
// 				to: 'assets/images'
// 			}, {
// 				from: 'source/application/industry/auto/used-car/website/preview/theme-a/theme/styles/abril',
// 				to: 'assets/styles/auto/theme-a/abril'
// 			}, {
// 				from: 'source/application/industry/auto/used-car/website/preview/theme-b/theme/styles/abril',
// 				to: 'assets/styles/auto/theme-b/abril'
// 			}, {
// 				from: 'source/application/industry/legal/family/website/preview/theme-a/theme/styles/abril',
// 				to: 'assets/styles/legal/theme-a/abril'
// 			}, {
// 				from: 'source/application/industry/legal/family/website/preview/theme-b/theme/styles/abril',
// 				to: 'assets/styles/legal/theme-b/abril'
// 			}],
// 			options: {
// 				concurrency: 100,
// 			},
// 		}),
// 		new AngularCompilerPlugin({
// 			tsConfigPath: join(__dirname, '../../tsconfig.json'),
// 			entryModule: join(__dirname, '../../source/application/module#RootModule'),
// 			mainPath: join(__dirname, '../../source/main.production.ts'),
// 			sourceMap: true,
// 			forkTypeChecker: true,
// 			skipCodeGeneration: false,
// 			directTemplateLoading: true
// 		}),
// 		// new ForkTsCheckerWebpackPlugin({
// 		// 	eslint: true
// 		// }),
// 		// new ESLintPlugin({
// 		// 	context: join(__dirname, '../../'),
// 		// 	extensions: ['ts'],
// 		// 	exclude: [
// 		// 		join(__dirname, '../../node_modules'),
// 		// 		join(__dirname, '../../source/client/images'),
// 		// 		join(__dirname, '../../source/client/styles'),
// 		// 		join(__dirname, '../../source/client/industry/auto/used-car/website/explore/theme-a/theme'),
// 		// 		join(__dirname, '../../source/client/industry/auto/used-car/website/explore/theme-b/theme'),
// 		// 		join(__dirname, '../../source/client/industry/legal/family/website/explore/theme-a/theme'),
// 		// 		join(__dirname, '../../source/client/industry/legal/family/website/explore/theme-b/theme'),
// 		// 	]
// 		// }),
// 		new HtmlWebpackPlugin({
// 			// favicon: '',
// 			template: join(__dirname, '../../source/index.html')
// 		}),
// 		new MiniCssExtractPlugin({
// 			filename: 'styles.css'
// 		})
// 	]
// };
//
// module.exports.default = config;

import * as webpack from 'webpack';
import { join, resolve } from 'path';
import { AngularWebpackPlugin } from '@ngtools/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import WebpackBar from 'webpackbar';

import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

interface Configuration extends webpack.Configuration {
	devServer?: {
		[index: string]: any;
	};
}

const config: Configuration = {
	mode: 'development',
	target: 'web',
	devtool: 'eval-source-map',
	context: resolve(__dirname),
	entry: {
		main: ['../../source/development.ts', '../../source/styles/map.styl'],
	},
	externals: {},
	externalsPresets: {},
	node: {},
	resolveLoader: {},
	snapshot: {},
	// stats: 'minimal',
	cache: true,
	module: {
		rules: [
			{
				test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
				include: [resolve(__dirname, '../../source')],
				exclude: [resolve(__dirname, '../../node_modules'), resolve(__dirname, '../../source/application/images'), resolve(__dirname, '../../source/application/styles')],
				use: '@ngtools/webpack',
			},
			{
				test: /\.styl$/,
				include: [resolve(__dirname, '../../source/styles')],
				exclude: [resolve(__dirname, '../../node_modules'), resolve(__dirname, '../../source/application'), resolve(__dirname, '../../source/images')],
				// use: [MiniCssExtractPlugin.loader, {
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'stylus-loader',
						options: {
							sourceMap: false,
							webpackImporter: false,
							stylusOptions: {
								resolveURL: true,
								lineNumbers: false,
								compress: true,
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			_application: resolve(__dirname, 'source/application'),
			// '@angular': resolve(__dirname, 'node_modules/@angular'),
			// '@fortawesome': resolve(__dirname, 'node_modules/@fortawesome'),
			// '@interface-agency/password-validation': resolve(__dirname, '../../../password-validation/public'),
		},
		extensions: ['.ts', '.js', '.json', '.html', '.css', '.styl'],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	optimization: {
		// splitChunks: {
		// 	chunks: 'all'
		// }
		splitChunks: {
			chunks: 'async',
			minSize: 20000,
			// minRemainingSize: 0,
			maxSize: 100000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '.',
			// enforceSizeThreshold: 50000,
			cacheGroups: {
				source: {
					test: /[\\/]source[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
				},
				core: {
					test: resolve(__dirname, '../../node_modules/@angular'),
					priority: -10,
					reuseExistingChunk: true,
				},
				fortawesome: {
					test: resolve(__dirname, '../../node_modules/@fortawesome'),
					priority: -10,
					reuseExistingChunk: true,
				},
				vendors: {
					test: resolve(__dirname, 'node_modules'),
					priority: -10,
					reuseExistingChunk: true,
				},
				styles: {
					test: /\.css$/,
					priority: -10,
					reuseExistingChunk: true,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
		runtimeChunk: {
			name: 'runtime',
		},
	},

	infrastructureLogging: {
		level: 'log',
	},
	devServer: {
		// dev: {
		// 	publicPath: '/development/',
		// },
		static: [
			{
				directory: resolve(__dirname, '../../assets'),
				// staticOptions: {},
				serveIndex: true,
				watch: true,
			},
		],
		firewall: false,
		port: 8081,
		hot: true,
		historyApiFallback: {
			disableDotRule: true,
		},
		host: '0.0.0.0',
		https: false,
		transportMode: 'ws',
		// injectClient: false,
		useLocalIp: true,
		// open: {
		// 	app: ['firefox', '-devtools'],
		// },
		// openPage: '',
		// overlay: true,
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(join(__dirname, '../../source/dll/fortawesome-manifest.json')),
			name: 'fortawesome',
		}),
		// new webpack.DllReferencePlugin({
		// 	context: __dirname,
		// 	manifest: require(join(__dirname, '../../source/dll/ngrx-manifest.json')),
		// 	name: 'ngrx',
		// }),
		// new webpack.DllReferencePlugin({
		// 	context: __dirname,
		// 	manifest: require(join(__dirname, '../../source/dll/rxjs-manifest.json')),
		// 	name: 'rxjs',
		// }),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(join(__dirname, '../../source/dll/zone-manifest.json')),
			name: 'zone',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: '../../source/images',
					to: 'assets/images',
				},
				{
					from: '../../source/dll',
					to: 'assets/dll',
				},
			],
			options: {
				concurrency: 100,
			},
		}),
		new AngularWebpackPlugin({
			tsconfig: resolve(__dirname, '../../tsconfig.json'),
			compilerOptions: {
				entryModule: join(__dirname, '../../source/application/module#RootModule'),
				mainPath: join(__dirname, '../../source/development.ts'),
				sourceMap: true,
				forkTypeChecker: true,
				skipCodeGeneration: false,
			},
			directTemplateLoading: true,
		}),
		// new ForkTsCheckerWebpackPlugin({
		// 	eslint: true
		// }),
		// new ESLintPlugin({
		// 	context: join(__dirname, '../../'),
		// 	extensions: ['ts'],
		// 	exclude: [
		// 		'node_modules',
		// 		'source/application/images',
		// 		'source/application/styles',
		// 	]
		// }),
		new HtmlWebpackPlugin({
			// favicon: '/assets/images/favicon.ico',
			filename: 'index.html',
			inject: true,
			template: join(__dirname, '../../source/development.html'),
		}),
		new WebpackBar({
			color: '#c8c8c8',
			name: 'Free People',
			basic: false,
			profile: true,
			fancy: true,
			// reporters: ['fancy'],
			// reporter: {
			//   progress ({ state }) {
			//     if (lastProgress !== state.progress && state.progress % 5 === 0) {
			//       process.stderr.write(state.progress + '%\n')
			//       lastProgress = state.progress
			//     }
			//   }
			// }
		}),
	],
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].[id].bundle.js',
		path: resolve('./development'),
		// publicPath: '/development/'
	},
};

module.exports.default = config;

import { Configuration, DllPlugin } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
	entry: {
		zone: ['zone.js/dist/zone.js', 'zone.js/dist/long-stack-trace-zone.js'],
		// angular: [
		// 	'@angular/core/__ivy_ngcc__/bundles/core.umd.js',
		// 	'@angular/common/__ivy_ngcc__/bundles/common.umd.js',
		// 	'@angular/common/__ivy_ngcc__/bundles/common-http.umd.js',
		// 	'@angular/forms/__ivy_ngcc__/bundles/forms.umd.js',
		// 	'@angular/animations/__ivy_ngcc__/bundles/animations-browser.umd.js',
		// 	'@angular/animations/__ivy_ngcc__/bundles/animations.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-a11y.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-bidi.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-collections.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-keycodes.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-observers.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-platform.umd.js',
		// 	'@angular/cdk/__ivy_ngcc__/bundles/cdk-scrolling.umd.js',
		// 	'@angular/google-maps/__ivy_ngcc__/bundles/google-maps.umd.js',
		// 	'@angular/material/__ivy_ngcc__/bundles/material-core.umd.js',
		// 	'@angular/material/__ivy_ngcc__/bundles/material-sidenav.umd.js',
		// 	'@angular/material/__ivy_ngcc__/bundles/material-slider.umd.js',
		// 	'@angular/platform-browser/__ivy_ngcc__/bundles/platform-browser.umd.js',
		// 	'@angular/platform-browser/__ivy_ngcc__/bundles/platform-browser-animations.umd.js',
		// 	'@angular/router/__ivy_ngcc__/bundles/router.umd.js',
		// ],
		rxjs: [
			// '@ngneat/until-destroy',
			'rxjs',
		],
		fortawesome: ['@fortawesome/angular-fontawesome', '@fortawesome/fontawesome-pro', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/pro-duotone-svg-icons', '@fortawesome/pro-light-svg-icons', '@fortawesome/pro-regular-svg-icons', '@fortawesome/pro-solid-svg-icons'],
		interface: [
			'@interface-agency/field-validation',
			'@interface-agency/format-phone-number-directive',
			'@interface-agency/format-title-case-pipe',
			'@interface-agency/format-zip-code-directive',
			'@interface-agency/password-validation',
			'@interface-agency/select',
			'@interface-agency/select-country',
			'@interface-agency/select-language',
			'@interface-agency/select-palette',
			'@interface-agency/select-tag'
		],
		ngrx: ['@ngrx/effects', '@ngrx/entity', '@ngrx/router-store', '@ngrx/store', '@ngrx/store-devtools', '@ngx-translate/core', 'ngrx-store-freeze'],
	},
	output: {
		path: resolve(__dirname, '../../source/dll'),
		filename: '[name].js',
		library: '[name]',
	},
	plugins: [
		new DllPlugin({
			name: '[name]',
			path: resolve(__dirname, '../../source/dll', '[name]-manifest.json'),
			context: resolve(__dirname, '../../source/dll'),
		}),
		// new WebpackManifestPlugin(),
	],
};

module.exports.default = config;

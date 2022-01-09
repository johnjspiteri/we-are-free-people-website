export const COPY_WEBPACK_PATTERNS: { from: string; to: string }[] = [
	{
		from: '../../source/images',
		to: 'assets/images',
	},
	{
		from: '../../source/i18n',
		to: 'assets/i18n',
	},
	{
		from: '../../source/dll',
		to: 'dll',
	},
];

export const ESLINT_EXCLUDES: string[] = ['node_modules', 'production', 'source/dll', 'source/images', 'source/styles'];

export const JS_INCLUDES: string[] = ['node_modules/@interface-agency/country-service', 'node_modules/@interface-agency/directives.validation.field', 'node_modules/@interface-agency/password-validation', 'node_modules/@interface-agency/phone-number-directive', 'node_modules/@interface-agency/directives.select.option', 'node_modules/@interface-agency/directives.select.option-country', 'node_modules/@interface-agency/directives.select.option-palette', 'node_modules/@interface-agency/directives.select.tag', 'node_modules/@interface-agency/title-case-pipe', 'node_modules/@interface-agency/zip-code-directive'];

export const RESOLVE_ALIAS: { [key: string]: string } = {
	'@application': 'source/application',
	'@store': 'source/application/store',
	'@google_map_service_path': 'source/application/shared/services',
	// '@angular': 'node_modules/@angular',
	// '@fortawesome': 'node_modules/@fortawesome',
	// '@interface-agency/title-case-pipe': '../title-case-pipe/public',
};

export const SASS_INCLUDES: string[] = ['source/styles'];
export const SASS_EXCLUDES: string[] = ['node_modules', 'source/application', 'source/dll', 'source/images'];

export const TS_INCLUDES: string[] = ['source'];
export const TS_EXCLUDES: string[] = ['node_modules', 'source/application/images', 'source/application/styles'];

export const WATCH_OPTIONS_IGNORED: string[] = ['development', 'node_modules', 'source/dll', 'source/images', 'source/polyfills.ts'];

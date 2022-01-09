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
	{
		from: '../../source/application/industry/automotive/used-car-dealer/website/preview/theme-a/theme/styles/abril',
		to: 'assets/styles/automotive/used-car-dealer/theme-a/abril',
	},
	{
		from: '../../source/application/industry/automotive/used-car-dealer/website/preview/theme-a/theme/styles/abril',
		to: 'assets/styles/automotive/used-car-dealer/theme-a/industry',
	},
	{
		from: '../../source/application/industry/automotive/used-car-dealer/website/preview/theme-b/theme/styles/abril',
		to: 'assets/styles/automotive/used-car-dealer/theme-b/abril',
	},
	{
		from: '../../source/application/industry/automotive/used-car-dealer/website/preview/theme-b/theme/styles/abril',
		to: 'assets/styles/automotive/used-car-dealer/theme-b/industry',
	},
	{
		from: '../../source/application/industry/legal/family-lawyer/website/preview/theme-a/theme/styles/abril',
		to: 'assets/styles/legal/family-lawyer/theme-a/abril',
	},
	{
		from: '../../source/application/industry/legal/family-lawyer/website/preview/theme-b/theme/styles/abril',
		to: 'assets/styles/legal/family-lawyer/theme-b/industry',
	},
	{
		from: '../../source/application/industry/legal/family-lawyer/website/preview/theme-b/theme/styles/abril',
		to: 'assets/styles/legal/family-lawyer/theme-b/abril',
	},
	{
		from: '../../source/application/industry/legal/family-lawyer/website/preview/theme-b/theme/styles/abril',
		to: 'assets/styles/legal/family-lawyer/theme-b/industry',
	},
];

export const ESLINT_EXCLUDES: string[] = ['node_modules', 'production', 'source/dll', 'source/images', 'source/styles', 'source/application/industry/automotive/used-car-dealer/website/explore/theme-a/theme', 'source/application/industry/automotive/used-car-dealer/website/explore/theme-b/theme', 'source/application/industry/legal/family-lawyer/website/explore/theme-a/theme', 'source/application/industry/legal/family-lawyer/website/explore/theme-b/theme'];

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
export const TS_EXCLUDES: string[] = ['node_modules', 'source/application/images', 'source/application/styles', 'source/application/industry/automotive/used-car-dealer/website/preview/theme-a/theme', 'source/application/industry/automotive/used-car-dealer/website/preview/theme-b/theme', 'source/application/industry/legal/family-lawyer/website/preview/theme-a/theme', 'source/application/industry/legal/family-lawyer/website/preview/theme-b/theme'];

export const WATCH_OPTIONS_IGNORED: string[] = ['development', 'node_modules', 'source/dll', 'source/images', 'source/polyfills.ts', 'source/application/industry/automotive/used-car-dealer/website/preview/shared', 'source/application/industry/automotive/used-car-dealer/website/preview/theme-a', 'source/application/industry/automotive/used-car-dealer/website/preview/theme-b', 'source/application/industry/legal/family-lawyer/website/preview/shared', 'source/application/industry/legal/family-lawyer/website/preview/theme-a', 'source/application/industry/legal/family-lawyer/website/preview/theme-b'];

export interface SearchOptions {
	[area: string]: {
		options?: string[];
		map?: SearchOptions;
	};
}

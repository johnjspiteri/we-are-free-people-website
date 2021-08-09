import type { Video } from './../interface';
import * as fromVideoReducer from './reducer';

export interface VideoStore {
	[fromVideoReducer.FEATURE_KEY]: VideoState;
}

export interface VideoState {
	area: {
		options: string[];
		selected: string;
	};
	category: {
		options: string[];
		selected: string;
	};
	list: {
		processed: Video[];
		results: Video[];
	};
	find: Video;
	section: {
		options: string[];
		selected: string;
	};
	sort: {
		options: string[];
		selected: string;
	};
	state: boolean;
	tag: {
		options: string[];
		selected: string[];
	};
	topic: {
		options: string[];
		selected: string;
	};
	type: {
		options: string[];
		selected: string;
	};
}

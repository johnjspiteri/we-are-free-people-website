import type { Event } from './../interface';
import * as fromEventReducer from './reducer';

export interface EventStore {
	[fromEventReducer.FEATURE_KEY]: EventState;
}

export interface EventState {
	area: {
		options: string[];
		selected: string;
	};
	category: {
		options: string[];
		selected: string;
	};
	list: {
		processed: Event[];
		results: Event[];
	};
	find: Event;
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

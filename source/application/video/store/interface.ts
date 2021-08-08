import type { Article } from '@interface-agency/website-article-interface';
import * as fromVideoReducer from './reducer';

export interface ArticleStore {
	[fromVideoReducer.FEATURE_KEY]: ArticleState;
}

export interface ArticleState {
	area: {
		options: string[];
		selected: string;
	};
	category: {
		options: string[];
		selected: string;
	};
	list: {
		processed: Article[];
		results: Article[];
	};
	find: Article;
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

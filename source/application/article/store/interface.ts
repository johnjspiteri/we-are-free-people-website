import type { Article } from '@interface-agency/interfaces.website.article';
import * as fromArticleReducer from '_application/article/store/reducer';

export interface ArticleStore {
	[fromArticleReducer.FEATURE_KEY]: ArticleState;
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

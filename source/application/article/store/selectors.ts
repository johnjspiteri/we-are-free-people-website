import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { ArticleStore } from './interface';
import * as fromArticleReducer from '_application/article/store/reducer';

export const ARTICLE_STORE = createFeatureSelector<ArticleStore>(fromArticleReducer.FEATURE_KEY);

export const STATE = createSelector(ARTICLE_STORE, (state) => state[fromArticleReducer.FEATURE_KEY]);

export const ARTICLES = createSelector(ARTICLE_STORE, (state) => state[fromArticleReducer.FEATURE_KEY].list.results);

export const ARTICLE = createSelector(ARTICLE_STORE, (state) => state[fromArticleReducer.FEATURE_KEY].find);

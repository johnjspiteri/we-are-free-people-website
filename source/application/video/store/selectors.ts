import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { ArticleStore } from './interface';
import * as fromVideoReducer from './reducer';

export const ARTICLE_STORE = createFeatureSelector<ArticleStore>(fromVideoReducer.FEATURE_KEY);

export const STATE = createSelector(ARTICLE_STORE, (state) => state[fromVideoReducer.FEATURE_KEY]);

export const ARTICLES = createSelector(ARTICLE_STORE, (state) => state[fromVideoReducer.FEATURE_KEY].list.results);

export const ARTICLE = createSelector(ARTICLE_STORE, (state) => state[fromVideoReducer.FEATURE_KEY].find);

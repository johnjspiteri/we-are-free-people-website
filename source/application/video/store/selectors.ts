import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { VideoStore } from './interface';
import * as fromVideoReducer from './reducer';

export const VIDEO_STORE = createFeatureSelector<VideoStore>(fromVideoReducer.FEATURE_KEY);

export const STATE = createSelector(VIDEO_STORE, (state) => state[fromVideoReducer.FEATURE_KEY]);

export const VIDEOS = createSelector(VIDEO_STORE, (state) => state[fromVideoReducer.FEATURE_KEY].list.results);

export const VIDEO = createSelector(VIDEO_STORE, (state) => state[fromVideoReducer.FEATURE_KEY].find);

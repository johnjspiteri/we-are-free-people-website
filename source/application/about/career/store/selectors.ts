import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { CareerStore } from './interface';
import * as fromCareerReducer from './reducer';

export const CAREER_STORE = createFeatureSelector<CareerStore>(fromCareerReducer.FEATURE_KEY);

export const STATE = createSelector(CAREER_STORE, (state) => state[fromCareerReducer.FEATURE_KEY]);

export const CAREER = createSelector(CAREER_STORE, (state) => state[fromCareerReducer.FEATURE_KEY].find);

export const CAREERS = createSelector(CAREER_STORE, (state) => state[fromCareerReducer.FEATURE_KEY].list.results);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { EventStore } from './interface';
import * as fromEventReducer from './reducer';

export const EVENT_STORE = createFeatureSelector<EventStore>(fromEventReducer.FEATURE_KEY);

export const STATE = createSelector(EVENT_STORE, (state) => state[fromEventReducer.FEATURE_KEY]);

export const EVENTS = createSelector(EVENT_STORE, (state) => state[fromEventReducer.FEATURE_KEY].list.results);

export const EVENT = createSelector(EVENT_STORE, (state) => state[fromEventReducer.FEATURE_KEY].find);

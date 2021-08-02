import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { Loader } from '_application/common/store/loader/interface';
import { State } from '_application/common/store/interface';

export const LOADER_STATE = createFeatureSelector<State, Loader>('loader');

export const LOADER_GLOBAL = createSelector(LOADER_STATE, (state: Loader) => state.global);

export const LOADER_PANEL = createSelector(LOADER_STATE, (state: Loader) => state.panel);

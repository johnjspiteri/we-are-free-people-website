import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '_application/common/store/interface';

export const PANEL_STATE = createFeatureSelector<State, boolean>('panel');

export const PANEL = createSelector(PANEL_STATE, (state: boolean) => state);

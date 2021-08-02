import { createReducer, on } from '@ngrx/store';
import * as fromLoaderActions from './actions';
import type { Loader } from '_application/common/store/loader/interface';

const INITIAL_LOADER_STATE: Loader = {
	global: false,
	panel: false,
};

export const LOADER_REDUCER = createReducer(
	INITIAL_LOADER_STATE,
	on(fromLoaderActions.PANEL_ACTIVATED, (state) => {
		return {
			...state,
			panel: true,
		};
	}),
	on(fromLoaderActions.PANEL_DEACTIVATED, (state) => {
		return {
			...state,
			panel: false,
		};
	}),
	on(fromLoaderActions.GLOBAL_ACTIVATED, (state) => {
		return {
			...state,
			global: true,
		};
	}),
	on(fromLoaderActions.GLOBAL_DEACTIVATED, (state) => {
		return {
			...state,
			global: false,
		};
	})
);

import { InjectionToken } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { PANEL_REDUCER } from './panel/reducer';
import { routerReducer } from '@ngrx/router-store';
import type { State } from './interface';

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('ROOT_REDUCERS_TOKEN', {
	factory: () => ({
		panel: PANEL_REDUCER,
		router: routerReducer,
	}),
});

export const metaReducers: MetaReducer<State>[] = [logger, storeFreeze];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
	return (state, action) => {
		const result = reducer(state, action);
		console.groupCollapsed(action.type);
		console.log('prev state', state);
		console.log('action', action);
		console.log('next state', result);
		console.groupEnd();
		return result;
	};
}

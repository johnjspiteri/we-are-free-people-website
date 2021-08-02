import { createReducer, on } from '@ngrx/store';
import * as fromPanelActions from './actions';

const INITIAL_STATE: boolean = false;

export const PANEL_REDUCER = createReducer(
	INITIAL_STATE,
	on(fromPanelActions.CLOSE, () => {
		return false;
	}),
	on(fromPanelActions.OPEN, () => {
		return true;
	})
);

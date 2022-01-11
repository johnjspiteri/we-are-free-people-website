import { RouterReducerState } from '@ngrx/router-store';

export interface State {
	panel: boolean;
	router: RouterReducerState;
}

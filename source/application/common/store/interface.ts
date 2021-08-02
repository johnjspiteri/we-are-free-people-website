import { RouterReducerState } from '@ngrx/router-store';
import type { Loader } from '_application/common/store/loader/interface';

export interface State {
	loader: Loader;
	panel: boolean;
	router: RouterReducerState;
}

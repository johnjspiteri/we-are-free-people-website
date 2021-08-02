import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';
import { Params } from '@angular/router';

export const ROUTE = createFeatureSelector<any, RouterReducerState<any>>('router');

export const {
	// select the current route
	selectCurrentRoute,
	// select the current route fragment
	selectFragment,
	// select the current route query params
	selectQueryParams,
	// factory function to select a query param
	selectQueryParam,
	// select the current route params
	selectRouteParams,
	// factory function to select a route param
	selectRouteParam,
	// select the current route data
	selectRouteData,
	// select the current url
	selectUrl,
} = getSelectors(ROUTE);

export const selectRouteNestedParams = createSelector(ROUTE, (router) => {
	let currentRoute = router?.state?.root;
	let params: Params = {};
	while (currentRoute?.firstChild) {
		currentRoute = currentRoute.firstChild;
		params = {
			...params,
			...currentRoute.params,
		};
	}
	return params;
});

export const selectRouteNestedParam = (param: string) => createSelector(selectRouteNestedParams, (params) => params && params[param]);

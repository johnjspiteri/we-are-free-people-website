import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { selectRouteNestedParams } from '_application/common/store/router/selectors';

import * as fromCareerActions from '../actions';
import * as fromCareerSelectors from '../selectors';
import * as fromLoaderActions from '_application/common/store/loader/actions';
import { CareerFindService } from '../services/find';
import { CareerListService } from '../services/list';
import type { Career, CareerListRequest } from '@interface-agency/website-career-interface';
import type { CareerStore } from '../../store/interface';
import type { SearchOptions } from '_application/shared/interface/options';

const options: SearchOptions = {
	marketing: {
		options: ['campaign', 'operations', 'research'],
		map: {
			campaign: {
				options: ['content', 'copywriter', 'email', 'paid', 'seo'],
				map: {
					content: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					copywriter: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					email: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					paid: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					seo: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			research: {
				options: ['analytics', 'feedback'],
				map: {
					analytics: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					feedback: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	product: {
		options: ['design', 'development', 'programming'],
		map: {
			design: {
				options: ['graphic', 'user-experience', 'user-interface'],
				map: {
					graphic: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'user-experience': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'user-interface': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			development: {
				options: ['domains', 'email', 'marketing', 'websites'],
				map: {
					domains: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					email: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					marketing: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					websites: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			programming: {
				options: ['back-end', 'database', 'deployment', 'front-end'],
				map: {
					'back-end': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					database: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					deployment: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'front-end': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	sales: {
		options: ['enablement', 'operation', 'representative'],
		map: {
			enablement: {
				options: ['analytics', 'onboarding'],
				map: {
					analytics: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					onboarding: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			representative: {
				options: ['call-center', 'field'],
				map: {
					'call-center': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					field: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	support: {
		options: ['operation', 'representative'],
		map: {
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			representative: {
				options: ['call-center', 'digital'],
				map: {
					'call-center': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					digital: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
};

@Injectable()
export class CareerEffectsTasks {
	constructor(@Inject(DOCUMENT) private document: any, private actions$: Actions, private careerFindService: CareerFindService, private careerListService: CareerListService, private router: Router, private store: Store<CareerStore>) {}

	careerListSettingsLoad$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.SETTING_LOAD),
				withLatestFrom(this.store.select(selectRouteNestedParams)),
				tap(([{}, route_params]) => {
					this.store.dispatch(fromLoaderActions.GLOBAL_ACTIVATED());
					let teams: string[] = [];
					if (route_params.department) teams = options[route_params.department].options;

					let categories: string[] = [];
					if (route_params.team) categories = options[route_params.department].map[route_params.team].options;

					let experiences: string[] = [];
					if (route_params.category) experiences = options[route_params.department].map[route_params.team].map[route_params.category].options;

					this.store.dispatch(
						fromCareerActions.SETTING_SAVE({
							department: route_params.department || '',
							team: route_params.team || '',
							teams: teams,
							category: route_params.category || '',
							categories: categories,
							experience: route_params.experience || '',
							experiences: experiences,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerFindLoad$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromCareerActions.FIND_LOAD),
				withLatestFrom(this.store.select(selectRouteNestedParams)),
				exhaustMap(([{}, data]) => {
					return this.careerFindService.get(data.department, data.team, data.category, data.experience, data.clean).pipe(
						map((response) => {
							return this.store.dispatch(
								fromCareerActions.FIND_SAVE({
									career: response,
								})
							);
						}),
						take(1)
					);
				})
			),
		{ dispatch: false }
	);

	careerListLoad$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.LIST_LOAD),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				switchMap(([{}, data]) => {
					const payload: CareerListRequest = {};
					if (data.department.selected) payload['department'] = data.department.selected;
					if (data.team.selected) payload['team'] = data.team.selected;
					if (data.category.selected) payload['category'] = data.category.selected;
					if (data.experience.selected) payload['experience'] = data.experience.selected;

					return this.careerListService.post(payload).pipe(
						map((response: Career[]) => {
							this.store.dispatch(
								fromCareerActions.TYPE_FILTER({
									processed: response,
									results: response,
								})
							);
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListReload$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.LIST_RELOAD),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				tap(([{}, data]) => {
					// this.store.dispatch(fromLoaderActions.GLOBAL_ACTIVATED());
					this.store.dispatch(
						fromCareerActions.TYPE_FILTER({
							processed: data.list.results,
							results: data.list.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListLocationFilter$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.TYPE_FILTER),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				tap(([action, data]) => {
					let output: Career[] = [];
					if (data.type.selected) {
						for (let i = 0; i < action.processed.length; i++) {
							if (action.processed[i].type === data.type.selected) {
								output.push(action.processed[i]);
							}
						}
					} else {
						output = action.processed;
					}
					this.store.dispatch(
						fromCareerActions.OFFICE_FILTER({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListOfficeFilter$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.OFFICE_FILTER),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				tap(([action, data]) => {
					let output: Career[] = [];
					if (data.office.selected) {
						for (let list_index = 0; list_index < action.processed.length; list_index++) {
							let office: string = action.processed[list_index].office.city + ', ' + action.processed[list_index].office.country;
							if (office === data.office.selected) output.push(action.processed[list_index]);
						}
					} else {
						output = action.processed;
					}
					this.store.dispatch(
						fromCareerActions.SORT({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListSort$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.SORT),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				tap(([action, data]) => {
					let output = cloneDeep(action.processed);
					if (data.sort.selected === 'alphabetical') {
						output.sort((a, b) => (a.role > b.role ? 1 : -1));
					} else if (data.sort.selected === 'newest') {
						output.sort((a, b) => (a.updated < b.updated ? 1 : -1));
					}

					this.store.dispatch(
						fromCareerActions.TYPE_POPULATE({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListTypesPopulate$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.TYPE_POPULATE),
				tap((action) => {
					let types: string[] = [];
					for (let i = 0; i < action.processed.length; i++) {
						types.push(action.processed[i].type);
					}
					types.sort((a, b) => (a > b ? 1 : -1));

					this.store.dispatch(
						fromCareerActions.OFFICE_POPULATE({
							processed: action.processed,
							results: action.results,
							kinds: [...new Set(types)],
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	careerListOfficesPopulate$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.OFFICE_POPULATE),
				tap((action) => {
					let offices: string[] = [];
					for (let i = 0; i < action.processed.length; i++) {
						offices.push(action.processed[i].office.city + ', ' + action.processed[i].office.country);
					}
					offices.sort((a, b) => (a > b ? 1 : -1));
					this.store.dispatch(
						fromCareerActions.LIST_SAVE({
							processed: action.processed,
							results: action.results,
							offices: [...new Set(offices)],
							kinds: action.kinds,
						})
					);
					this.store.dispatch(fromLoaderActions.GLOBAL_DEACTIVATED());
				})
			);
		},
		{ dispatch: false }
	);

	careerListNavigation$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromCareerActions.NAVIGATION),
				withLatestFrom(this.store.select(fromCareerSelectors.STATE)),
				tap(([{}, data]) => {
					const path = ['/careers'];
					if (data.department.selected) {
						path.push(data.department.selected);
						if (data.team.selected) {
							path.push(data.team.selected);
							if (data.category.selected) {
								path.push(data.category.selected);
								if (data.experience.selected) path.push(data.experience.selected);
							}
						}
					}
					this.router.navigate(path).then(() => {
						// this.store.dispatch(LOADER_GLOBAL_DEACTIVATED())
					});
				})
			);
		},
		{ dispatch: false }
	);
}

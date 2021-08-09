import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { ArticleFindService } from '../services/find';
import { ArticleListService } from '../services/list';
import { selectRouteNestedParams, selectRouteParams } from '_application/common/store/router/selectors';
import * as fromVideoActions from '../actions';
import * as fromVideoSelectors from '../selectors';
import * as fromLoaderActions from '_application/common/store/loader/actions';
import { cloneDeep } from 'lodash';
import type { Article, ArticleListRequest } from '@interface-agency/website-article-interface';
import type { SearchOptions } from '_application/shared/interface/options';
import type { VideoStore } from './../interface';

const options: SearchOptions = {
	platform: {
		options: ['access', 'account', 'support'],
		map: {
			access: {
				options: ['groups', 'organization', 'products'],
				map: {
					groups: {
						options: ['administrators'],
						map: {
							administrators: {},
						},
					},
					organization: {
						options: ['owners'],
						map: {
							owners: {},
						},
					},
					products: {
						options: ['contributors', 'editors'],
						map: {
							contributors: {},
							editors: {},
						},
					},
				},
			},
			account: {
				options: ['billing'],
				map: {
					billing: {
						options: ['contract', 'invoices', 'payment', 'refund', 'suspension'],
						map: {
							contract: {},
							invoices: {},
							payment: {},
							refund: {},
							suspension: {},
						},
					},
				},
			},
			support: {
				options: ['channels'],
				map: {
					channels: {
						options: ['chat', 'email', 'options', 'phone', 'sms', 'whatsapp'],
						map: {
							chat: {},
							email: {},
							options: {},
							phone: {},
							sms: {},
							whatsapp: {},
						},
					},
				},
			},
		},
	},
	products: {
		options: ['domains', 'websites'],
		map: {
			domains: {
				options: ['migration', 'security', 'setup'],
				map: {
					migration: {
						options: ['transfer'],
						map: {
							transfer: {},
						},
					},
					security: {
						options: ['features'],
						map: {
							features: {},
						},
					},
					setup: {
						options: ['dns'],
						map: {
							dns: {},
						},
					},
				},
			},
			websites: {
				options: ['analytics', 'benefits', 'code', 'content', 'design', 'hosting'],
				map: {
					analytics: {
						options: ['setup'],
						map: {
							setup: {},
						},
					},
					benefits: {
						options: ['all-inclusive'],
						map: {
							'all-inclusive': {},
						},
					},
					code: {
						options: ['features', 'technology', 'updates'],
						map: {
							features: {},
							technology: {},
							updates: {},
						},
					},
					content: {
						options: ['images', 'video'],
						map: {
							images: {},
							video: {},
						},
					},
					design: {
						options: ['palettes', 'responsive', 'themes'],
						map: {
							palettes: {},
							responsive: {},
							themes: {},
						},
					},
					hosting: {
						options: ['administration', 'performance', 'security'],
						map: {
							administration: {},
							performance: {},
							security: {},
						},
					},
				},
			},
		},
	},
};

@Injectable()
export class VideoEffectsTasks {
	constructor(@Inject(DOCUMENT) private document: any, private actions$: Actions, private articleFindService: ArticleFindService, private articleListService: ArticleListService, private router: Router, private store: Store<VideoStore>) {}

	articleListSettingsLoad$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.SETTING_LOAD),
				withLatestFrom(this.store.select(selectRouteParams)),
				tap(([{}, route_params]) => {
					this.store.dispatch(fromLoaderActions.GLOBAL_ACTIVATED());
					let sections: string[] = [];
					if (route_params.area) sections = options[route_params.area].options;

					let categories: string[] = [];
					if (route_params.section) categories = options[route_params.area].map[route_params.section].options;

					let topics: string[] = [];
					if (route_params.category) topics = options[route_params.area].map[route_params.section].map[route_params.category].options;

					this.store.dispatch(
						fromVideoActions.SETTING_SAVE({
							area: route_params.area || '',
							category: route_params.category || '',
							categories: categories,
							section: route_params.section || '',
							sections: sections,
							topic: route_params.topic || '',
							topics: topics,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleFindLoad$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(fromVideoActions.FIND_LOAD),
				withLatestFrom(this.store.select(selectRouteNestedParams)),
				exhaustMap(([{}, data]) => {
					return this.articleFindService.get(data.area, data.section, data.category, data.topic, data.clean).pipe(
						map((response) => {
							return this.store.dispatch(
								fromVideoActions.FIND_SAVE({
									article: response,
								})
							);
						}),
						take(1)
					);
				})
			),
		{ dispatch: false }
	);

	articleListLoad$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.LIST_LOAD),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				// switchMap(([{}, data]) => {
				switchMap(([{}, data]) => {
					const payload: ArticleListRequest = {};
					if (data.area.selected) payload['area'] = data.area.selected;
					if (data.category.selected) payload['category'] = data.category.selected;
					if (data.section.selected) payload['section'] = data.section.selected;
					if (data.topic.selected) payload['topic'] = data.topic.selected;

					return this.articleListService.post(payload).pipe(
						map((response: Article[]) => {
							this.store.dispatch(
								fromVideoActions.TYPE_FILTER({
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

	articleListReload$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.LIST_RELOAD),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				tap(([{}, data]) => {
					// this.store.dispatch(fromLoaderActions.GLOBAL_ACTIVATED());
					this.store.dispatch(
						fromVideoActions.TYPE_FILTER({
							processed: data.list.results,
							results: data.list.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleListTypeFilter$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.TYPE_FILTER),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				tap(([action, data]) => {
					console.log('type selected:', data.type.selected);
					console.log('type selected:', action.processed.length);
					let output: Article[] = [];
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
						fromVideoActions.TAG_FILTER({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleListTagFilter$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.TAG_FILTER),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				tap(([action, data]) => {
					let output: Article[] = [];
					if (data.tag.selected.length) {
						for (let list_index = 0; list_index < action.processed.length; list_index++) {
							let flag: boolean = true;
							for (let selected_tag_index = 0; selected_tag_index < data.tag.selected.length; selected_tag_index++) {
								if (action.processed[list_index].tags.indexOf(data.tag.selected[selected_tag_index]) === -1) {
									flag = false;
								}
							}

							if (flag) {
								output.push(action.processed[list_index]);
							}
						}
					} else {
						output = action.processed;
					}

					this.store.dispatch(
						fromVideoActions.SORT({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleListSort$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.SORT),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				tap(([action, data]) => {
					let output = cloneDeep(action.processed);
					if (data.sort.selected === 'alphabetical') {
						output.sort((a, b) => (a.title > b.title ? 1 : -1));
					} else if (data.sort.selected === 'newest') {
						output.sort((a, b) => (a.updated < b.updated ? 1 : -1));
					}

					this.store.dispatch(
						fromVideoActions.TYPE_POPULATE({
							processed: output,
							results: action.results,
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleListTypesPopulate$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.TYPE_POPULATE),
				tap((action) => {
					let types: string[] = [];
					for (let i = 0; i < action.processed.length; i++) {
						types.push(action.processed[i].type);
					}
					types.sort((a, b) => (a > b ? 1 : -1));

					this.store.dispatch(
						fromVideoActions.TAG_POPULATE({
							processed: action.processed,
							results: action.results,
							types: [...new Set(types)],
						})
					);
				})
			);
		},
		{ dispatch: false }
	);

	articleListTagsPopulate$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.TAG_POPULATE),
				tap((action) => {
					let tags: string[] = [];
					for (let i = 0; i < action.processed.length; i++) {
						tags = tags.concat(action.processed[i].tags);
					}
					tags.sort((a, b) => (a > b ? 1 : -1));

					this.store.dispatch(
						fromVideoActions.LIST_SAVE({
							processed: action.processed,
							results: action.results,
							tags: [...new Set(tags)],
							kinds: action.types,
						})
					);
					this.store.dispatch(fromLoaderActions.GLOBAL_DEACTIVATED());
				})
			);
		},
		{ dispatch: false }
	);

	articleListNavigation$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromVideoActions.NAVIGATION),
				withLatestFrom(this.store.select(fromVideoSelectors.STATE)),
				tap(([{}, data]) => {
					const path = ['/articles'];
					if (data.area.selected) {
						path.push(data.area.selected);
						if (data.section.selected) {
							path.push(data.section.selected);
							if (data.category.selected) {
								path.push(data.category.selected);
								if (data.topic.selected) path.push(data.topic.selected);
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

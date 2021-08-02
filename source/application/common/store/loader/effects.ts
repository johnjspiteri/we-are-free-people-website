// import { Inject, Injectable } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { Router, UrlSegment, UrlTree } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { tap, withLatestFrom } from 'rxjs/operators';
// import * as fromLoaderActions from '_application/common/store/loader/actions';
// import { LOADER } from '_application/common/store/loader/selectors';
// import { Loader } from '_application/common/store/loader/interface';
//
// @Injectable()
// export class LoaderEffects {
// 	constructor(private actions$: Actions, private store: Store) {}
//
// 	loaderLoad$ = createEffect(
// 		() => {
// 			return this.actions$.pipe(
// 				ofType(LOADER_ACTIVATED),
// 				tap(() => {
// 					// this.store.dispatch(
// 					// 	LOADER_ACT({
// 					// 		industry: this.segments[1].path,
// 					// 		category: this.segments[3].path,
// 					// 		theme: this.segments[7].path,
// 					// 		themes: ['theme-a', 'theme-b'],
// 					// 		font: this.segments[8].path,
// 					// 		fonts: this.options[this.segments[1].path][this.segments[3].path][this.segments[7].path].fonts,
// 					// 		palette: this.segments[9].path,
// 					// 		palettes: this.options[this.segments[1].path][this.segments[3].path][this.segments[7].path].palettes,
// 					// 	})
// 					// );
// 					// this.store.dispatch(LOADER_LOAD_STYLESHEET());
// 				})
// 			);
// 		},
// 		{ dispatch: false }
// 	);
//
// 	// loaderChangeTheme$ = createEffect(
// 	// 	() => {
// 	// 		return this.actions$.pipe(
// 	// 			ofType(LOADER_CHANGE_THEME),
// 	// 			withLatestFrom(this.store.select(LOADER)),
// 	// 			tap(() => {
// 	// 				this.store.dispatch(LOADER_LOAD_STYLESHEET());
// 	// 				this.store.dispatch(LOADER_NAVIGATE());
// 	// 			})
// 	// 		);
// 	// 	},
// 	// 	{ dispatch: false }
// 	// );
// 	//
// 	// loaderChangePalette$ = createEffect(
// 	// 	() => {
// 	// 		return this.actions$.pipe(
// 	// 			ofType(LOADER_CHANGE_PALETTE),
// 	// 			withLatestFrom(this.store.select(LOADER)),
// 	// 			tap(() => {
// 	// 				this.store.dispatch(LOADER_LOAD_STYLESHEET());
// 	// 				this.store.dispatch(LOADER_NAVIGATE());
// 	// 			})
// 	// 		);
// 	// 	},
// 	// 	{ dispatch: false }
// 	// );
// 	//
// 	// loaderChangeFont$ = createEffect(
// 	// 	() => {
// 	// 		return this.actions$.pipe(
// 	// 			ofType(LOADER_CHANGE_FONT),
// 	// 			withLatestFrom(this.store.select(LOADER)),
// 	// 			tap(() => {
// 	// 				this.store.dispatch(LOADER_LOAD_STYLESHEET());
// 	// 				this.store.dispatch(LOADER_NAVIGATE());
// 	// 			})
// 	// 		);
// 	// 	},
// 	// 	{ dispatch: false }
// 	// );
// 	//
// 	// loaderChangeStylesheet$ = createEffect(
// 	// 	() => {
// 	// 		return this.actions$.pipe(
// 	// 			ofType(LOADER_LOAD_STYLESHEET),
// 	// 			withLatestFrom(this.store.select(LOADER)),
// 	// 			tap(([action, data]) => {
// 	// 				for (const industryKey in this.options) {
// 	// 					for (const categoryKey in this.options[industryKey]) {
// 	// 						for (const themeKey in this.options[industryKey][categoryKey]) {
// 	// 							for (let a = 0; a < this.options[industryKey][categoryKey][themeKey].fonts.length; a++) {
// 	// 								for (let b = 0; b < this.options[industryKey][categoryKey][themeKey].palettes.length; b++) {
// 	// 									if (industryKey === data.industry && categoryKey === data.category && themeKey === data.theme && this.options[industryKey][categoryKey][themeKey].fonts[a] === data.font && this.options[industryKey][categoryKey][themeKey].palettes[b].name === data.palette) {
// 	// 										this.document.getElementById(data.industry + '-' + data.category + '-' + data.theme + '-' + data.font + '-' + data.palette + '-palette').removeAttribute('disabled');
// 	// 									} else {
// 	// 										this.document.getElementById(industryKey + '-' + categoryKey + '-' + themeKey + '-' + this.options[industryKey][categoryKey][themeKey].fonts[a] + '-' + this.options[industryKey][categoryKey][themeKey].palettes[b].name + '-palette').setAttribute('disabled', 'disabled');
// 	// 									}
// 	// 								}
// 	// 							}
// 	// 						}
// 	// 					}
// 	// 				}
// 	// 			})
// 	// 		);
// 	// 	},
// 	// 	{ dispatch: false }
// 	// );
// 	//
// 	// loaderNavigate$ = createEffect(
// 	// 	() => {
// 	// 		return this.actions$.pipe(
// 	// 			ofType(LOADER_NAVIGATE),
// 	// 			withLatestFrom(this.store.select(LOADER)),
// 	// 			tap(([action, data]) => {
// 	// 				this.loadSegments();
// 	// 				let path = ['/industry', data.industry, 'category', data.category, 'product', 'websites', 'preview', data.theme, data.font, data.palette];
// 	// 				// Add existing demo specific state to target path
// 	// 				if (this.segments.length >= 10) {
// 	// 					for (let i = 10; i < this.segments.length; i++) {
// 	// 						path.push(this.segments[i].path);
// 	// 					}
// 	// 				}
// 	// 				this.router.navigate(path).then((result) => {});
// 	// 			})
// 	// 		);
// 	// 	},
// 	// 	{ dispatch: false }
// 	// );
// }

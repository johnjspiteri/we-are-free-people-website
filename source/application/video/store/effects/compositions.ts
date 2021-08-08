import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as fromArticleActions from '../actions';

@Injectable()
export class VideoEffectsCompositions {
	constructor(private actions$: Actions) {}

	articleListInititalize$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromArticleActions.INITIALIZE),
			switchMap(() => [fromArticleActions.SETTING_LOAD(), fromArticleActions.LIST_LOAD()])
		);
	});

	articleListSettingUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromArticleActions.AREA_UPDATE, fromArticleActions.SECTION_UPDATE, fromArticleActions.CATEGORY_UPDATE, fromArticleActions.TOPIC_UPDATE),
			switchMap(() => [fromArticleActions.LIST_LOAD(), fromArticleActions.NAVIGATION()])
		);
	});

	articleListOptionUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromArticleActions.TAG_UPDATE, fromArticleActions.TYPE_UPDATE, fromArticleActions.SORT_UPDATE),
			switchMap(() => [fromArticleActions.LIST_RELOAD()])
		);
	});

	articleListReset$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromArticleActions.RESET),
			switchMap(() => [fromArticleActions.LIST_LOAD(), fromArticleActions.NAVIGATION()])
		);
	});
}

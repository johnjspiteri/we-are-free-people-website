import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as fromEventActions from '../actions';

@Injectable()
export class EventEffectsCompositions {
	constructor(private actions$: Actions) {}

	eventListInititalize$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromEventActions.INITIALIZE),
			switchMap(() => [fromEventActions.SETTING_LOAD(), fromEventActions.LIST_LOAD()])
		);
	});

	eventListSettingUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromEventActions.AREA_UPDATE, fromEventActions.SECTION_UPDATE, fromEventActions.CATEGORY_UPDATE, fromEventActions.TOPIC_UPDATE),
			switchMap(() => [fromEventActions.LIST_LOAD(), fromEventActions.NAVIGATION()])
		);
	});

	eventListOptionUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromEventActions.TAG_UPDATE, fromEventActions.TYPE_UPDATE, fromEventActions.SORT_UPDATE),
			switchMap(() => [fromEventActions.LIST_RELOAD()])
		);
	});

	eventListReset$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromEventActions.RESET),
			switchMap(() => [fromEventActions.LIST_LOAD(), fromEventActions.NAVIGATION()])
		);
	});
}

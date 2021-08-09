import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as fromVideoActions from '../actions';

@Injectable()
export class VideoEffectsCompositions {
	constructor(private actions$: Actions) {}

	videoListInititalize$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromVideoActions.INITIALIZE),
			switchMap(() => [fromVideoActions.SETTING_LOAD(), fromVideoActions.LIST_LOAD()])
		);
	});

	videoListSettingUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromVideoActions.AREA_UPDATE, fromVideoActions.SECTION_UPDATE, fromVideoActions.CATEGORY_UPDATE, fromVideoActions.TOPIC_UPDATE),
			switchMap(() => [fromVideoActions.LIST_LOAD(), fromVideoActions.NAVIGATION()])
		);
	});

	videoListOptionUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromVideoActions.TAG_UPDATE, fromVideoActions.TYPE_UPDATE, fromVideoActions.SORT_UPDATE),
			switchMap(() => [fromVideoActions.LIST_RELOAD()])
		);
	});

	videoListReset$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromVideoActions.RESET),
			switchMap(() => [fromVideoActions.LIST_LOAD(), fromVideoActions.NAVIGATION()])
		);
	});
}

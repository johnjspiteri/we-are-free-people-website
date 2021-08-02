import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import * as fromCareerActions from '../actions';

@Injectable()
export class CareerEffectsCompositions {
	constructor(private actions$: Actions) {}

	careerListInititalize$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromCareerActions.INITIALIZE),
			switchMap(() => [fromCareerActions.SETTING_LOAD(), fromCareerActions.LIST_LOAD()])
		);
	});

	careerListSettingUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromCareerActions.DEPARTMENT_UPDATE, fromCareerActions.TEAM_UPDATE, fromCareerActions.CATEGORY_UPDATE, fromCareerActions.EXPERIENCE_UPDATE),
			switchMap(() => [fromCareerActions.LIST_LOAD(), fromCareerActions.NAVIGATION()])
		);
	});

	careerListOptionUpdate$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromCareerActions.OFFICE_UPDATE, fromCareerActions.TYPE_UPDATE, fromCareerActions.SORT_UPDATE),
			switchMap(() => [fromCareerActions.LIST_RELOAD()])
		);
	});

	careerListReset$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(fromCareerActions.RESET),
			switchMap(() => [fromCareerActions.LIST_LOAD(), fromCareerActions.NAVIGATION()])
		);
	});
}

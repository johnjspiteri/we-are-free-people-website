import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromCareerActions from '../store/actions';
import * as fromCareerSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class CareerListGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromCareerSelectors.CAREERS),
			tap((careers) => {
				if (careers === null) return this.store.dispatch(fromCareerActions.LIST_LOAD());
				return careers;
			}),
			filter((careers) => !!careers),
			map((careers) => {
				return !!careers.length;
			}),
			take(1)
		);
	}
}

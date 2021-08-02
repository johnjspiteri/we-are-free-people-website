import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromCareerActions from '../store/actions';
import * as fromCareerSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class CareerFindGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromCareerSelectors.CAREER),
			tap((data) => {
				if (data === null) return this.store.dispatch(fromCareerActions.FIND_LOAD());
				return data;
			}),
			filter((data) => !!data),
			map((data) => !!data),
			take(1)
		);
	}
}

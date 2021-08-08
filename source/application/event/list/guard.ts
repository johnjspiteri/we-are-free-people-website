import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromEventActions from '../store/actions';
import * as fromEventSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class EventListGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromEventSelectors.EVENTS),
			tap((events) => {
				if (events === null) return this.store.dispatch(fromEventActions.LIST_LOAD());
				return events;
			}),
			filter((events) => !!events),
			map((events) => {
				return !!events.length;
			}),
			take(1)
		);
	}
}

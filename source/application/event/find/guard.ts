import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromEventActions from '../store/actions';
import * as fromEventSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class ArticleFindGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromEventSelectors.EVENT),
			tap((event) => {
				if (event === null) return this.store.dispatch(fromEventActions.FIND_LOAD());
				return event;
			}),
			filter((event) => !!event),
			map((event) => !!event),
			take(1)
		);
	}
}

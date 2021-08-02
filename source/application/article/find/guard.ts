import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromArticleActions from '../store/actions';
import * as fromArticleSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class ArticleFindGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromArticleSelectors.ARTICLE),
			tap((article) => {
				if (article === null) return this.store.dispatch(fromArticleActions.FIND_LOAD());
				return article;
			}),
			filter((article) => !!article),
			map((article) => !!article),
			take(1)
		);
	}
}

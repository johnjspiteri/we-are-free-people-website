import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as fromArticleActions from '../store/actions';
import * as fromArticleSelectors from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class ArticleListGuard implements CanActivate {
	constructor(private router: Router, private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.store.pipe(
			select(fromArticleSelectors.ARTICLES),
			tap((articles) => {
				if (articles === null) return this.store.dispatch(fromArticleActions.LIST_LOAD());
				return articles;
			}),
			filter((articles) => !!articles),
			map((articles) => {
				return !!articles.length;
			}),
			take(1)
		);
	}
}

import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromPanelActions from './actions';

@Injectable()
export class PanelEffects {
	constructor(@Inject(DOCUMENT) private document: any, private actions$: Actions, private rendererFactory: RendererFactory2, private router: Router, private store: Store) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	private renderer: Renderer2;
	private body: HTMLBodyElement = this.document.getElementById('body');

	panelOpen$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromPanelActions.OPEN),
				tap(() => {
					this.renderer.addClass(this.body, 'locked');
				})
			);
		},
		{ dispatch: false }
	);

	panelClose$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(fromPanelActions.CLOSE),
				tap(() => {
					this.renderer.removeClass(this.body, 'locked');
				})
			);
		},
		{ dispatch: false }
	);
}

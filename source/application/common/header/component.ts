import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { faComment, faReceipt, faCaretDown, faCaretRight, faMoneyCheck } from '@fortawesome/pro-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons';
import { faLock } from '@fortawesome/pro-duotone-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/pro-duotone-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { PANEL } from '_application/common/store/panel/selectors';
import * as fromPanelActions from '_application/common/store/panel/actions';
interface State {
	[key: string]: boolean;
}

@Component({
	selector: 'website-header',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
	public faComment: IconProp = faComment;
	public faReceipt: IconProp = faReceipt;
	public faMoneyCheck: IconProp = faMoneyCheck;
	public faCaretDown: IconProp = faCaretDown;
	public faCaretRight: IconProp = faCaretRight;
	public faBars: IconProp = faBars;
	public faLock: IconProp = faLock;
	public faTimes: IconProp = faTimes;
	public faLongArrowAltRight: IconProp = faLongArrowAltRight;
	public applicationURL: string = 'https://app.interfaceagency.com/login';
	public panel: boolean = false;
	public state: State = {
		industry: false,
		category: false,
		product: false,
		section: false,
	};

	private panelStateSubscription: Subscription;

	constructor(private router: Router, private store: Store) {}

	ngOnInit() {
		this.panelStateSubscription = this.store.select(PANEL).subscribe((panel: boolean) => {
			this.panel = panel;
			// console.log('p:', this.panel);
		});
	}

	public openPanel(): void {
		this.store.dispatch(fromPanelActions.OPEN());
	}
}

import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { KeyValue } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faCookieBite, faLongArrowAltLeft } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck, faCog, faCommentAlt, faCommentAltCheck, faEnvelope, faVolumeMute, faPaperPlane, faCloudUploadAlt, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faCaretRight, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';

interface State {
	pitch: boolean;
	cookies: boolean;
	chat: boolean;
	exit: boolean;
	loading: {
		global: boolean;
		panel: boolean;
	};
	refresh: boolean;
}

@Component({
	selector: 'website-root',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class RootComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('navigation', { static: false }) public navigation: MatSidenav;
	public faCaretDown: IconProp = faCaretDown;
	public faCheck: IconProp = faCheck;
	public faPaperPlane: IconProp = faPaperPlane;
	public faVolumeMute: IconProp = faVolumeMute;
	public faCloudUploadAlt: IconProp = faCloudUploadAlt;
	public faLongArrowAltLeft: IconProp = faLongArrowAltLeft;
	public faTimes: IconProp = faTimes;
	public faEnvelope: IconProp = faEnvelope;
	public faCog: IconProp = faCog;
	public faCommentAltCheck: IconProp = faCommentAltCheck;
	public faCommentAlt: IconProp = faCommentAlt;
	public faCaretRight: IconProp = faCaretRight;
	public faCookieBite: IconProp = faCookieBite;
	public cookiesURL: string = 'https://www.interfaceagency.com/company/cookies';
	public state: State = {
		pitch: false,
		cookies: false,
		chat: false,
		exit: false,
		loading: {
			global: false,
			panel: true,
		},
		refresh: false,
	};
	private subscription: Observable<NavigationEnd>;
	private onDestroy$ = new Subject();
	private panelStateSubscription: Subscription;
	private globalLoadingStateSubscription: Subscription;
	private panelLoadingStateSubscription: Subscription;
	private body = document.getElementById('body');

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store) {}

	@HostListener('document:keydown.esc') escape() {
		return this.closeNavigationPanel();
	}

	ngOnInit(): void {
		// this.store.dispatch(fromPanelActions.OPEN({ option: '' }));

		// this.globalLoadingStateSubscription = this.store.select(fromLoaderSelectors.LOADER_GLOBAL).subscribe((state) => {
		// 	// console.log('global loading state:', state);
		// 	setTimeout(() => {
		// 		this.state.loading.global = state;
		// 	});
		// });

		// this.panelLoadingStateSubscription = this.store.select(fromLoaderSelectors.LOADER_PANEL).subscribe((state) => (this.state.loading.panel = state));
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {
		this.panelStateSubscription.unsubscribe();
		// this.globalLoadingStateSubscription.unsubscribe();
		// this.panelLoadingStateSubscription.unsubscribe();
	}

	public sortOrder(a: KeyValue<string, any>, b: KeyValue<string, any>): number {
		return a.value.order - b.value.order;
	}

	public closeNavigationPanel(): void {
	}

	public triggerRefresh(): void {
		this.state.refresh = false;
	}

}

import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faCookieBite, faLongArrowAltLeft } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck, faCog, faCommentAlt, faCommentAltCheck, faEnvelope, faVolumeMute, faPaperPlane, faCloudUploadAlt, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faCaretRight, faCaretDown, faCaretLeft } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';
import { PANEL } from '_application/common/store/panel/selectors';
import * as fromPanelActions from '_application/common/store/panel/actions';

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
	public faCaretLeft: IconProp = faCaretLeft;
	public faCommentAltCheck: IconProp = faCommentAltCheck;
	public faCommentAlt: IconProp = faCommentAlt;
	public faCaretRight: IconProp = faCaretRight;
	public faCookieBite: IconProp = faCookieBite;
	public panel: boolean = false;
	public cookiesURL: string = 'https://www.focusfreedom.com/company/cookies';
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
	private panelStateSubscription: Subscription;
	private body = document.getElementById('body');

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store) {}

	@HostListener('document:keydown.esc') escape() {
		return this.closeNavigationPanel();
	}

	ngOnInit(): void {
		this.panelStateSubscription = this.store.select(PANEL).subscribe((panel: boolean) => {
			this.panel = panel;
			console.log('panel:', this.panel);
		});
	}

	ngAfterViewInit(): void {}

	ngOnDestroy(): void {
		this.panelStateSubscription.unsubscribe();
	}

	public closeNavigationPanel(): void {
		this.store.dispatch(fromPanelActions.CLOSE());
	}

	public closePitchPanel(): void {
		this.state.pitch = false;
	}

	public closeCookiePanel(): void {
		this.state.cookies = false;
	}

	public closeExitPanel(): void {
		this.state.exit = false;
	}

	public triggerRefresh(): void {
		this.state.refresh = false;
	}
}

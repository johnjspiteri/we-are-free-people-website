import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEnvelopeSquare } from '@fortawesome/pro-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/pro-duotone-svg-icons';
import { faCaretDown, faCommentAlt, faLevelUpAlt, faTags } from '@fortawesome/pro-solid-svg-icons';
import { faCheck, faTimes, faHeadSideBrain, faExclamationTriangle, faVoteYea, faVoteNay, faGlobeEurope, faEuroSign, faYenSign } from '@fortawesome/pro-regular-svg-icons';
import { faLinkedin, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import * as fromEventSelectors from '../store/selectors';
import type { Event } from './../interface';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'website-event-find',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class EventFindComponent implements OnInit {
	public event: Event;
	public faGlobeAmericas: IconProp = faGlobeAmericas;
	public faYenSign: IconProp = faYenSign;
	public faEuroSign: IconProp = faEuroSign;
	public faTimes: IconProp = faTimes;
	public faCheck: IconProp = faCheck;
	public faGlobeEurope: IconProp = faGlobeEurope;
	public faHeadSideBrain: IconProp = faHeadSideBrain;
	public faTwitterSquare: IconProp = faTwitterSquare;
	public faLinkedin: IconProp = faLinkedin;
	public faFacebookSquare: IconProp = faFacebookSquare;
	public faEnvelopeSquare: IconProp = faEnvelopeSquare;
	public faExclamationTriangle: IconProp = faExclamationTriangle;
	public faVoteYea: IconProp = faVoteYea;
	public faVoteNay: IconProp = faVoteNay;
	public faCaretDown: IconProp = faCaretDown;
	public faCommentAlt: IconProp = faCommentAlt;
	public faLevelUpAlt: IconProp = faLevelUpAlt;
	public faTags: IconProp = faTags;
	private subscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

	public state = {
		region: false,
	};

	public openRegionPanel(): void {
		this.state.region = true;
	}

	ngOnInit() {
		this.subscription = this.store.select(fromEventSelectors.EVENT).subscribe((event: Event) => {
			this.event = event;
			// console.log('answer:', this.answer);
			console.log('event:', this.event);
		});
	}
}

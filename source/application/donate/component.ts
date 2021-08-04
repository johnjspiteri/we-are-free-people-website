import { Component, ViewEncapsulation } from '@angular/core';
import { faCheck, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'legal-donate',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class donateComponent {
	public faCheck: IconProp = faCheck;
	public faCaretDown: IconProp = faCaretDown;

	constructor(private activatedRoute: ActivatedRoute, public router: Router) {}

	activateTimelineNavigation(target: string) {
		switch (target) {
			case 'amount':
				// this.router.navigate(['./account'], { relativeTo: this.activatedRoute }).then(function () {});
				break;
			case 'information':
				// if (this.subscriptionState.getProductState()) this.router.navigate(['./product'], { relativeTo: this.activatedRoute }).then(function () {});
				break;
			case 'payment':
				// if (this.subscriptionState.getPaymentState()) this.router.navigate(['./payment'], { relativeTo: this.activatedRoute }).then(function () {});
				break;
			case 'complete':
				// if (this.subscriptionState.getCompleteState()) this.router.navigate(['./complete'], { relativeTo: this.activatedRoute }).then(function () {});
				break;
		}
	}
}

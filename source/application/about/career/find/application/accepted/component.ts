import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

@Component({
	selector: 'website-about-career-application-accepted',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerApplicationAcceptedComponent implements OnInit {
	public faTimes: IconProp = faTimes;
	public confirmation: string;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {
		this.confirmation = this.router.getCurrentNavigation().extras.state.confirmation;
	}

	ngOnInit() {}

	closeModal() {
		this.router.navigate(['./../../'], { relativeTo: this.activatedRoute }).then();
	}
}

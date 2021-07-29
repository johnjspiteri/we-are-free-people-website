import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerApplicationAcceptedComponent implements OnInit {
	public confirmation: string;

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {
		this.confirmation = this.router.getCurrentNavigation().extras.state.confirmation;
	}

	ngOnInit() {}

	closeModal() {
		this.router.navigate(['./../../'], { relativeTo: this.activatedRoute }).then();
	}
}

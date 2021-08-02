import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import * as fromCareerSelectors from '../store/selectors';
import type { Career } from '@interface-agency/website-career-interface';

@Component({
	selector: 'website-about-career-find',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerFindComponent implements OnInit {
	public career: Career;
	private subscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

	ngOnInit() {
		this.subscription = this.store.select(fromCareerSelectors.CAREER).subscribe((career: Career) => {
			this.career = career;
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}

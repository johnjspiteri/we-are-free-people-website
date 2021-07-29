import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Career } from '../interface';
import { faPhone, faAt, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'legal-career-find',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerFindComponent implements OnInit {
	faPhone = faPhone;
	faAt = faAt;
	faLinkedin = faLinkedin;
	faTimes = faTimes;
	public career: Career[];

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.career = this.activatedRoute.snapshot.data.career;
	}
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCaretDown, faCaretUp, faCheck } from '@fortawesome/pro-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'website-home',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
	public faCaretDown = faCaretDown;
	public faCaretUp = faCaretUp;
	public faCheck = faCheck;
	public homeIntroductionForm: FormGroup;

	ngOnInit() {}

	constructor(public formBuilder: FormBuilder) {
		this.homeIntroductionForm = this.formBuilder.group({
			section: ['Websites', { validators: [Validators.required] }],
			status: ['I am just getting started', { validators: [Validators.required] }],
		});
	}

	submit() {}
}

import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretDown, faCheck } from '@fortawesome/pro-solid-svg-icons';
import { IntakeStateService } from '../state';

@Component({
	selector: 'legal-intake-overview',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class IntakeOverview {
	public intakeOverviewForm: FormGroup;
	public methods = ['Email', 'Phone', 'Text'];
	public submitted: boolean = false;
	faCaretDown = faCaretDown;
	faCheck = faCheck;
	private payload: object;

	constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private intakeStateService: IntakeStateService) {}

	ngOnInit() {
		this.intakeOverviewForm = this.formBuilder.group({
			firstName: ['', { validators: [Validators.required] }],
			lastName: ['', { validators: [Validators.required] }],
			email: [null, { validators: [Validators.required, Validators.email] }],
			areaCode: ['', { validators: [Validators.required] }],
			number: ['', { validators: [Validators.required] }],
			contactMethod: ['', { validators: [Validators.required] }],
		});
	}

	submit() {
		this.submitted = true;
		if (this.intakeOverviewForm.status === 'VALID') {
			// this.payload = {
			// 	contact_method: this.intakeOverviewForm.value.contactMethod,
			// 	created: new Date(),
			// 	description: this.intakeOverviewForm.value.description,
			// 	email: this.intakeOverviewForm.value.email,
			// 	name: {
			// 		first: this.intakeOverviewForm.value.firstName,
			// 		last: this.intakeOverviewForm.value.lastName
			// 	},
			// 	phone: {
			// 		area_code: this.intakeOverviewForm.value.areaCode,
			// 		number: this.intakeOverviewForm.value.number,
			// 	}
			// };
			// this.intakeStateService.set(this.payload, 'detail');
			// this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
		} else {
			this.submitted = false;
		}
	}
}

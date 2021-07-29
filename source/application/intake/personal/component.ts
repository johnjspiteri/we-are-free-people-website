import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretDown, faCheck } from '@fortawesome/pro-solid-svg-icons';
import { IntakeStateService } from '../state';

@Component({
	selector: 'legal-intake-personal',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class IntakePersonal implements OnInit {
	public intakePersonalForm: FormGroup;
	public methods = ['Email', 'Phone', 'Text'];
	public submitted: boolean = false;
	faCaretDown = faCaretDown;
	faCheck = faCheck;
	private payload: object;

	constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private intakeStateService: IntakeStateService) {}

	ngOnInit() {
		this.intakePersonalForm = this.formBuilder.group({
			firstName: ['', { validators: [Validators.required] }],
			lastName: ['', { validators: [Validators.required] }],
			email: [null, { validators: [Validators.required, Validators.email] }],
			areaCode: ['', { validators: [Validators.required] }],
			number: ['', { validators: [Validators.required] }],
			contactMethod: ['', { validators: [Validators.required] }],
		});
	}

	getContactMethod() {
		return this.intakePersonalForm.get('contactMethod').value.toUpperCase();
	}

	submit() {
		this.submitted = true;
		if (this.intakePersonalForm.status === 'VALID') {
			// this.payload = {
			// 	contact_method: this.intakePersonalForm.value.contactMethod,
			// 	created: new Date(),
			// 	description: this.intakePersonalForm.value.description,
			// 	email: this.intakePersonalForm.value.email,
			// 	name: {
			// 		first: this.intakePersonalForm.value.firstName,
			// 		last: this.intakePersonalForm.value.lastName
			// 	},
			// 	phone: {
			// 		area_code: this.intakePersonalForm.value.areaCode,
			// 		number: this.intakePersonalForm.value.number,
			// 	}
			// };
			// this.intakeStateService.set(this.payload, 'personal');
			// this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
		} else {
			this.submitted = false;
		}
	}
}

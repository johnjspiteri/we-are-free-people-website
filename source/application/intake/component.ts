import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IntakeStateService } from './state';

@Component({
	selector: 'legal-intake',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class Intake implements OnInit {
	// public intakePersonalForm: FormGroup;
	// public methods = ['Email', 'Phone', 'Text'];
	// public submitted: boolean = false;
	// private payload: object;
	// faCaretDown = faCaretDown;
	// faCheck = faCheck;

	constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private intakeStateService: IntakeStateService) {}

	ngOnInit() {
		// this.intakePersonalForm = this.formBuilder.group({
		//     firstName: ['', {validators: [Validators.required]}],
		//     lastName: ['', {validators: [Validators.required]}],
		//     email: [null, {validators: [Validators.required, Validators.email]}],
		// 	areaCode: ['', {validators: [Validators.required]}],
		// 	number: ['', {validators: [Validators.required]}],
		// 	contactMethod: ['', {validators: [Validators.required]}]
		// });
	}

	// get getContactMethod() {
	// 	return this.intakePersonalForm.get('contactMethod').value.toUpperCase();
	// }
	//
	// submit() {
	// 	this.submitted = true;
	// 	if (this.intakePersonalForm.status === 'VALID') {
	// 		// this.payload = {
	// 		// 	contact_method: this.intakePersonalForm.value.contactMethod,
	// 		// 	created: new Date(),
	// 		// 	description: this.intakePersonalForm.value.description,
	// 		// 	email: this.intakePersonalForm.value.email,
	// 		// 	name: {
	// 		// 		first: this.intakePersonalForm.value.firstName,
	// 		// 		last: this.intakePersonalForm.value.lastName
	// 		// 	},
	// 		// 	phone: {
	// 		// 		area_code: this.intakePersonalForm.value.areaCode,
	// 		// 		number: this.intakePersonalForm.value.number,
	// 		// 	}
	// 		// };
	// 		// this.intakeStateService.set(this.payload, 'personal');
	// 		// this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
	// 	} else {
	// 		this.submitted = false;
	// 	}
	// }
}

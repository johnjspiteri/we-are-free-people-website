import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '_application/donate/interface';
// import { ConsultationState } from '_application/donate/state';

@Component({
	selector: 'volunteer-join',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class VolunteerJoinComponent {
	public form: FormGroup;
	public submitted: boolean = false;
	public options: string[] = ['Email', 'Phone', 'Text'];
	private payload: Consultation;

	constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
		this.form = this.formBuilder.group({
			name: this.formBuilder.group({
				first: ['', { validators: [Validators.required] }],
				last: ['', { validators: [Validators.required] }],
			}),
			email: ['', { validators: [Validators.required, Validators.email] }],
			address: ['', { validators: [Validators.required] }],
			city: ['', { validators: [Validators.required] }],
			province: ['', { validators: [Validators.required] }],
			country: ['', { validators: [Validators.required] }],
			number: ['', { validators: [Validators.required] }],
		});
	}

	getMethod() {
		return this.form.get('contactMethod').value;
	}

	submit() {
		this.submitted = true;
		if (this.form.status === 'VALID') {
			this.payload = {
				contact_method: this.form.value.contactMethod,
				created: new Date(),
				description: this.form.value.description,
				email: this.form.value.email,
				name: {
					first: this.form.value.firstName,
					last: this.form.value.lastName,
				},
				phone: {
					area_code: this.form.value.areaCode,
					number: this.form.value.number,
				},
			};
		} else {
			this.submitted = false;
		}
	}
}

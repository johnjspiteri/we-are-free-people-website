import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { Consultation } from '../interface';
// import { ConsultationState } from '../state';
import { ConsultationSubmitService } from './service';

interface options {
	[key: string]: boolean;
}

@Component({
	selector: 'legal-donate-one-time-amount',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class DonateAmountComponent {
	public form: FormGroup;
	public submitted: boolean = false;
	public options: string[] = ['Email', 'Phone', 'Text'];
	// private payload: Consultation;
	public amounts: options = {
		five: false,
		ten: false,
		fifteen: false,
		twenty: false,
		twenty_five: false,
		fifty: false,
		hundred: false,
	};

	constructor(private activatedRoute: ActivatedRoute, private consultationSubmitService: ConsultationSubmitService, private formBuilder: FormBuilder, private router: Router) {
		this.form = this.formBuilder.group({
			other_amount: ['', { validators: [Validators.required] }],
		});
	}

	getMethod() {
		return this.form.get('contactMethod').value;
	}

	setAmount(amount: string) {
		for (let key in this.amounts) {
			if (key === amount) {
				this.amounts[key] = true;
			} else {
				this.amounts[key] = false;
			}
		}
		this.form.get('other_amount').setValue(null);
	}

	clearAmounts() {
		for (let key in this.amounts) {
			this.amounts[key] = false;
		}
	}

	submit() {
		this.submitted = true;
		if (this.form.status === 'VALID') {
			// this.payload = {
			// 	contact_method: this.form.value.contactMethod,
			// 	created: new Date(),
			// 	description: this.form.value.description,
			// 	email: this.form.value.email,
			// 	name: {
			// 		first: this.form.value.firstName,
			// 		last: this.form.value.lastName,
			// 	},
			// 	phone: {
			// 		area_code: this.form.value.areaCode,
			// 		number: this.form.value.number,
			// 	},
			// };
			// this.consultationState.set(this.payload);
			// this.consultationSubmitService
			// 	.post(this.payload)
			// 	.then(() => {
			// 		this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
			// 	})
			// 	.catch((error) => {
			// 		this.submitted = false;
			// 	});
		} else {
			this.submitted = false;
		}
	}
}

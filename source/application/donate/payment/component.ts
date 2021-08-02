import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../interface';
import { ConsultationState } from '../state';
import { ConsultationSubmitService } from './service';
import { faCcVisa, faPaypal, faCcMastercard, faCcAmazonPay } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { SharedModule } from '_application/shared/module';

@Component({
	selector: 'legal-donate-payment',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class DonatePaymentComponent {
	public consultationForm: FormGroup;
	public submitted: boolean = false;
	public options: string[] = ['Email', 'Phone', 'Text'];
	private payload: Consultation;
	public faCcVisa: IconProp = faCcVisa;
	public faPaypal: IconProp = faPaypal;
	public faCcMastercard: IconProp = faCcMastercard;
	public faCcAmazonPay: IconProp = faCcAmazonPay;
	public payment_card: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private consultationSubmitService: ConsultationSubmitService, private consultationState: ConsultationState, private formBuilder: FormBuilder, private router: Router) {
		this.consultationForm = this.formBuilder.group({
			firstName: ['', { validators: [Validators.required] }],
			lastName: ['', { validators: [Validators.required] }],
			email: [null, { validators: [Validators.required, Validators.email] }],
			areaCode: ['', { validators: [Validators.required] }],
			number: ['', { validators: [Validators.required] }],
			contactMethod: ['', { validators: [Validators.required] }],
			description: ['', { validators: [Validators.required] }],
		});
	}

	getMethod() {
		return this.consultationForm.get('contactMethod').value;
	}

	changeCreditCardState() {
		this.payment_card = !this.payment_card;
	}

	submit() {
		this.submitted = true;
		if (this.consultationForm.status === 'VALID') {
			this.payload = {
				contact_method: this.consultationForm.value.contactMethod,
				created: new Date(),
				description: this.consultationForm.value.description,
				email: this.consultationForm.value.email,
				name: {
					first: this.consultationForm.value.firstName,
					last: this.consultationForm.value.lastName,
				},
				phone: {
					area_code: this.consultationForm.value.areaCode,
					number: this.consultationForm.value.number,
				},
			};
			this.consultationState.set(this.payload);
			this.consultationSubmitService
				.post(this.payload)
				.then(() => {
					this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
				})
				.catch((error) => {
					this.submitted = false;
				});
		} else {
			this.submitted = false;
		}
	}
}

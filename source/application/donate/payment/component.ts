import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from '../interface';
import { ConsultationState } from '../state';
import { ConsultationSubmitService } from './service';
import { faApplePay, faGooglePay, faCcVisa, faPaypal, faCcMastercard, faCcAmazonPay } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
// import { SharedModule } from '_application/shared/module';

@Component({
	selector: 'legal-donate-payment',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class DonatePaymentComponent {
	public form: FormGroup;
	public submitted: boolean = false;
	public options: string[] = ['Email', 'Phone', 'Text'];
	private payload: Consultation;
	public faApplePay: IconProp = faApplePay;
	public faGooglePay: IconProp = faGooglePay;
	public faCcVisa: IconProp = faCcVisa;
	public faPaypal: IconProp = faPaypal;
	public faCcMastercard: IconProp = faCcMastercard;
	public faCcAmazonPay: IconProp = faCcAmazonPay;
	public payment_card: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private consultationSubmitService: ConsultationSubmitService, private consultationState: ConsultationState, private formBuilder: FormBuilder, private router: Router) {
		this.form = this.formBuilder.group({
			number: ['', { validators: [Validators.required, Validators.minLength(19), Validators.maxLength(19)] }],
			name: ['', { validators: [Validators.required, Validators.minLength(19), Validators.maxLength(19)] }],
			exp_month: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]*$')] }],
			exp_year: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]*$')] }],
			cvc: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)] }],
		});
	}

	getMethod() {
		return this.form.get('contactMethod').value;
	}

	changeCreditCardState() {
		this.payment_card = !this.payment_card;
	}

	submit() {}
}

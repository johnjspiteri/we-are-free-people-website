import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'legal-contact',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
	public form: FormGroup;
	public faCheck: IconProp = faCheck;
	public faCaretDown: IconProp = faCaretDown;

	constructor( private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			other_amount: ['$1M', { validators: [Validators.required] }],
		});
	}

	clearAmounts() {}
	submit() {}
}

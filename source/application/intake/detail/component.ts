import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretDown, faCheck } from '@fortawesome/pro-solid-svg-icons';
import { IntakeState } from '../interface';
import { IntakeStateService } from '../state';

@Component({
	selector: 'legal-intake-detail',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class IntakeDetail implements OnInit {
	public state: IntakeState;
	public intakeDetailForm: FormGroup;
	public submitted: boolean = false;
	public existing_counsel: boolean = false;
	faCaretDown = faCaretDown;
	faCheck = faCheck;
	// public existing_proceeding: boolean = false;
	private payload: object;

	constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private intakeStateService: IntakeStateService) {}

	ngOnInit(): void {
		this.state = this.intakeStateService.get();
		this.intakeDetailForm = this.formBuilder.group({
			existing_counsel: ['', { validators: [Validators.required] }],
			proceedingState: ['', { validators: [Validators.required] }],
			caseNumber: ['', { validators: [Validators.required] }],
			otherParty: [null, { validators: [Validators.required, Validators.email] }],
			legalCounsel: ['', { validators: [Validators.required] }],
			counselName: ['', { validators: [Validators.required] }],
			description: ['', { validators: [Validators.required] }],
		});
	}

	// choose(event) {
	// }

	submit(): void {
		this.submitted = true;
		this.router
			.navigate(['personal'], { relativeTo: this.activatedRoute })
			.then(function () {
				console.log();
			})
			.catch(function () {
				console.log();
			});
		if (this.intakeDetailForm.status === 'VALID') {
			// this.payload = {
			// 	contact_method: this.intakeDetailForm.value.contactMethod,
			// 	created: new Date(),
			// 	description: this.intakeDetailForm.value.description,
			// 	email: this.intakeDetailForm.value.email,
			// 	name: {
			// 		first: this.intakeDetailForm.value.firstName,
			// 		last: this.intakeDetailForm.value.lastName
			// 	},
			// 	phone: {
			// 		area_code: this.intakeDetailForm.value.areaCode,
			// 		number: this.intakeDetailForm.value.number,
			// 	}
			// };
			// this.intakeStateService.set(this.payload, 'detail');
			// this.router.navigate(['consultation'], { relativeTo: this.activatedRoute });
		} else {
			this.submitted = false;
		}
	}
}

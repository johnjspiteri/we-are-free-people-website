import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CareerApplicationService } from './service';
import type { Career } from '@interface-agency/website-career-interface';
import { CareerApplicationForm } from '@interface-agency/website-career-application-interface/interface/form';

@Component({
	selector: 'website-about-career-find-application',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerApplicationComponent implements OnInit {
	careerApplicationForm: FormGroup;
	public career: Career;
	public submitted: boolean = false;
	public faTimes: IconProp = faTimes;
	public faCaretDown: IconProp = faCaretDown;
	private form: CareerApplicationForm;
	country_state: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private router: Router, private careerApplicationService: CareerApplicationService) {
		this.careerApplicationForm = this.formBuilder.group({
			name: this.formBuilder.group({
				first: ['John', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)]}],
				last: ['Spiteri', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)]}],
			}),
			email: ['john.spiteri@me.com', { validators: [Validators.required, Validators.email] }],
			resume: ['', { validators: [Validators.required] }],
			supporting_document: [''],
			based: this.formBuilder.group({
				country: ['Canada', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)] }],
				province: ['Province', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)] }],
				state: ['State', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)] }],
				city: ['City', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)] }],
			}),
			current_role: ['Web Developer', { validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(2), Validators.maxLength(90)] }],
			cover: ['This is what I have to say about myself!', { validators: [Validators.required] }],
		});
	}

	ngOnInit() {
		this.career = this.activatedRoute.snapshot.parent.parent.data.career;
		console.log('ar:', this.career);
	}

	closeModal() {
		this.router.navigate(['./../'], { relativeTo: this.activatedRoute }).then(function () {});
	}

	submit() {
		this.submitted = true;

		if (this.careerApplicationForm.status === 'VALID') {
			this.form = this.careerApplicationForm.value;
			this.form.career_id = this.career._id;

			this.careerApplicationService.post(this.form).then((confirmation) => {
				this.router.navigate(['./accepted'], {
					relativeTo: this.activatedRoute,
					state: {
						confirmation: confirmation
					},
				}).then();
			});
		} else {
			this.submitted = false;
		}
	}
}

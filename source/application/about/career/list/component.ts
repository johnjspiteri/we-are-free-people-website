import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';
import * as fromCareerSelectors from '../store/selectors';
import * as fromCareerActions from '../store/actions';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { CareerState, CareerStore } from '../store/interface';

@Component({
	selector: 'website-about-career-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerListComponent implements OnInit, OnDestroy {
	public state: CareerState;
	public faCaretDown: IconProp = faCaretDown;
	public faCaretUp: IconProp = faCaretUp;
	public faTimes: IconProp = faTimes;
	public form: FormGroup;
	public googleAPILoaded: Observable<boolean>;
	private subscription: Subscription;
	private formLoaded: boolean = false;

	constructor(public formBuilder: FormBuilder, private httpClient: HttpClient, private store: Store<CareerStore>) {
		this.form = this.formBuilder.group({
			department: [''],
			team: [''],
			category: [''],
			experience: [''],
			sort: [''],
			type: [''],
			office: [''],
		});

		this.googleAPILoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAFg43fijTMovw21vLZaEEqcz5DYgTbc0o', 'callback').pipe(
			map(() => true),
			catchError(() => of(false))
		);
	}

	ngOnInit(): void {
		this.subscription = this.store.select(fromCareerSelectors.STATE).subscribe((state: CareerState) => {
			this.state = state;
			if (!this.formLoaded) this.initialFormLoad();
		});
		this.store.dispatch(fromCareerActions.INITIALIZE());
	}

	initialFormLoad() {
		// setTimeout(() => {
		this.form.get('department').setValue(this.state.department.selected);
		this.form.get('team').setValue(this.state.team.selected);
		this.form.get('category').setValue(this.state.category.selected);
		this.form.get('experience').setValue(this.state.experience.selected);
		this.form.get('sort').setValue(this.state.sort.selected);
		this.form.get('type').setValue(this.state.type.selected);
		this.form.get('office').setValue(this.state.office.selected);
		// this.setDisabledState();
		// });
	}

	// setDisabledState() {
	// 	if (!this.state.area.selected) {
	// 		this.form.get('section').disabled;
	// 		this.form.get('category').disabled;
	// 		this.form.get('topic').disabled;
	// 		return;
	// 	}
	// 	if (!this.state.section.selected) {
	// 		this.form.get('category').disabled;
	// 		this.form.get('topic').disabled;
	// 		return;
	// 	}
	// 	if (!this.state.category.selected) {
	// 		this.form.get('topic').disabled;
	// 		return;
	// 	}
	// }

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	updateTags(event: any) {
		console.log('event:', event);
	}

	updateDepartment(): void {
		this.store.dispatch(fromCareerActions.DEPARTMENT_UPDATE({ department: this.form.get('department').value }));
	}

	updateTeam() {
		this.store.dispatch(fromCareerActions.TEAM_UPDATE({ team: this.form.get('team').value }));
	}

	updateCategory() {
		this.store.dispatch(fromCareerActions.CATEGORY_UPDATE({ category: this.form.get('category').value }));
	}

	updateExperience() {
		this.store.dispatch(fromCareerActions.EXPERIENCE_UPDATE({ experience: this.form.get('experience').value }));
	}

	updateSort() {
		this.store.dispatch(fromCareerActions.SORT_UPDATE({ sort: this.form.get('sort').value }));
	}

	updateType() {
		this.store.dispatch(fromCareerActions.TYPE_UPDATE({ kind: this.form.get('type').value }));
	}

	updateOffice() {
		this.store.dispatch(fromCareerActions.OFFICE_UPDATE({ office: this.form.get('office').value }));
	}

	toggleSearchState() {
		this.store.dispatch(fromCareerActions.STATE_TOGGLE({ value: !this.state.state }));
	}

	resetSearchForm() {
		this.store.dispatch(fromCareerActions.RESET());
	}
}

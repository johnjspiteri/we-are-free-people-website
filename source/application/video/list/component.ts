import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromVideoSelectors from './../store/selectors';
import * as fromVideoActions from './../store/actions';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { VideoState } from './../store/interface';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'video-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class VideoListComponent implements OnInit {
	public state: VideoState;
	public faCaretDown: IconProp = faCaretDown;
	public faCaretUp: IconProp = faCaretUp;
	public faTimes: IconProp = faTimes;
	public form: FormGroup;
	private subscription: Subscription;
	private formLoaded: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private store: Store<VideoState>, public formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			area: [''],
			section: [''],
			category: [''],
			topic: [''],
			sort: [''],
			type: [''],
			tags: [''],
		});
	}

	ngOnInit() {
		this.subscription = this.store.select(fromVideoSelectors.STATE).subscribe((state: VideoState) => {
			this.state = state;
			console.log('video list:', this.state);
			if (!this.formLoaded) this.initialFormLoad();
		});
		this.store.dispatch(fromVideoActions.INITIALIZE());
	}

	initialFormLoad() {
		// setTimeout(() => {
		this.form.get('area').setValue(this.state.area.selected);
		this.form.get('section').setValue(this.state.section.selected);
		this.form.get('category').setValue(this.state.category.selected);
		this.form.get('topic').setValue(this.state.topic.selected);
		this.form.get('sort').setValue(this.state.sort.selected);
		this.form.get('type').setValue(this.state.type.selected);
		// this.setDisabledState();
		// });
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	updateArea() {
		this.store.dispatch(fromVideoActions.AREA_UPDATE({ area: this.form.get('area').value }));
	}

	updateSection() {
		this.store.dispatch(fromVideoActions.SECTION_UPDATE({ section: this.form.get('section').value }));
	}

	updateCategory() {
		this.store.dispatch(fromVideoActions.CATEGORY_UPDATE({ category: this.form.get('category').value }));
	}

	updateTopic() {
		this.store.dispatch(fromVideoActions.TOPIC_UPDATE({ topic: this.form.get('topic').value }));
	}

	updateType() {
		this.store.dispatch(fromVideoActions.TYPE_UPDATE({ kind: this.form.get('type').value }));
	}

	updateTags(tags: string[]) {
		this.store.dispatch(fromVideoActions.TAG_UPDATE({ tag: tags }));
	}

	updateSort() {
		this.store.dispatch(fromVideoActions.SORT_UPDATE({ sort: this.form.get('sort').value }));
	}

	toggleSearchState() {
		this.store.dispatch(fromVideoActions.STATE_TOGGLE({ value: !this.state.state }));
	}

	setSort() {}

	setType() {}

	resetSearchForm() {
		this.store.dispatch(fromVideoActions.RESET());
	}
}

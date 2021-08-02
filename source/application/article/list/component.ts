import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store';
import * as fromArticleActions from '../store/actions';
import * as fromArticleSelectors from '../store/selectors';
import { faCaretDown, faCaretUp } from '@fortawesome/pro-solid-svg-icons';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import type { ArticleState } from '../store/interface';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'website-article-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ArticleListComponent implements OnInit {
	public state: ArticleState;
	public faCaretDown: IconProp = faCaretDown;
	public faCaretUp: IconProp = faCaretUp;
	public faTimes: IconProp = faTimes;
	public form: FormGroup;
	private subscription: Subscription;
	private formLoaded: boolean = false;

	constructor(private activatedRoute: ActivatedRoute, private store: Store<ArticleState>, public formBuilder: FormBuilder) {
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
		this.subscription = this.store.select(fromArticleSelectors.STATE).subscribe((state: ArticleState) => {
			this.state = state;
			if (!this.formLoaded) this.initialFormLoad();
		});
		this.store.dispatch(fromArticleActions.INITIALIZE());
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
		this.store.dispatch(fromArticleActions.AREA_UPDATE({ area: this.form.get('area').value }));
	}

	updateSection() {
		this.store.dispatch(fromArticleActions.SECTION_UPDATE({ section: this.form.get('section').value }));
	}

	updateCategory() {
		this.store.dispatch(fromArticleActions.CATEGORY_UPDATE({ category: this.form.get('category').value }));
	}

	updateTopic() {
		this.store.dispatch(fromArticleActions.TOPIC_UPDATE({ topic: this.form.get('topic').value }));
	}

	updateType() {
		this.store.dispatch(fromArticleActions.TYPE_UPDATE({ kind: this.form.get('type').value }));
	}

	updateTags(tags: string[]) {
		this.store.dispatch(fromArticleActions.TAG_UPDATE({ tag: tags }));
	}

	updateSort() {
		this.store.dispatch(fromArticleActions.SORT_UPDATE({ sort: this.form.get('sort').value }));
	}

	toggleSearchState() {
		this.store.dispatch(fromArticleActions.STATE_TOGGLE({ value: !this.state.state }));
	}

	setSort() {}

	setType() {}

	resetSearchForm() {
		this.store.dispatch(fromArticleActions.RESET());
	}
}

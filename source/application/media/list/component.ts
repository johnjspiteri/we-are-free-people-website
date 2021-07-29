import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Media } from '../interface';
import { ArticleSearch } from './search/interface';
import { MediaListState } from './search/state';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'legal-media-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class MediaListComponent implements OnInit {
	faTimes = faTimes;

	public availableCategories: string[] = [];
	public availableSubCategories: string[] = [];
	public cachedArticles: Media[] = [];
	public articles: Media[] = [];
	public search: ArticleSearch;

	searchForm: FormGroup;

	constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private MediaListState: MediaListState, private router: Router) {
		this.searchForm = this.formBuilder.group({
			category: [''],
			filter: [''],
			sub_category: [''],
		});
	}

	ngOnInit() {
		this.articles = this.activatedRoute.snapshot.data.articles;
		this.search = this.MediaListState.load(this.articles);
		this.searchForm.controls['category'].setValue(this.search.category);
		this.searchForm.controls['sub_category'].setValue(this.search.sub_category);
	}

	setCategory() {
		this.search = this.MediaListState.setCategory(this.searchForm.value.category, this.articles);
		this.searchForm.controls['sub_category'].setValue('');
	}

	setSubCategory() {
		this.MediaListState.setSubCategory(this.searchForm.value.sub_category);
	}

	viewArticle(article_clean: string) {
		this.router.navigate([article_clean], { relativeTo: this.activatedRoute.parent });
	}

	resetSearchForm() {
		this.searchForm.controls['category'].setValue('');
		this.searchForm.controls['filter'].setValue('');
		this.searchForm.controls['sub_category'].setValue('');
		this.MediaListState.reset();
	}
}

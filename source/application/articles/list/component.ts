import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from '../interface';
import { ArticleSearch } from './search/interface';
import { ArticleListState } from './search/state';
import { faCaretDown, faTimes } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'website-article-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ArticleListComponent implements OnInit {
	faTimes = faTimes;
	faCaretDown = faCaretDown;

	public availableCategories: string[] = [];
	public availableTopics: string[] = [];
	public cachedLegalArticles: Article[] = [];
	public articles: Article[] = [];
	public search: ArticleSearch;

	searchForm: FormGroup;

	constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private articleListState: ArticleListState, private router: Router) {
		this.searchForm = this.formBuilder.group({
			category: [''],
			sub_category: [''],
			filter: [''],
			topic: [''],
		});
	}

	ngOnInit() {
		this.articles = this.activatedRoute.snapshot.data.articles;
		this.search = this.articleListState.load(this.articles);
		this.searchForm.controls['category'].setValue(this.search.category);
		this.searchForm.controls['topic'].setValue(this.search.topic);
	}

	setCategory() {
		this.search = this.articleListState.setCategory(this.searchForm.value.category, this.articles);
		this.searchForm.controls['topic'].setValue('');
	}

	setSubCategory() {
		// this.search = this.articleListState.setCategory(this.searchForm.value.category, this.articles);
		// this.searchForm.controls['topic'].setValue('');
	}

	setTopic() {
		this.articleListState.setSubCategory(this.searchForm.value.topic);
	}

	viewLegalArticle(article_clean: string) {
		this.router.navigate([article_clean], { relativeTo: this.activatedRoute.parent });
	}

	resetSearchForm() {
		this.searchForm.controls['category'].setValue('');
		this.searchForm.controls['filter'].setValue('');
		this.searchForm.controls['topic'].setValue('');
		this.articleListState.reset();
	}
}

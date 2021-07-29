import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Career } from '../interface';
import { faSearch, faTimes, faCaretDown } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'legal-career-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerListComponent implements OnInit {
	faTimes = faTimes;
	faCaretDown = faCaretDown;
	faSearch = faSearch;

	public careers: Career[];
	// public search:ArticleSearch;
	searchForm: FormGroup;

	constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private router: Router) {}

	ngOnInit() {
		this.careers = this.activatedRoute.snapshot.data.careers;
		this.searchForm = this.formBuilder.group({
			category: [''],
			sub_category: [''],
			filter: [''],
			topic: [''],
		});
	}

	setCategory() {
		// this.search = this.ArticleListState.setCategory(this.searchForm.value.category, this.articles);
		// this.searchForm.controls['topic'].setValue('');
	}

	setSubCategory() {
		// this.search = this.ArticleListState.setCategory(this.searchForm.value.category, this.articles);
		// this.searchForm.controls['topic'].setValue('');
	}

	setTopic() {
		// this.ArticleListState.setSubCategory(this.searchForm.value.topic);
	}

	resetSearchForm() {}

	selectLegalCareer(department: string, role: string) {
		this.router.navigate([department, role], { relativeTo: this.activatedRoute });
	}
}

import {Injectable} from '@angular/core';
import {Media} from '../../interface'
import {ArticleSearch} from './interface'

@Injectable()

export class MediaListState {

	private state: ArticleSearch = {
		category: '',
		categories: [],
		sub_category: '',
		sub_categories: []
	};

	constructor() {}

	buildCategoriesList(articles: Media[]) {
		const categories: string[] = [];
		for (let i = 0; i < articles.length; i++) {
			categories.push(articles[i].category);
		}
		this.state.categories = categories.filter((item, index) => {
			if (categories.indexOf(item) == index) return item;
		});
		if (this.state.category !== '') this.buildSubCategoriesList(articles);
	}

	buildSubCategoriesList(articles: Media[]) {
		const sub_categories: string[] = [];
		for (let i = 0; i < articles.length; i++) {
			if (articles[i].category === this.state.category) {
				sub_categories.push(articles[i].medium);
			}
		}
		this.state.sub_categories = sub_categories.filter((item, index) => {
			if (sub_categories.indexOf(item) == index) return item;
		});
	}

	load(articles: Media[]) {
		if (this.state.category === '') this.state.category = localStorage.getItem('interface_design_category') || '';
		if (this.state.sub_category === '') this.state.sub_category = localStorage.getItem('interface_design_sub_category') || '';
		this.buildCategoriesList(articles);
		return this.state;
	}

	setCategory(value: string, articles: Media[]): ArticleSearch {
		this.state.category = value;
		localStorage.setItem('interface_design_category', value);
		this.buildCategoriesList(articles);
		return this.state;
	}

	setSubCategory(value: string): void {
		this.state.sub_category = value;
		localStorage.setItem('interface_design_sub_category', this.state.sub_category)
	}

	reset(): void {
		this.state.category = '';
		this.state.sub_category = '';
		localStorage.removeItem('interface_design_category');
		localStorage.removeItem('interface_design_sub_category');
	}
}

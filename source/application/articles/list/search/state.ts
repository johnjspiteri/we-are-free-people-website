import {Injectable} from '@angular/core';
import {Article} from '../../interface'
import {ArticleSearch} from './interface'

@Injectable()

export class ArticleListState {

	private state: ArticleSearch = {
		category: '',
		categories: [],
		sub_category: '',
		sub_categories: [],
		topic: '',
		topics: []
	};

	constructor() {
	}

	buildCategoriesList(articles: Article[]) {
		let categories: string[] = [];
		for (let i = 0; i < articles.length; i++) {
			categories.push(articles[i].category);
		}
		this.state.categories = categories.filter((item, index) => {
			if (categories.indexOf(item) == index) return item;
		});
		if (this.state.category !== '') this.buildSubCategoriesList(articles);
	}

	buildSubCategoriesList(articles: Article[]) {
		let topics: string[] = [];
		for (let i = 0; i < articles.length; i++) {
			if (articles[i].category === this.state.category) {
				topics.push(articles[i].medium);
			}
		}
		this.state.topics = topics.filter((item, index) => {
			if (topics.indexOf(item) == index) return item;
		});
	}

	load(articles: Article[]) {
		if (this.state.category === '') this.state.category = localStorage.getItem('interface_design_category') || '';
		if (this.state.topic === '') this.state.topic = localStorage.getItem('interface_design_sub_category') || '';
		this.buildCategoriesList(articles);
		return this.state;
	}

	setCategory(value: string, articles: Article[]): ArticleSearch {
		this.state.category = value;
		localStorage.setItem('interface_design_category', value);
		this.buildCategoriesList(articles);
		return this.state;
	}

	setSubCategory(value: string): void {
		this.state.topic = value;
		localStorage.setItem('interface_design_sub_category', this.state.topic)
	}

	reset(): void {
		this.state.category = '';
		this.state.topic = '';
		localStorage.removeItem('interface_design_category');
		localStorage.removeItem('interface_design_sub_category');
	}
}

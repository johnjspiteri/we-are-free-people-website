import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
// import { Article } from '../interface';
import {ArticleListService} from './service';

@Injectable({
	providedIn: 'root'
})

// export class ArticleListResolve implements Resolve<Article[]> {
export class ArticleListResolve implements Resolve<any[]> {

	constructor(private ArticleListService: ArticleListService) {
	}

	resolve() {
		return [{
			category: 'Martime Law',
			clean: 'test-article',
			date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
			creator: {
				// image: Image,
				name: 'John Spiter',
				title: 'Senior Lawyer'
			},
			description: {
				small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				summary: '',
			},
			title: 'This Is A Test LegalArticle'
		}, {
			category: 'Martime Law',
			clean: 'test-article',
			date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
			creator: {
				// image: Image,
				name: 'John Spiter',
				title: 'Senior Lawyer'
			},
			description: {
				small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				summary: '',
			},
			title: 'This Is A Test LegalArticle'
		}, {
			category: 'Martime Law',
			clean: 'test-article',
			date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
			creator: {
				// image: Image,
				name: 'John Spiter',
				title: 'Senior Lawyer'
			},
			description: {
				small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
				summary: '',
			},
			title: 'This Is A Test LegalArticle'
		}];
		// return this.ArticleListService.get()
		// 	.then((response: Article[]) => {
		// 		return response;
		// 	});
	}
}

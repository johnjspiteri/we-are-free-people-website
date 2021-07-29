import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// import { Media } from '../interface';
import { MediaListService } from './service';

@Injectable({
	providedIn: 'root',
})

// export class ArticleListResolve implements Resolve<Media[]> {
export class MediaListResolve implements Resolve<any[]> {
	constructor(private MediaListService: MediaListService) {}

	resolve() {
		return [
			{
				category: 'Martime Law',
				clean: 'test-article',
				date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
				creator: {
					// image: Image,
					name: 'John Spiter',
					title: 'Senior Lawyer',
				},
				description: {
					small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					summary: '',
				},
				title: 'This Is A Test Article',
			},
			{
				category: 'Martime Law',
				clean: 'test-article',
				date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
				creator: {
					// image: Image,
					name: 'John Spiter',
					title: 'Senior Lawyer',
				},
				description: {
					small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					summary: '',
				},
				title: 'This Is A Test Article',
			},
			{
				category: 'Martime Law',
				clean: 'test-article',
				date: 'Tue Apr 14 2020 10:17:42 GMT+0200 (Central European Summer Time)',
				creator: {
					// image: Image,
					name: 'John Spiter',
					title: 'Senior Lawyer',
				},
				description: {
					small: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					large: 'This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test! This is a test, and only a test!',
					summary: '',
				},
				title: 'This Is A Test Article',
			},
		];
		// return this.MediaListService.get()
		// 	.then((response: Media[]) => {
		// 		return response;
		// 	});
	}
}

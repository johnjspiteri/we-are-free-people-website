import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// import { Media } from '../interface';
import { MediaFindService } from './service';

@Injectable({
	providedIn: 'root',
})
export class MediaFindResolve implements Resolve<any> {
	constructor(private mediaFindService: MediaFindService) {}

	resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
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
		];
		// return this.mediaFindService.get(activatedRouteSnapshot.params.project_clean)
		// 	.then((response: Media) => {
		// 		return response;
		// 	});
	}
}

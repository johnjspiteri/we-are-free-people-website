import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from '../interface';

@Injectable({
	providedIn: 'root',
})
export class MediaListService {
	constructor(private httpClient: HttpClient) {}

	get(): Promise<Media[]> {
		// return this.httpClient.get<Media[]>('http://localhost:8080')
		return this.httpClient.get<Media[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-article-data-list').toPromise();
	}
}

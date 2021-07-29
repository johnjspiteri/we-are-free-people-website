import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../interface';

@Injectable({
	providedIn: 'root'
})

export class ArticleListService {

	constructor(private httpClient: HttpClient) {
	}

	get(): Promise<Article[]> {
		// return this.httpClient.get<Article[]>('http://localhost:8080').toPromise();
		return this.httpClient.get<Article[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-article-data-list').toPromise();
	}
}

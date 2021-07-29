import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../interface';

@Injectable({
	providedIn: 'root'
})

export class ArticleFindService {

	constructor(private httpClient: HttpClient) {
	}

	get(project_clean: string): Promise<Article> {
		// return this.httpClient.get<Article>('http://localhost:8080?project_clean=' + project_clean).toPromise();
		return this.httpClient.get<Article>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-article-data-find?project_clean=' + project_clean).toPromise();
	}
}

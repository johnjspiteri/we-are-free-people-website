import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Article } from '@interface-agency/interfaces.website.article';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ArticleFindService {
	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080/v1';
	private url: string = 'https://website-article-find-nwa4qm77pa-ez.a.run.app/v1';

	get(area: string, section: string, category: string, topic: string, clean: string): Observable<Article> {
		return this.httpClient.get<Article>(this.url + '/' + area + '/' + section + '/' + category + '/' + topic + '/' + clean);
	}
}

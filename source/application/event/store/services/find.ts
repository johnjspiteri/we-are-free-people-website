import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Event } from './../../interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EventFindService {
	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080/v1';
	private url: string = 'https://website-article-find-nwa4qm77pa-ez.a.run.app/v1';

	get(area: string, section: string, category: string, topic: string, clean: string): Observable<Event> {
		return this.httpClient.get<Event>(this.url + '/' + area + '/' + section + '/' + category + '/' + topic + '/' + clean);
	}
}

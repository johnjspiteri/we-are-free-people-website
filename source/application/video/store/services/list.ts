import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { Video, VideoListRequest } from './../../interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VideoListService {
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080/v1';
	private url: string = 'https://website-article-list-nwa4qm77pa-ez.a.run.app/v1';

	post(payload: VideoListRequest): Observable<Video[]> {
		return this.httpClient.post<Video[]>(this.url, payload, this.httpOptions);
	}
}

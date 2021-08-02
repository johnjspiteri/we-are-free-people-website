import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { Career, CareerListRequest } from '@interface-agency/website-career-interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CareerListService {
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080/v1';
	private url: string = 'https://website-career-list-nwa4qm77pa-ez.a.run.app/v1';

	post(payload: CareerListRequest): Observable<Career[]> {
		return this.httpClient.post<Career[]>(this.url, payload, this.httpOptions);
	}
}

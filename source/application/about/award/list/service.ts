import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutAward } from '../interface/award';

@Injectable({
    providedIn: 'root'
})

export class AboutAwardListService {

    constructor(private httpClient: HttpClient) {}

    get(): Promise<AboutAward[]> {
		// return this.httpClient.get<AboutAward[]>('http://localhost:8080')
		return this.httpClient.get<AboutAward[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-award-data-list')
			.toPromise()
			.then(function(response) {
				return response;
			});
    }
}

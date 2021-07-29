import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from '../interface';

@Injectable({
    providedIn: 'root'
})

export class CareerListService {

    constructor(private httpClient: HttpClient) {}

    get(): Promise<Career[]> {
		// return this.httpClient.get<Career[]>('http://localhost:8080')
		return this.httpClient.get<Career[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-career-data-list')
			.toPromise()
			.then(function(response) {
				return response;
			});
    }
}

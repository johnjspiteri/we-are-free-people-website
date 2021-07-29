import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from '../interface';

@Injectable({
    providedIn: 'root'
})

export class CareerFindService {

    constructor(private httpClient: HttpClient) {}

    get(department:string, role:string): Promise<Career> {
		// return this.httpClient.get<Career>('http://localhost:8080?department=' + department + '&role=' + role)
		return this.httpClient.get<Career>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-career-data-find?department=' + department + '&role=' + role)
			.toPromise()
			.then(function(response) {
				return response;
			});
    }
}

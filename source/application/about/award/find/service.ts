import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutAward } from '../interface/award';

@Injectable({
    providedIn: 'root'
})

export class AboutAwardFindService {

    constructor(private httpClient: HttpClient) {}

    get(department:string, team:string, id:string, role:string): Promise<AboutAward[]> {
		// return this.httpClient.get<AboutAward[]>('http://localhost:8080?department=' + department + '&team=' + team + '&id=' + id + '&role=' + role)
		return this.httpClient.get<AboutAward[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-award-data-find?department=' + department + '&team=' + team + '&id=' + id + '&role=' + role)
			.toPromise()
			.then(function(response) {
				return response;
			});
    }
}

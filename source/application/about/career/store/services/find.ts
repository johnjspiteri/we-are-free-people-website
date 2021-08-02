import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Career } from '@interface-agency/website-career-interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CareerFindService {
	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080/v1';
	private url: string = 'https://website-career-find-nwa4qm77pa-ez.a.run.app/v1';

	get(department: string, team: string, category: string, experience: string, clean: string): Observable<Career> {
		return this.httpClient.get<Career>(this.url + '/' + department + '/' + team + '/' + category + '/' + experience + '/' + clean);
	}
}

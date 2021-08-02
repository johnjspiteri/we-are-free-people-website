import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CareerApplicationForm } from '@interface-agency/website-career-application-interface/interface/form';

@Injectable({
	providedIn: 'root',
})
export class CareerApplicationService {
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private httpClient: HttpClient) {}

	// private url: string = 'http://localhost:8080';
	private url: string = 'https://us-central1-interface-agency.cloudfunctions.net/website-career-application-create';

	post(form: CareerApplicationForm): Promise<string> {
		return this.httpClient.post<string>(this.url, form, this.httpOptions).toPromise();
	}
}

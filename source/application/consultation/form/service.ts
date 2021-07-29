import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ConsultationSubmitService {

	constructor(private httpClient: HttpClient) {
	}

	public post(consultationForm: object): Promise<string> {

		let httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			})
		};

		// return this.httpClient.post<any>('http://localhost:8080', consultationForm, httpOptions).toPromise();
		return this.httpClient.post<any>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-consultation-form-create', consultationForm, httpOptions).toPromise();
	}
}

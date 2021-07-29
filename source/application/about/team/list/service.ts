import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AboutTeamMember} from '../interface';

@Injectable({
	providedIn: 'root'
})

export class AboutTeamListService {

	constructor(private httpClient: HttpClient) {
	}

	get(): Promise<AboutTeamMember[]> {
		// return this.httpClient.get<AboutTeamMember[]>('http://localhost:8080').toPromise();
		return this.httpClient.get<AboutTeamMember[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-team-data-list').toPromise();
	}
}

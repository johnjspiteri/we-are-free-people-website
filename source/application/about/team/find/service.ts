import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AboutTeamMember} from '../interface';

@Injectable({
	providedIn: 'root'
})

export class AboutTeamMemberFindService {

	constructor(private httpClient: HttpClient) {
	}

	get(member_name: string, member_role: string): Promise<AboutTeamMember[]> {
		// return this.httpClient.get<AboutTeamMember[]>('http://localhost:8080?name=' + member_name + '&role=' + member_role).toPromise();
		return this.httpClient.get<AboutTeamMember[]>('https://us-central1-interface-agency.cloudfunctions.net/legal-family-lawyer-team-data-find?name=' + member_name + '&role=' + member_role).toPromise();
	}
}

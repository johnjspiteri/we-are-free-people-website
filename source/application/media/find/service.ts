import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from '../interface';

@Injectable({
	providedIn: 'root',
})
export class MediaFindService {
	constructor(private httpClient: HttpClient) {}

	get(project_clean: string): Promise<Media> {
		// return this.httpClient.get<Media>('http://localhost:8080?project_clean=' + project_clean).toPromise();
		return this.httpClient.get<Media>('https://us-central1-interface-agency.cloudfunctions.net/api-product-design-project-find?project_clean=' + project_clean).toPromise();
	}
}

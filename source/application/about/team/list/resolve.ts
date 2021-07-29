import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {AboutTeamMember} from '../interface';
import {AboutTeamListService} from './service';

@Injectable({
	providedIn: 'root'
})

export class AboutTeamListResolve implements Resolve<AboutTeamMember[]> {

	constructor(private aboutTeamListService: AboutTeamListService) {
	}

	resolve() {
		return this.aboutTeamListService.get();
	}
}

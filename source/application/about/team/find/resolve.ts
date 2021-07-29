import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {AboutTeamMember} from '../interface';
import {AboutTeamMemberFindService} from './service';

@Injectable({
	providedIn: 'root'
})

export class AboutTeamFindResolve implements Resolve<AboutTeamMember[]> {

	constructor(private aboutTeamMemberFindService: AboutTeamMemberFindService) {
	}

	resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
		return this.aboutTeamMemberFindService.get(activatedRouteSnapshot.params.member_name, activatedRouteSnapshot.params.member_role);
	}
}

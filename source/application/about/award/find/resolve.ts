import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AboutAward } from '../interface/award';
import { AboutAwardFindService } from './service';

@Injectable({
    providedIn: 'root'
})

export class AboutAwardFindResolve implements Resolve<AboutAward[]> {

    constructor(private aboutAwardFindService: AboutAwardFindService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
        return this.aboutAwardFindService.get(activatedRouteSnapshot.params.department, activatedRouteSnapshot.params.team, activatedRouteSnapshot.params.id, activatedRouteSnapshot.params.role)
			.then((response: AboutAward[]) => {
				return response;
			});
	}
}
